import React from 'react'
import EditProduct from './editproduct/EditProduct';
//import AddProduct from './addproduct/AddProduct';

import './FurnitureStore.css';
//import ProductDetails from './productdetails/ProductDetails';
//import ViewProducts from './viewproducts/ViewProducts';
// import ViewProductsAdmin from './viewproductsadmin/ViewProductsAdmin';


function FurnitureStore() {
  return (
    <div className='sofa_light_dashboard_furniturestore'>
        {/* <ProductDetails /> */}
        {/* <AddProduct /> */}
        {/* <ViewProducts /> */}
        {/* <ViewProductsAdmin /> */}
        <EditProduct />
    </div>
  )
}

export default FurnitureStore