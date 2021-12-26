import React from 'react'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);
  console.log(product)

  return (
    <div className={classes.root}>
      <img className={classes.media} src={product.image} alt={product.name} />
      <div>
        <div className={classes.cardContent}>
          <h2 className={classes.title}>
            {product.name}
          </h2>
          <h2 className={classes.title}>
            ${product.price} tenge
          </h2>
        </div>
      </div>
      <div className={classes.cardActions}>
        <button aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;
