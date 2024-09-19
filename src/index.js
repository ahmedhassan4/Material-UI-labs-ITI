// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'light', // Switch to light mode
    primary: {
      main: '#1DA1F2', // Twitter blue
    },
    background: {
      default: '#ffffff', // White background similar to Twitter
      paper: '#f5f8fa', // Light gray background for elements
    },
    text: {
      primary: '#14171A', // Twitter dark text color
      secondary: '#657786', // Twitter's light gray text color for secondary content
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif', // Twitter's font style
    fontSize: 15, // Slightly larger font for better readability
    button: {
      textTransform: 'none', // Disable uppercase text on buttons (like Twitter)
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px', // Round buttons, similar to Twitter's button design
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
