import { Box, styled } from '@mui/material'
import React from 'react'
import Footer from './Footer';

const Component = styled(Box)`
overflow-y: auto;
height: 80vh;
`;

const Wrapper = styled(Box)`
background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size: 50%;
`;


const Messages = ({person, conversation}) => {

  const [value, setValue] = useState('');

  const sendText = (e)=>{
    const code = e.keyCode || e.which;
  }

  return (
    <Wrapper>
        <Component>
            
        </Component>
        <Footer setValue={setValue} sendText={sendText}/>
    </Wrapper>
  )
}

export default Messages