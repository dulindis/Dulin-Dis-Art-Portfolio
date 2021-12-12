import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store ,persistor} from './redux/store.js'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
        <BrowserRouter>
              <PersistGate persistor={persistor}>
                  {/* <h1>im working</h1> */}
                  <App />
              </PersistGate>
      </BrowserRouter>

    </Provider>
  </React.StrictMode> ,
  document.getElementById('root')
);

console.log('im here')
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
