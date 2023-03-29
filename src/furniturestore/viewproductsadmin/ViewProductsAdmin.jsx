import React, {useState, useEffect, useCallback} from 'react'
import Brands from '../components/brands/Brands'
import Category from '../components/category/Category'
// import PriceRange from '../components/pricerange/PriceRange'
import Search from '../components/search/Search'
import SortBy from '../components/sortby/SortBy'
import ProductAdmin from '../components/productadmin/ProductAdmin';
import formatPrice from './formatMoney';
import './ViewProductsAdmin.css'

import filter from './filter.svg'

import '../components/pricerange/PriceRange.css'


function ViewProductsAdmin() {
  let [filterMenu, setFilterMenu] = useState(false)
  const [data, setData] = useState([])
  let getDataStatus = "get"
  let [filterValPrice, setFilterValPrice] = useState(2000000)

  // const updateData = useCallback(() => {
  //   console.log("filter val changed", filterValPrice);
   
  //   setData(data.filter(d => Number(d.productInfo.productPrice)<filterValPrice)) 
  // },[filterValPrice])
 

  // useEffect(() => {
  //   updateData()
  // },[updateData])

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth>1263) {
        document.querySelector(".products_show").style.gridTemplateColumns = "1fr 1fr 1fr"
      }
      if(window.innerWidth<1263) {
      document.querySelector(".products_show").style.gridTemplateColumns = "1fr 1fr"
    }
    if(window.innerWidth<893) {
      document.querySelector(".products_show").style.gridTemplateColumns = "1fr"
    }
}
    window.addEventListener('resize', handleResize)
  })

  // const getPriceRangeValUpdateProducts = (element) => {
    
  //   filterValPrice = String(element)
  //   let newFilterValPrice = filterValPrice
  //   setFilterValPrice(newFilterValPrice)
  // }

  useEffect(() => {
    async function getData() {
      let result = await fetch("http://localhost:3002/sofalight/backend/api/products")
      .then(d => d.json())
      .then(d => d).catch(e => 
          {
              console.log(e)
          });
          setData(result);
    }
    
    getData()
    console.log("running getData() useEffect")
  },[getDataStatus]);

  return (
    <div className='sofa_light_dashboard_furniturestore_components_viewproducts'>
       <button className='filter_menu' onClick={e => {
            let div = document.querySelector(".sofa_light_dashboard_furniturestore_components_viewproducts_left");
            
            if(filterMenu) {
              div.style.display = "flex";
            }else {
              div.style.display = "none"
            }
            setFilterMenu(!filterMenu)
          }}>Filter Menu</button>
        <div className='sofa_light_dashboard_furniturestore_components_viewproducts_left'>
         
        <div className='sofa_light_dashboard_furniturestore_components_viewproducts_filter_title'>
        <img src={filter} alt="filter" /><p style={{marginTop: '20px'}}>Filter</p>
      </div>
        {/* <PriceRange keepSync={getPriceRangeValUpdateProducts} min={50000} max={2000000} /> */}
        <div className='sofa_light_dashboard_furniturestore_components_pricerange'>
        <p style={{paddingTop: '20px'}} className='sizeOne'>Price Range</p>
        <input className='slider' type="range" value={filterValPrice} onChange={e => {
            setFilterValPrice(e.target.value)
        }} min={`${50000}`} max={`${2000000}`}/>
        <p className='sizeTwo'>
            <span>{formatPrice('50000')} RWF</span>
            -
            <span>{formatPrice(filterValPrice)} RWF</span>
        </p>
    </div>
        <Category />
        <Brands />
        </div>
        <div>
          <Search />
          <SortBy />
          <div className='products_show'>
          <>
            {data.length>0? 
            data.map((d,k) => {
              if(Number(d.productInfo.productPrice)<filterValPrice) {
                return(
                  <ProductAdmin productData={d} id={d._id} key={k} src={d.images[0][1]} productname={d.productInfo.productName} productprice={formatPrice(d.productInfo.productPrice)}/>
                )
              }
              return <div key={k}></div>
            }):
            <h1>Loading products ...</h1>   
        }
        </>
          </div>
        </div>
    </div>
  )
}

export default ViewProductsAdmin