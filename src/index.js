import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './Tabs';

const fields = ['', 'Name', 'Age', 'Country']; 
const rows = 
    [
        [
            'Carmen'
            , '33 years old'
            , 'Spain'
        ]
        , [
            'Carmen'
            , '33 years old'
            , 'Spain'
        ]
    ];



ReactDOM.render(
    <Tabs
        fields={fields}
        rows={rows}
    />
    , document.getElementById('app')
);

module.hot.accept();