import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@material-ui/core/CssBaseline';

import Router from './router/Router';
import { AuthProvider } from 'auth/auth';
import { PokemonProvider } from './hooks/pokemon';

import './index.css';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <AuthProvider>
      <PokemonProvider>
        <Router />
      </PokemonProvider>
    </AuthProvider>
  </>
);

const rootElement = document.getElementById('app');
const root = createRoot(rootElement!);
root.render(<App />);
