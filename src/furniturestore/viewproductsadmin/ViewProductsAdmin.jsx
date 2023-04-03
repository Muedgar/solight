import React, {useState, useEffect} from 'react'
// import Brands from '../components/brands/Brands'
// import Category from '../components/category/Category'
// import PriceRange from '../components/pricerange/PriceRange'
// import Search from '../components/search/Search'
// import SortBy from '../components/sortby/SortBy'
import ProductAdmin from '../components/productadmin/ProductAdmin';
import formatPrice from './formatMoney';
import './ViewProductsAdmin.css'

import filter from './filter.svg'

import '../components/pricerange/PriceRange.css'
import '../components/category/Category.css'
import '../components/brands/Brands.css'
import '../components/search/Search.css'
import '../components/sortby/SortBy.css'

function ViewProductsAdmin() {
  let [filterMenu, setFilterMenu] = useState(false)
  const [data, setData] = useState([])
  let getDataStatus = "get"
  let [filterValPrice, setFilterValPrice] = useState(2000000)
  const categories = [['All',25], ['Kitchen',25], ['Office',25], ['Living room',25], ['Partitions',25], ['Bed rooms',25], ['Doors',25],['Ceiling',25],['Mattress',25],['Painting',25]]
  
  let [filterValCategory,setFilterValCategory] = useState('All')
  

////// handle unauthorized access

let checkLogin = 'check'
    useEffect(() => {
        async function getUser() {
            await fetch("https://backend.sofalightbusiness.com/sofalight/backend/api/getLoggedIn",{credentials: "include"})
            .then(d => d.json())
            .then(d => {
                console.log(d);
                if(d.user === "Not Logged in") {
                    console.log(d, "not logged in")
                    window.location = "/"
                    return
                }
                document.getElementById("preloaderScreenViewProductsAdmin").style.display = "none";
              })
            .catch(e => {
                console.log("error")
            })
        }
        if(checkLogin === 'check') {
            getUser()
        }
    },[checkLogin])

////// end handling unauthorized access

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



  useEffect(() => {
    async function getData() {
      let result = await fetch("https://backend.sofalightbusiness.com/sofalight/backend/api/products")
      .then(d => d.json())
      .then(d => d).catch(e => 
          {
              console.log(e)
          });
          setData(result);
    }
    
    getData()
    
  },[getDataStatus]);


  // search
  const [filterSearchVal, setFilterSearchVal] = useState('')

  // sort
  const [activeSort, setActiveSort] = useState('Highest Price')
  
  function sortDataBy(inData) {
    if(activeSort === 'Highest Price') {
      for(let i=0;i<inData.length;i++) {
        for(let j=i+1;j<inData.length;j++) {
          if(Number(inData[i].productInfo.productPrice) < Number(inData[j].productInfo.productPrice)) {
            let temp = inData[i]
            inData[i] = inData[j]
            inData[j] = temp;
          }
        }
      }
    }else if(activeSort === 'Lowest Price') {
      for(let i=0;i<inData.length;i++) {
        for(let j=i+1;j<inData.length;j++) {
          if(Number(inData[i].productInfo.productPrice) > Number(inData[j].productInfo.productPrice)) {
            let temp = inData[j]
            inData[j] = inData[i]
            inData[i] = temp;
          }
        }
      }
    }

    console.log('before reverse',inData)
    return inData;
  }
  return (
    <>
    <div id="preloaderScreenViewProductsAdmin">
      <div className='loader'>
        <div className='inner-loader'></div>
      </div>
    </div>
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
        }} min={`${10000}`} max={`${3000000}`}/>
        <p className='sizeTwo'>
            <span>{formatPrice('10000')} RWF</span>
            -
            <span>{formatPrice(filterValPrice)} RWF</span>
        </p>
    </div>
        {/* <Category /> */}
        <div className='sofa_light_dashboard_furniturestore_components_category'>
        <p className='sizeOne'>Category </p>
        <span style={{marginLeft: '20px', fontSize: '12px', backgroundColor:'black', color: 'white',padding: '5px'}}>Double Click on Category</span>
        
        <ul>
            {categories.map((category,ky) => (
                <li onClick={e => {
                  setFilterValCategory(category[0]);
                  console.log(filterValCategory)
                }} className='sizeTwo' key={ky}><span>{category[0]}</span>
                {/* <span>({category[1]})</span> */}
                </li>
            ))}
        </ul>
    </div>
        {/* <Brands /> */}
        
        </div>
        <div>
          {/* <Search /> */}
          <div className='sofa_light_dashboard_furniturestore_components_search'>
        <input type="text" value={filterSearchVal} onChange={e => setFilterSearchVal(e.target.value)}  placeholder='Search'/>
        <div>
          {/* <img onClick={e => {
            setSearchStatus(true)
          }} src={search} alt='search' /> */}
        </div>
    </div>
          {/* <SortBy /> */}
          <div className='sofa_light_dashboard_furniturestore_components_sortby'>
        <p>Sort By: </p>
        <p>
          <span onClick={e => setActiveSort('Highest Price')} 
          className={activeSort==='Highest Price'?'sofa_light_dashboard_furniturestore_components_sortby_active':''}>Highest Price</span>
          <span onClick={e => setActiveSort('Lowest Price')} 
          className={activeSort==='Lowest Price'?'sofa_light_dashboard_furniturestore_components_sortby_active':''}>Lowest Price</span>
          {/* <span onClick={e => setActive('price')} 
          className={active==='price'?'sofa_light_dashboard_furniturestore_components_sortby_active':''}>Price</span> */}
          </p>
    </div>
          <div className='products_show'>
          <>
            {data.length>0? 
            
            sortDataBy(data).map((d,k) => {
              if(Number(d.productInfo.productPrice)<filterValPrice) {
                // the first thing to consider is product price
                // the second thing to consider is product category,
                if((filterValCategory.toLowerCase() === "all") || (d.productInfo.productCategory.toLowerCase() === filterValCategory.toLowerCase())) {
                  console.log(filterSearchVal.trim())
                  if(filterSearchVal.trim()==='' || d.productInfo.productName.toLowerCase().includes(filterSearchVal.toLowerCase().trim())) {
                    return(
                      <ProductAdmin productData={d} id={d._id} key={k} src={d.images[0][1]} productname={d.productInfo.productName} productprice={formatPrice(d.productInfo.productPrice)}/>
                    )
                  }
                  
                }
                
              }
              return <div style={{display: 'none'}} key={k}></div>
            }):
            <h1>Loading products ...</h1>   
        }
        </>
          </div>
        </div>
    </div>
    </>
  )
}

export default ViewProductsAdmin