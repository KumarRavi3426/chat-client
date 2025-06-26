import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation, setConversation } from '../../service/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { formatDate } from '../../../utils/common-utils';

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;

const Image = styled('img')({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;
// url added to check if it is a media
const url = import.meta.env.VITE_BACKEND_URL;

const Conversation = ({ user }) => {
    const { setPerson, account, newMessageFlag } = useContext(AccountContext);

    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub })
            setMessage({ text: data?.message, timestamp: data?.updatedAt })
        }
        getConversationDetails();
    }, [newMessageFlag])

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub })
    }


    return (
        <Component onClick={getUser}>
            <Box>
                <Image src={user.picture} alt='dp' />
            </Box>
            <Box style={{ width: '100%' }}>
                <Container>
                    <Text>{user.name}</Text>
                    {
                        message?.text &&
                        <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
                    }
                </Container>
                <Box>
                    {/* In the production level put the backend url, cuz when uploading media, we set it as its name */}
                    <Text>{message?.text?.includes(url) ? 'media' : message.text}</Text>
                </Box>
            </Box>
        </Component>
    )
}

export default Conversation