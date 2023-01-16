import {createStore} from 'redux';
import reducer from './reducer';
import {inc, dec, rnd} from './createActions';

const store = createStore(reducer);
const {dispatch} = store;



document.querySelector('#inc').addEventListener('click', ()=>{
  dispatch(inc());

})

document.querySelector('#dec').addEventListener('click', ()=>{
  dispatch(dec());
})

document.querySelector('#rnd').addEventListener('click', ()=>{
  const payload = Math.floor(Math.random() * 10 + 1);
  dispatch(rnd(payload));
})

const update = () => {
  document.querySelector('#counter').textContent = store.getState();
}

store.subscribe(update);