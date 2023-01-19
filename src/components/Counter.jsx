import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../createActions';


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

const mapStateToProps = (state) => {
  return {
    ...state,
    counter: state
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }


export default connect(mapStateToProps, actions)(Counter);