import React from 'react'

import './Product.css'

import cart from './cart.svg'

function Product(props) {
  return (
    <div className='sofa_light_dashboard_furniturestore_components_product'>
      <div className='productImg'></div>
      <div className='productDesc'>
        <p>{props.productname}</p>
        <p>{props.productprice} RWF</p>
        <div className='productActions'>
          <button><img src={cart} alt='cart' />Add To Cart.</button>
          <button>Order Now.</button>
        </div>
      </div>
    </div>
  )
}

export default Product