import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from "./Pages/Home";


render(
    <Home />,
    document.getElementById('root')
)

serviceWorker.register();
