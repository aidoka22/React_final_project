import React from 'react'
import Slider from '../Slider/Slider';
import Products from '../Products/Products';

const Home = ({props,onAddToCart}) => {
  return (
    <div>
      <Slider />
      <Products onAddToCart={onAddToCart}/>
    </div>
  )
}

export default Home
