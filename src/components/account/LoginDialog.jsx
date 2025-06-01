import React, { useContext } from 'react'
import { Dialog, Box, List, ListItem, Typography, styled } from '@mui/material';
import { qrCodeImage } from './../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { AccountContext } from '../../context/AccountProvider';

const dialogStyle = { // object to style the dialog
  height: '96%',
  width: '60%',
  maxHeight: '100%',
  maxWidth: '100%',
  marginTop: '12%',
  boxShadow: 'none',
  overflow: 'hidden'
}

// what is this method called _ using styled component, only for MUI
// All these styled components are made outside the main component that is returned
const Component = styled(Box)`  
  display : flex;
`

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`
const QRCode = styled('img')({  // because img is not a MUI comp. we pass it as an object inside a function
  height: 264,
  width: 264,
  margin: '50px 0 0 50px',
})

const Title = styled(Typography)`
  font-size: 26px;
  margin-top: 25px;
  color: #525252;
  font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
  font-weight: 300;
`
// explain this one & > li _ picks up the li tag(ListItem) inside List component
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`

const LoginDialog = () => { 

  const {setAccount } = useContext(AccountContext);

  const onLoginSuccess = (res)=>{
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
  }
  const onLoginError = (res) => { 
    console.log('login failed', res)
  }


  return (
    <Dialog
      open={true}
      // sx={{dialogStyle}}
      PaperProps={{ sx: dialogStyle }}  // why did we use double braces
      hideBackdrop= {true}  
    >
      <Component>
        <Container >
          <Title> To use WhatsApp on computer</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
          </StyledList>
        </Container>
        <Box style={{position: 'relative'}}>
          <QRCode src={qrCodeImage} alt="qrCode" />
          <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginError}
            />
          </Box>
        </Box>
      </Component>

    </Dialog>

  )
}

export default LoginDialog