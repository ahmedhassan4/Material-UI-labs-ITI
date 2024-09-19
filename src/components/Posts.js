// src/components/Posts.js
import React from 'react';
import { Box, Avatar, Typography, Paper } from '@mui/material';

const posts = [
  {
    id: 1,
    user: {
      name: 'John Doe',
      handle: '@johndoe',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    content: 'Just had a fantastic lunch! 🍔🍟',
    timestamp: '2h',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      handle: '@janesmith',
      avatar: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    content: 'Loving the new features on Twitter! 😍',
    timestamp: '3h',
  },
];

function Posts() {
  return (
    <Box sx={{ mt: 2 }}>
      {posts.map((post) => (
        <Paper key={post.id} sx={{ p: 2, mb: 2, borderRadius: 3 }}>
        
          <Box display="flex" alignItems="center" mb={1}>
            <Avatar src={post.user.avatar} sx={{ width: 48, height: 48 }} />
            <Box sx={{ ml: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {post.user.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {post.user.handle} • {post.timestamp}
              </Typography>
            </Box>
          </Box>

         
          <Typography variant="body1" sx={{ mb: 1 }}>
            {post.content}
          </Typography>

  
          {post.image && (
            <Box sx={{ mt: 2 }}>
              <img
                src={post.image}
                alt="Post content"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </Box>
          )}
        </Paper>
      ))}
    </Box>
  );
}

export default Posts;
