import { useState } from 'react'
// import './App.css'
import Messenger from './components/Messenger.jsx'
// import { AppBar, Toolbar, styled } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider.jsx';



function App() {
  const clientId = import.meta.env.VITE_CLIENT_ID;  // secured the 
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App
