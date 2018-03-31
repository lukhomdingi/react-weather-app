import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
// import {Router, Route} from 'react-router';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
