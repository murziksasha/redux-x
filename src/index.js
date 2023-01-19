import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actions from './createActions';

import Counter from './Counter';

const store = createStore(reducer);
const {dispatch} = store;


const {inc, dec, zero, rnd} = bindActionCreators(actions, dispatch);


// document.querySelector('#zero').addEventListener('click', zero);

// document.querySelector('#inc').addEventListener('click', inc);

// document.querySelector('#dec').addEventListener('click', dec);

// document.querySelector('#rnd').addEventListener('click', ()=>{
//   const payload = Math.floor(Math.random() * 10 + 1);
//   rnd(payload);
// })

const update = () => {
  ReactDOM.render(<Counter
    counter={store.getState()}
    inc={inc}
    dec={dec}
    rnd={rnd}
    zero={zero}
  />, document.getElementById('root'))
}

update();

store.subscribe(update);

