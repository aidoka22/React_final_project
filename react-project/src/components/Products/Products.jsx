import React from 'react'
import {Grid} from '@material-ui/core'
import Product from '../Product/Product';
import useStyles from './styles';
import Slider from '../Slider/Slider';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  console.log(products)
  if (!products.length) return <p>Loading...</p>;

  return (
    <main >
      <Slider />
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
};

export default Products;