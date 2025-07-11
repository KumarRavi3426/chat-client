import React, { useState } from 'react'
import { MoreVert } from '@mui/icons-material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, styled } from '@mui/material';


const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;


const HeaderMenu = ({ setOpenDrawer }) => {

  const [open, setOpen] = useState(null);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <MoreVert onClick={handleClick}/>
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuOption onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>
        
      </Menu>
    </>
  )
}

export default HeaderMenu