import React from 'react'
import { Box, styled } from '@mui/material'
import {Search as SearchIcon} from '@mui/icons-material';
import { InputBase } from '@mui/material';

const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    align-items: center;
`

const Wrapper = styled(Box)`
    background-color: #F0F2F5;
position: relative;
margin: 0 13px;
width: 100%;
border-radius: 10px;
`

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 6px 10px;
    color: #919191;
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    height: 15px;
    font-size: 14px;
`

const Search = ({setText}) => {
  return (
    <Component>
        <Wrapper>
            <Icon
                fontSize="small"
            >
                <SearchIcon/>
            </Icon>
            <InputField
                placeholder="Search or enter a new chat"
                onChange={(e)=>{setText(e.target.value)}}
            />
        </Wrapper>
    </Component>
  )
}

export default Search