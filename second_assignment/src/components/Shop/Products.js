import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { DUMMY_PRODUCT_DATA } from '../../utils/dummy.data';


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
{DUMMY_PRODUCT_DATA.map((prod)=>{
  return (        
  <ProductItem
    key={prod.id}
    id={prod.id}
    title={prod.title}
    price={prod.price}
    description={prod.description}
  />)
})}
      </ul>
    </section>
  );
};

export default Products;
