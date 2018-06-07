import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {calderaFormsReduxStore} from "./state";

ReactDOM.render(
    <Provider store={calderaFormsReduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();