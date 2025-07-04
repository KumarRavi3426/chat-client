import { useContext, useState } from "react"
import { Box, styled } from "@mui/material"
import { AccountContext } from "../../../context/AccountProvider"
import MessageIcon from '@mui/icons-material/Message';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from "../../drawer/InfoDrawer";


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
`
// margin-left: auto, makes the content shift right
const Wrapper = styled(Box)`
    margin-left: auto;  
    & > *{
        margin-left: 2px;
        padding: 8px;
        color: #000;
    }
    & : first-of-type {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const Header = () => {
    const { account } = useContext(AccountContext);


    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = ()=>{
        setOpenDrawer(true);
    }
    return (
        <>
            <Component>
                <Image src={account.picture} alt="dp" onClick={()=> toggleDrawer()} />
                <Wrapper>
                    {/* to delete */}
                    <button style={{fontSize: '15px'}} onClick={()=> {localStorage.clear(); window.location.reload();}}>Logout</button>
                    <MessageIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header