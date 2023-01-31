
import { useSelector, useDispatch } from 'react-redux';
import { zero, inc, dec, rnd } from '../../actions/actions';



function Counter() {
  const {value} = useSelector(state => (state));
  const dispatch = useDispatch();
  return (
    <div>
      <h3>-  {value}  - </h3>
      <button onClick={()=> dispatch(zero())} 
      className="btn btn-info">ZERO</button>
      <button onClick={()=> dispatch(inc())} 
      className="btn btn-success">INC</button>      
      <button onClick={()=> dispatch(dec())} 
      className="btn btn-danger">DEC</button>
      <button onClick={()=> dispatch(rnd())} 
      className="btn btn-warning">RND</button>
    </div>
  );
}




export default Counter;