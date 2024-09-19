import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Button, Typography } from '@mui/material';
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  Bookmark as BookmarkIcon,
  List as ListIcon,
  Person as PersonIcon,
  MoreHoriz as MoreHorizIcon,
} from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';

function Sidebar() {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Explore', icon: <SearchIcon /> },
    { text: 'Notifications', icon: <NotificationsIcon /> },
    { text: 'Messages', icon: <MailIcon /> },
    { text: 'Bookmarks', icon: <BookmarkIcon /> },
    { text: 'Lists', icon: <ListIcon /> },
    { text: 'Profile', icon: <PersonIcon /> },
    { text: 'More', icon: <MoreHorizIcon /> },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        maxWidth: 280,
        height: '80vh',
        paddingTop: 2,
        paddingLeft: 2,
        paddingRight: 2,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
    
      <Box>
        <TwitterIcon sx={{ fontSize: 80, color: '#1DA1F2'  }} />
      </Box>

   
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              borderRadius: 5,
              marginBottom: 0.5, 
              paddingY: 0.75, 
            }}
          >
            <ListItemIcon sx={{ color: '#1DA1F2', minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1" 
                  sx={{ fontWeight: 500, color: '#1DA1F2' }}
                >
                  {item.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

     
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: '#1DA1F2',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '30px',
          height: 45, 
          marginTop: 1, 
          '&:hover': { backgroundColor: '#1991DA' },
        }}
      >
        Tweet
      </Button>
    </Box>
  );
}

export default Sidebar;
