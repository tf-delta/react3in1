import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import Root from './App'
import Store from './Store';

ReactDOM.render(
    <Provider store={Store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);
