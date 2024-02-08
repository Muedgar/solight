import React, {useState, useEffect} from 'react'

import "../components/carttable/CartTable.css"


import './Orders.css'

import formatPrice from '../viewproductsadmin/formatMoney'

function Orders() {
    let checkLogin = 'check'


    useEffect(() => {
        async function getUser() {
            await fetch(`https://www.backend.sofalightbusiness.com/sofalight/backend/api/getLoggedIn?jwt=${localStorage.getItem('token')}`,{credentials: "omit"})
            .then(d => d.json())
            .then(d => {
                if(d.user === "Not Logged in"||d.user==="Couldn't get user data") {
                    console.log(d, "not logged in")
                    window.location = "/"
                    return
                }
                document.getElementById("preloaderScreenOrdersProduct").style.display = "none"
              })
            .catch(e => {
                console.log("error")
            })
        }
        if(checkLogin === 'check') {
            getUser()
        }
    },[checkLogin])

    const [data, setData] = useState([])
    let getDataStatus = "get"
    useEffect(() => {
        async function getData() {
          let result = await fetch(`https://www.backend.sofalightbusiness.com/sofalight/backend/api/products/order?jwt=${localStorage.getItem('token')}`,{credentials: 'omit'})
          .then(d => d.json())
          .then(d => d).catch(e => 
              {
                  console.log(e)
              });
              setData(result);
        }
        
        getData()
        
      },[getDataStatus]);
    
  return (
    <>
    <div id="preloaderScreenOrdersProduct">
      <div className='loader'>
        <div className='inner-loader'></div>
      </div>
    </div>
    <button className='deleteOrdersButton' onClick={async e => {
        let orders = document.querySelectorAll(".activeToDelete")
        
        if(orders.length === 0) {
            alert("Select at least one order to delete");
            return;
        }

        let d = [];
        orders.forEach((order,i) => {
            let data = {
                id: orders[i].getAttribute("orderid"),
                name: orders[i].getAttribute("productname"),
                price: orders[i].getAttribute("price"),
                quantity: orders[i].getAttribute("quantity")
            }
            d.push(data)
        })
        
        await fetch(`https://www.backend.sofalightbusiness.com/sofalight/backend/api/products/orders/deleteOne?jwt=${localStorage.getItem('token')}`, {
  method: "DELETE",
  credentials: 'omit',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(d),
})
  .then((response) => response.json())
  .then((result) => {
    alert("deleted successfully")
    window.location.reload()
  })
  .catch((error) => {
    console.log(error.message)
  });
    }}>Delete Orders</button>
    <div className='sofa_light_dashboard_furniturestore_components_carttable'>
        
        <table>
            <thead>
            <tr>
                <th style={{paddingLeft: '35px'}} name="product">Product Name</th>
                <th name="price">Price</th>
                <th name="quantity">Quantity</th>
                <th name="total">Total</th>
                <th name="customer">Customer Name</th>
                <th name="phone">Customer Phone</th>
                <th name="date">Order Date</th>
            </tr>
            </thead>
            <tbody>
            {
               data && data.length>0 && data.map((d,k) => (
                    <tr id={`ordertrId${k}`} onClick={e => {

                        document.getElementById(`ordertrId${k}`).classList.toggle("activeToDelete")
                    }} orderid={d[7]} productname={d[1]} price={d[2]} quantity={d[3]} key={k}>
                <td htmlFor="product">
                    <img className='thumbnail' src={d[0]} alt="thumbnail" />
                    <div className='thumbnailDescription'>
                    <div>
                        <p style={{marginTop: '40px'}}>{d[1]}</p>
                    </div>
                    {/* <div>
                        <p>Size: <span>Small</span></p>
                        <p>Color: <span>Golden</span></p>
                    </div> */}
                </div>
                </td>
                <td htmlFor="price" className='money'>{formatPrice(d[2])} RWF</td>
                <td htmlFor="quantity" className='money'>{d[3]}</td>
                <td htmlFor="total" className='money'>{formatPrice(d[2]*d[3])} RWF</td>
                <td htmlFor="customer" className='money'>{d[4]}</td>
                <td htmlFor="phone" className='money'>{d[5]}</td>
                <td htmlFor="date" className='money'>{d[6]}</td>
            </tr>
                ))
            }
            </tbody>
        </table>

    
    </div>
   
    </>
  )
}

export default Orders