import React, {useEffect} from 'react'
import ProductPreview from '../components/productpreview/ProductPreview'

import './ProductDetails.css'

function ProductDetails(props) {
  let checkLogin = 'check'
    useEffect(() => {
        async function getUser() {
            await fetch(`https://www.backend.sofalightbusiness.com/sofalight/backend/api/getLoggedIn?jwt=${localStorage.getItem('token')}`,{credentials: "omit"})
            .then(d => d.json())
            .then(d => {
                console.log(d);
                if(d.user === "Not Logged in"||d.user==="Couldn't get user data") {
                    console.log(d, "not logged in")
                    window.location = "/"
                    return
                }
                document.getElementById("preloaderScreenProductDetails").style.display = "none"
              })
            .catch(e => {
                console.log("error")
            })
        }
        if(checkLogin === 'check') {
            getUser()
        }
    },[checkLogin])

  return (
    <>
    <div id="preloaderScreenProductDetails">
      <div className='loader'>
        <div className='inner-loader'></div>
      </div>
    </div>
    <div>
        <ProductPreview role={props.role} />
    </div>
    </>
  )
}

export default ProductDetails