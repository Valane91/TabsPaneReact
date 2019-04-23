import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './components';


import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(reducers)


ReactDOM.render(
    <Provider 
        store={store}
    >
        <Tabs />
    </Provider>
    , document.getElementById('app')
);

module.hot.accept();