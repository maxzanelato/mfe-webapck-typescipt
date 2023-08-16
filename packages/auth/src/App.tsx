import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@material-ui/core/CssBaseline';

import Router from './router/Router';
import { AuthProvider } from './hooks/auth';

import './index.css';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <AuthProvider>
      <Router />
    </AuthProvider>
  </>
);
const rootElement = document.getElementById('app');
const root = createRoot(rootElement!);
root.render(<App />);
