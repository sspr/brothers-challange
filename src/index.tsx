import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { AppProviders } from 'providers/AppProviders';
import { App } from './app/App';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
);
