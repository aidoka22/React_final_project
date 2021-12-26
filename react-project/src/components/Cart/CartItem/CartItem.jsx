import React from 'react';
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div className={classes.root}>
    <img className={classes.media} src={item.image} alt={item.name} />
    <div>
      <div className={classes.cardContent}>
        <h2 className={classes.title}>
          {item.name}
        </h2>
        
      </div>
    </div>
    <div className={classes.cardActions}>
        <div className={classes.buttons}>
          <button className={classes.button} onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
          <h2 className={classes.title}>
          ${item.price} tenge
          </h2>
          <button className={classes.button} onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
        </div>
        <button className={classes.button} onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
    </div>
  </div>
  );
};

export default CartItem;