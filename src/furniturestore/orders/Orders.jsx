import React, {useState, useEffect} from 'react'

import "../components/carttable/CartTable.css"




function Orders() {
    const [data, setData] = useState([])
    let getDataStatus = "get"
    useEffect(() => {
        async function getData() {
          let result = await fetch("http://localhost:3002/sofalight/backend/api/products/order")
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
    <div className='sofa_light_dashboard_furniturestore_components_carttable'>
        <table>
            <thead>
            <tr>
                <th style={{paddingLeft: '35px'}} name="product">Product Name</th>
                <th name="price">Price</th>
                <th name="quantity">Quantity</th>
                <th name="customer">Customer Name</th>
                <th name="phone">Customer Phone</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map((d,k) => (
                    <tr key={k}>
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
                <td htmlFor="price" className='money'>{d[2]}</td>
                <td htmlFor="quantity" className='money'>{d[3]}</td>
                <td htmlFor="customer" className='money'>{d[4]}</td>
                <td htmlFor="phone" className='money'>{d[5]}</td>
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