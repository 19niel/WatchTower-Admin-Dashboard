import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "state"; // importing is easy due to using the jsconfig.json
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    global: globalReducer,
  },

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* this is a redux toolkit boiler plate */}
      <App />
    </Provider>
  </React.StrictMode>
);

