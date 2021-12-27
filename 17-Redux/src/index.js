import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers'; // you don't need to write '/index' as long as the file name is 'index', it will be generated automatically 

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);