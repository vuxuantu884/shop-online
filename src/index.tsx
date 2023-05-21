import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'antd/dist/reset.css';

import { ThemeProvider } from 'styled-components';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { themes } from './themes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
