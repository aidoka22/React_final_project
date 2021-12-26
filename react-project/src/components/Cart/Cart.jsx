import React from 'react';
import { Container, div, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();
  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <div variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </div>
  );

  if (!cart.line_items) return <div>Loading</div>;

  const renderCart = () => (
    <>
      <div className={classes.grid} container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <div className={classes.grid} item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </div>
        ))}
      </div>
      <div className={classes.cardDetails}>
        <div >Subtotal: {cart.subtotal.formatted_with_symbol}</div>
        <div>
          <div className={classes.button} className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</div>
        </div>
      </div>
    </>
  );

  return (
    <div className={classes.container}>
      <div className={classes.toolbar} />
      <div className={classes.title}  gutterBottom>Your Shopping Cart</div>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </div>
  );
};

export default Cart;