import React, {useState, useEffect} from 'react'
import Brands from '../components/brands/Brands'
import Category from '../components/category/Category'
import PriceRange from '../components/pricerange/PriceRange'
import ProductAdmin from '../components/productadmin/ProductAdmin'
import Search from '../components/search/Search'
import SortBy from '../components/sortby/SortBy'

import './ViewProductsAdmin.css'

import filter from './filter.svg'

function ViewProductsAdmin() {
  let [filterMenu, setFilterMenu] = useState(true)

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
        <img src={filter} alt="filter" /><p>Filter</p>
      </div>
        <PriceRange min={50000} max={2000000} />
        <Category />
        <Brands />
        </div>
        <div>
          <Search />
          <SortBy />
          <div className='products_show'>
            <ProductAdmin productname='Dinner Table' productprice='55,000'/>
            <ProductAdmin productname='Dinner Table' productprice='55,000'/>
            <ProductAdmin productname='Dinner Table' productprice='55,000'/>
            <ProductAdmin productname='Dinner Table' productprice='55,000'/>
          </div>
        </div>
    </div>
  )
}

export default ViewProductsAdmin