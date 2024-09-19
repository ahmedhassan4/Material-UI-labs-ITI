// src/components/Tweet.js
import React from 'react';
import { Box, Avatar, TextField, Button, IconButton } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Tweet() {
  return (
    <Box sx={{ 
      border: '1px solid #E1E8ED', 
      borderRadius: 3, 
      padding: 2, 
      marginBottom: 2, 
      backgroundColor: 'white' 
    }}>
      <Box display="flex" alignItems="flex-start" mb={2}>
        
        <Avatar
          alt="User Avatar"
          src="/path-to-your-avatar.jpg"  
          sx={{ width: 48, height: 48, marginRight: 2 }}
        />
   
        <TextField
          fullWidth
          variant="standard"
          placeholder="What's happening?"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{ fontSize: '20px' }}
        />
      </Box>

      
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* Icons */}
        <Box>
          <IconButton>
            <ImageIcon sx={{ color: '#1DA1F2' }} />
          </IconButton>
          <IconButton>
            <GifIcon sx={{ color: '#1DA1F2' }} />
          </IconButton>
          <IconButton>
            <PollIcon sx={{ color: '#1DA1F2' }} />
          </IconButton>
          <IconButton>
            <EmojiEmotionsIcon sx={{ color: '#1DA1F2' }} />
          </IconButton>
        </Box>
        
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1DA1F2',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: '30px',
            padding: '8px 16px',
            '&:hover': {
              backgroundColor: '#1991DA',
            },
          }}
        >
          Tweet
        </Button>
      </Box>
    </Box>
  );
}

export default Tweet;
