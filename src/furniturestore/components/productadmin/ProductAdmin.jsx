import React from 'react'

import './ProductAdmin.css'

function ProductAdmin(props) {
  return (
    <div className='sofa_light_dashboard_furniturestore_components_productadmin'>
      <div className='productImg'></div>
      <div className='productDesc'>
        <p>{props.productname}</p>
        <p>{props.productprice} RWF</p>
        <div className='productActions'>
          <button>Edit.</button>
          <button>Delete.</button>
        </div>
      </div>
    </div>
  )
}

export default ProductAdmin