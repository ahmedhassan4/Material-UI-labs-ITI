// src/components/Trends.js
import React from 'react';
import { Box, Typography, Paper, TextField, List, ListItem, Button } from '@mui/material';

const trends = [
  { topic: '#BreakingNews', subtext: 'Lunar photography improves the discovery of the moon', count: '10,094' },
  { topic: '#WorldNews', subtext: '125K Tweets', count: '5,094' },
  { topic: '#InternationalCatDay', subtext: 'These cats are ready', count: '2,757' },
  { topic: '#GreatestOfAllTime', subtext: '100K Tweets', count: '4,123' },
];

function Trends() {
  return (
    <Box sx={{ p: 2, backgroundColor: '#F7F9F9', borderRadius: 3 }}>
  
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search Twitter"
        InputProps={{
          style: {
            borderRadius: '30px',
            backgroundColor: '#E1E8ED',
          },
        }}
        sx={{ marginBottom: 3 }}
      />
      
      
      <Paper sx={{ p: 2, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Trends for you
        </Typography>

        <List>
          {trends.map((trend, index) => (
            <ListItem key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 2 }}>
              <Typography variant="body2" sx={{ color: 'gray' }}>
                Trending worldwide
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {trend.topic}
              </Typography>
              <Typography variant="body2" sx={{ color: 'gray' }}>
                {trend.subtext}
              </Typography>
              <Typography variant="body2" sx={{ color: 'gray' }}>
                {trend.count} people are Tweeting about this
              </Typography>
            </ListItem>
          ))}
        </List>

       
        <Button variant="text" sx={{ color: '#1DA1F2', textTransform: 'none' }}>
          Show more
        </Button>
      </Paper>
    </Box>
  );
}

export default Trends;
