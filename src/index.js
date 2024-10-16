import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';

import './scss/app.scss';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <Provider store={store}>
      <App tab="home" />
    </Provider>
  </Router>
);