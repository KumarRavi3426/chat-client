import { Box, styled } from '@mui/material'
import React, { useState } from 'react'
import Header from './Header'
import Search from './Search'
import Conversations from './Conversations'

const Container = styled(Box)`
  height: 100%;
`

const Menu = () => {

  const [text, setText] = useState('');
    

  return (
    <>
        <Container>
            <Header/>
            <Search setText = {setText}/>
            <Conversations text = {text}/>
        </Container>
    </>
  )
}

export default Menu