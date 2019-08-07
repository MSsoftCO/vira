import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "font-awesome/css/font-awesome.min.css";
import "vazir-font/dist/font-face.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));

serviceWorker.register();
