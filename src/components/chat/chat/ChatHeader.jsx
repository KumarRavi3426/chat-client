import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { emptyProfilePicture } from '../../../constants/data'
import { MoreVert, Search } from '@mui/icons-material'
import { AccountContext } from '../../../context/AccountProvider'
import { useContext } from 'react'

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`

const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const ChatHeader = ({person}) => {

    const {activeUsers} = useContext(AccountContext)


    return (
        <Header>
            <Image src={person.picture} alt='dp'></Image>
            <Box>
                <Name>{person.name}</Name>
                {/* try .filter() in place of .find() */}
                <Status> {activeUsers?.find(user=> user.sub===person.sub) ? "Online": "Offline"} </Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>

        </Header>
    )
}

export default ChatHeader