import React, { useContext } from 'react'
import { Dialog, Box, styled } from '@mui/material'
import Menu from './menu/Menu'
import EmptyChat from './chat/EmptyChat'
import ChatBox from './chat/ChatBox'
import { AccountContext } from '../../context/AccountProvider'

const Component = styled(Box)`  
  display : flex;
`

const LeftComponent = styled(Box)`
    min-width: 450px;
`

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0,0,0, 0.14);
`

const dialogStyle = { // object to style the dialog, passed using PaperProps, using sx:
    height: '96%',
    width: '100%',
    margin: '20px',
    maxHeight: '100%',
    maxWidth: '100%',
    borderRadius: '0px',
    boxShadow: 'none',
}

const ChatDialog = () => {

    const { person } = useContext(AccountContext);

    return (
        <>
            <Dialog
                open={true}
                PaperProps={{ sx: dialogStyle }}
                hideBackdrop={true}
                maxWidth={'md'}
            >
                <Component>
                    <LeftComponent>
                        <Menu />
                    </LeftComponent>
                    <RightComponent>
                        {Object.keys(person).length ? <ChatBox/> : <EmptyChat/>}
                    </RightComponent>
                </Component>

            </Dialog>
        </>
    )
}

export default ChatDialog