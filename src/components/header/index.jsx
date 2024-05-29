import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Popover, Box, Divider } from '@mui/material';
import ProfileCard from '../profile-card';

const Header = ({ setIsLoggedIn }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">User Comments</Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls={id}
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar>A</Avatar>
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Box p={2}>
              <ProfileCard email={"user@example.com"} username={"Username"} role={"Admin"}/>
              <Divider />
              <Typography
                variant="body2"
                onClick={handleLogout}
                style={{ cursor: 'pointer', color: 'blue', marginTop: '8px', textAlign:"center" }}
              >
                Logout
              </Typography>
            </Box>
          </Popover>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
