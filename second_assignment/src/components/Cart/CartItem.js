import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux';
import { cartActions } from '../../context/slices/cart.slice';
const CartItem = (props) => {
  const { title, quantity, total, price,id } = props.item;
  const dispatch = useDispatch();
  
  function addItem(event){
    event.preventDefault();
    dispatch(cartActions.addCartItems({id,title,price}));
  };

  function removeItem(event){
    event.preventDefault();
    dispatch(cartActions.removeItemFromCart({id})); 
  }
  
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
