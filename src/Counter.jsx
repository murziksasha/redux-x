

import React from 'react';

function Counter({counter, inc, dec, rnd, zero}) {
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <button id="zero" className="btn btn-warning btn-lg"
      onClick={zero}
      >ZERO</button>
      <button id="dec" className="btn btn-primary btn-lg"
      onClick={dec}
      >DEC</button>
      <button id="inc" className="btn btn-secondary btn-lg"
      onClick={inc}
      >INC</button>      
      <button id="rnd" className="btn btn-danger btn-lg"
      onClick={rnd}
      >RND</button>
  </div>
  );
}

export default Counter;