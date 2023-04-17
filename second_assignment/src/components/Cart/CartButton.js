import classes from './CartButton.module.css';
import { toogleAction } from '../../context/slices/ui.slice';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
const CartButton = (props) => {
const dispatch = useDispatch();
const total = useSelector(state=> state.cart.items?.length);
const toogleCartButton = (event)=>{
  event.preventDefault();
  console.log("inside toogle button");
  dispatch(toogleAction.toogle());
}
  return (
    <button onClick={toogleCartButton} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{!total ?0:total}</span>
    </button>
  );
};

export default CartButton;
