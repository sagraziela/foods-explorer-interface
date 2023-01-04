import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './hooks/auth';
import { Router } from './routes'
import GlobalStyles from './styles/global';
import theme from "./styles/theme";
import './styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Router />
      </AuthProvider>    
    </ThemeProvider>
  </React.StrictMode>
)
