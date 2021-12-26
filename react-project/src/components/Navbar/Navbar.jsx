import {React ,useState} from 'react'
import {Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo2.png'
import useStyles from './styles';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <nav>
      <div className={classes.container}>
        <div>
          <Link to="/" className={classes.title} >
          <img src={logo} alt="logotype" height="55px" className={classes.image} /> Clothe shop
          </Link>
          <Link to="/" className={classes.home}>
          Home
          </Link>
          <Link to="/about" className={classes.home}>
          About
          </Link>
          <Link to="/products" className={classes.home}>
          Products
          </Link>
          {location.pathname != '/cart' && (
          <div className={classes.cart}>
            <Link to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </Link>
          </div>
          )}
        </div>
        {/* {authed ? <span className="link" onClick={logOut}>Logout</span> :
        <Link className="link" to='/login'>Login</Link>} */}
      </div>
    </nav>
  );
};

export default NavBar;
