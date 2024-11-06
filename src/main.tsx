import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { App } from './App';
import { router } from './config/router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router} />
      </App>
    </Provider>
  </React.StrictMode>
);
