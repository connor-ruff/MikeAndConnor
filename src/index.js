import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import Birding from './Components/Birding';
import Hockey from './Components/Hockey';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Route path='/' exact component={App} />
    <Route path='/bird' exact component={Birding} />
    <Route path='/hockey' exact component={Hockey} />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
