import { useState } from 'react'
// import './App.css'
import Messenger from './components/Messenger.jsx'
// import { AppBar, Toolbar, styled } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider.jsx';



function App() {
  const clientId = '265459465973-rviljncqb374qtil4d9r5jphm58o0k6f.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App
