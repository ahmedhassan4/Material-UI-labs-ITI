// src/App.js
import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Tweet from './components/Tweet';
import Trends from './components/Trends';
import Posts from './components/Posts';


function App() {
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="center">
      
        <Grid item xs={12} md={3}>
          <Box sx={{ position: 'sticky', top: 0 }}>
            <Sidebar />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
        <Tweet/>
        <Posts/>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box sx={{ position: 'sticky', top: 0 }}>
          <Trends />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
