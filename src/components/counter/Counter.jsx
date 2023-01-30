
import { useSelector, useDispatch } from 'react-redux';
import { zero, inc } from '../../actions/actions';



function Counter() {
  const {value} = useSelector(state => (state));
  const dispatch = useDispatch();
  return (
    <div>
      <h3>-  {value}  - </h3>
      <button onClick={()=> dispatch(zero())} 
      className="btn btn-danger">ZERO</button>
      <button onClick={()=> dispatch(inc())} 
      className="btn btn-secondary">INC</button>
    </div>
  );
}




export default Counter;