
import { getUsers } from '../../service/api'
import { useEffect, useState } from 'react';
import Conversation from './Conversation';
import { Box, Divider, styled } from '@mui/material';
import { AccountContext } from './../../../context/AccountProvider';
import { useContext } from 'react';

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: 0.6;
`

const Conversations = ({text}) => {

    const {account} = useContext(AccountContext);

    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    
    let response;
    useEffect(()=>{
        const fetchData = async()=>{
            response = await getUsers();
            setUsers(response);
            setAllUsers(response);
            
        }
        
        fetchData();
        
    },[])
    
    useEffect(()=>{
        const filteredData = allUsers.filter(user=> user.name.toLowerCase().includes(text.toLowerCase()))
        setUsers(filteredData);

    }, [text])


  return (
    <>
        <Component>
            {
                users.map((user)=> (
                    user.sub!== account.sub &&
                    <div key={user._id || user.id} >
                        <Conversation user={user}/>
                        <StyledDivider/>
                    </div>
                ))
            }
        </Component>
    </>
  )
}

export default Conversations