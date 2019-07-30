import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './Pages/Home';

ReactDOM.render(
    <Home name="cakep"/>, 
    document.getElementById('root')
);

serviceWorker.unregister();
