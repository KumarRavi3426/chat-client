import { Box, styled } from '@mui/material'
import React, { useState, useContext, useEffect, useRef } from 'react'
import Footer from './Footer';
import { AccountContext } from '../../../context/AccountProvider';
import { getMessages, newMessage } from '../../service/api';
import Message from './Message';

const Component = styled(Box)`
overflow-y: auto;
height: 80vh;
`;

const Container = styled(Box)`
  margin: 1px 80px;
`

const Wrapper = styled(Box)`
background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size: 50%;
`;


const Messages = ({ person, conversation }) => {

  
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);

  
  const [file, setFile] = useState()
  const [image, setImage] = useState('')

  const scrollRef = useRef();
  
  const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);

  useEffect(()=>{
    socket.current.on('getMessage', data=>{
      setIncomingMessage({ ...data, createdAt: Date.now()})
    })
  }, [])
  
  
  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation?._id);
      setMessages(data)
    }
    conversation?._id && getMessageDetails();
  }, [conversation?._id, person?._id, newMessageFlag])
  
  useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition: 'smooth'})
  }, [messages])
  
  useEffect(()=>{
    if (incomingMessage && conversation?.members?.includes(incomingMessage.senderId)) {
      setMessages(prev => [...prev, incomingMessage]);
      setNewMessageFlag(prev => !prev);
    }

      // Notification.requestPermission()
      // new Notification("New message", {
      //   body: incomingMessage?.text
      // })
  }, [incomingMessage, conversation])


  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code == 13) {
      let message;
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'text',
          text: value
        }
      } else{
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'file',
          text: image
        }
      }

      socket.current.emit('sendMessage', message)

      await newMessage(message);


      setValue('')
      setFile('')
      setImage('')
      setNewMessageFlag(prev => !prev)
    }

  }

  return (
    <Wrapper>
      <Component>
        {
          messages && messages.map(message => (
            <Container key={message._id} ref={scrollRef}>
              <Message message={message} />
            </Container>
          ))
        }
      </Component>
      <Footer
        sendText={sendText}
        value={value}
        setValue={setValue}
        file={file}
        setFile={setFile}
        setImage={setImage}
        image ={image}
      />
    </Wrapper>
  )
}

export default Messages