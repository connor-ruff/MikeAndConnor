import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import AlertTemplate from 'react-alert-template-basic'
import { positions, Provider as AlertProvider} from 'react-alert'
import Birding2 from './Components/Birding2';
import Hockey from './Components/Hockey';
import BirdAdd from './Components/BirdAdd';

const alertOptions = {
  timeout: 30000,
  position: positions.BOTTOM_CENTER
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...alertOptions}>
  <BrowserRouter>
  <React.StrictMode>
    <Route path='/' exact component={App} />
    <Route path='/bird' exact component={Birding2} />
    <Route path='/bird/add' exact component={BirdAdd} />
    <Route path='/hockey' exact component={Hockey} />
  </React.StrictMode>
  </BrowserRouter>
  </AlertProvider>,
  document.getElementById('root')

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
