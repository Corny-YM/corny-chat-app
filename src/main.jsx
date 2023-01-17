import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import AppProvider from './context/AppProvider';
import store from './reducers';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>,
  // </React.StrictMode>,
);
