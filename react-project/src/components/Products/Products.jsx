import React from 'react'
import Product from '../Product/Product';
import useStyles from './styles';
import { connect } from "react-redux";
import { getMainCategories, getDetailedCategories, getProducts, getProductsNextPage } from "./../../actions";
import { useEffect } from 'react';

const Products = (props, onAddToCart ) => {
  const classes = useStyles();
  const { data, products } = props
  useEffect(() => {
    props.getMainCategories()
    props.getProducts()
  }, [])

  // console.log(products)
  // console.log(data)

  return (
    <main >
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          {
            data.map(val=>{
              return <Product product={val} onAddToCart={onAddToCart}/>
            })
          }
        </div>
        <div className={classes.toolbar} />
        <div>
          {
            products.map(val => {
              return <div key={val.id}>{val.name}</div>
            })
          }
        </div>

        <button onClick={() => props.getProductsNextPage(2)}>page 2</button>
      </div>
    </main>
  );
};

const mapStateToProps = ({ data = [], detailed_data = [], products = [], isLoadingData = false }) => ({
  data,
  detailed_data,
  isLoadingData,
  products
});

export default connect(
  mapStateToProps,
  {
    getMainCategories,
    getDetailedCategories,
    getProductsNextPage,
    getProducts,
  }
)(Products);
