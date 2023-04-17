import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { cartActions } from './context/slices/cart.slice';
//this variable will be initialized when the file will be parsed not when the component refreshes
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const toogle = useSelector(state=>state.toogle.toogleCart);
  

  //this is the side effect approach

  //for fetching the cart data

  useEffect(()=>{
    try {
      const response = fetch("https://redux-c5fcb-default-rtdb.firebaseio.com/cart.json",{
        method:'GET',
      })
      .then(res=>res.json())
      .then((result)=>{
        dispatch(cartActions.replaceCart({items:result.items|| [],totalQuantity:result.totalQuantity}));
      })
      .catch((error)=>{
        console.log(error);
      });
      
    } catch (error) {
      console.log(error);
    }
  },[dispatch])

  //for posting the data
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return () => { console.log("initial") };
    }
    try {
      const response = fetch("https://redux-c5fcb-default-rtdb.firebaseio.com/cart.json", {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
    } catch (error) {
      console.log(error);
    }


  }, [cart]);








  return (
    <Layout>
      {toogle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
