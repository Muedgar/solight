import React, {useState, useEffect} from 'react'

import './ProductPreview.css';

import couch1 from './couch1.webp'
import couch2 from './couch2.webp'
import couch3 from './couch3.webp'
import couch4 from './couch4.webp'

import cart from './cart.svg'

function ProductPreview(props) {
  let [count,setCount] = useState(1);
  let [thumbnail, setThumnail] = useState(couch1);
  useEffect(() => {
    function handleResize() {
      if(window.innerWidth>1000) {
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview").style.flexDirection = "row"
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview_imagepreview").style.width = "60%"
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview_description").style.width = "40%"
      }
      if(window.innerWidth<1000) {
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview").style.flexDirection = "column"
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview_imagepreview").style.width = "90%"
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview_description").style.width = "90%"
    }
}
    window.addEventListener('resize', handleResize)
  })
  return (
    <div className='sofa_light_dashboard_furniturestore_components_productpreview'>
        <div className='sofa_light_dashboard_furniturestore_components_productpreview_imagepreview'>
            <div className='imagePreview'>
                <img src={thumbnail} alt='preview'/>
            </div>
            <div className='thumbnails'>
                <div onClick={e=>setThumnail(couch1)}>
                    <img src={couch1} alt='preview'/>
                </div>
                <div onClick={e=>setThumnail(couch2)}>
                    <img src={couch2} alt='preview'/>
                </div>
                <div onClick={e=>setThumnail(couch3)}>
                    <img src={couch3} alt='preview'/>
                </div>
                <div onClick={e=>setThumnail(couch4)}>
                    <img src={couch4} alt='preview'/>
                </div>
            </div>
        </div>
        <div className='sofa_light_dashboard_furniturestore_components_productpreview_description'>
            <h1 className='productTitle'>Leo Sodales Varius</h1>
            <h6 className='productBrand'><span>Brand : </span><span>Chair</span></h6>
            <h4 className='productPrice'>200,000 RWF</h4>
            <h5 className='productOriginalPrice'><span>434,000 RWF</span> <span>50% Off</span></h5>
            <p className='productDetails'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
            <p className='productStatus'><span>Available: </span><span>In Stock</span></p>
            <div className='productQuantity'><span>Quantity: </span> 
                <div>
                <button 
                    onClick={e => count>1?setCount(--count):setCount(count)}>-</button>
                <span>{count}</span>
                <button onClick={e => setCount(++count)}>+</button>
                </div>
            </div>
            <div className='productActions'>
                <button>Order Now.</button>
                <button><img src={cart} alt="cart" />Add to Cart.</button>
            </div>        
            <p className='productCategory'><span>Category: </span><span>Furniture</span></p>
            <p className='productTags'><span>Tags: </span><span>Blue, Green, Light</span></p>
        </div>
    </div>
  )
}

export default ProductPreview