import React, {useState,useEffect} from 'react'
import ProductAdmin from '../components/productadmin/ProductAdmin';
import formatPrice from './formatMoney';


const GetProducts = (props) => {
    const [data, setData] = useState([])
   
    useEffect(() => {
        async function getData() {
            if("all" === props.filter.category) { // instead of handling each filter item, take all parameters into consideration
                let result = await fetch("https://www.backend.sofalightbusiness.com/sofalight/backend/api/products")
                .then(d => d.json())
                .then(d => d).catch(e => 
                    {
                        console.log(e)
                    });
                    setData(result);
                    
            }
        }
        
        getData()
        
      },[props]);
    return (
        <>
            {data.length>0? 
            data.map((d,k) => (
                <ProductAdmin productData={d} id={d._id} key={k} src={d.images[0][1]} productname={d.productInfo.productName} productprice={formatPrice(d.productInfo.productPrice)}/>
            )):
            <h1>Loading products ...</h1>   
        }
        </>
    )
            
}

export default GetProducts;