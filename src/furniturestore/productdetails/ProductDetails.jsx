import React from 'react'
import ProductPreview from '../components/productpreview/ProductPreview'

import './ProductDetails.css'

function ProductDetails(props) {
  return (
    <div>
        <ProductPreview role={props.role} />
    </div>
  )
}

export default ProductDetails