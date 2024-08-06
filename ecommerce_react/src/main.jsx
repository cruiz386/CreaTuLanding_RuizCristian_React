import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ContextProvider } from './components/Context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
