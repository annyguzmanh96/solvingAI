import React from 'react';

import { createRoot } from 'react-dom/client';  // Método React 18

import App from './App';
import { CssVarsProvider } from '@mui/joy/styles';
import theme from './theme/theme';

// Obtiene elemento DOM en el que se va a montar la app
const container = document.getElementById('root');

// Crea la raíz de React 18
const root = createRoot(container);

// Renderiza la aplicación
root.render(
  <CssVarsProvider theme={theme}>
    <App />
  </CssVarsProvider>
);
