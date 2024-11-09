import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';
import { client } from './config/query-client.js';

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}><App /></BrowserRouter>
    <CssBaseline />
  </QueryClientProvider>
)
