import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import logo from './assets/logo.png'
import caretdown from './assets/caretdown.svg'
import menu from './assets/menu.svg'
import gear from './assets/gear.svg'
import rightfrombracket from './assets/rightfrombracket.svg'

import './Dashboard.css'
import { AddProduct, EditProduct, Orders, ProductDetails, ViewProductsAdmin } from '../furniturestore/FurnitureStore';
import ErrorBoundary from './ErrorBoundary';
import ErrorMessage from './ErrorMessage';
import Signin from './Signin';
import Settings from './Settings';


function Dashboard() {
  const [open, setOpen] = useState(true)
  return (
    <>
    <BrowserRouter>
    <Routes>
                    <Route path='/' element={
                        <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                            <Signin />
                        </ErrorBoundary>
                    } />
                    </Routes>
    <div className='dashboard'>
        <nav className='dashboard_navbar'>
            <div className='dashboard_navbar_logo_menu_position'>
                <img className='dashboard_navbar_logo' src={logo} alt="logo" />
                <div className='dashboard_navbar_menu_position'>
                    <button onClick={e => setOpen(!open)} className='dashboard_navbar_menu_button'><img style={{width: '20px', height: '20px'}} src={menu} alt="menu" /></button>
                </div>
            </div>
            <div className='dashboard_navbar_admin_profile'>
                <div className='dashboard_navbar_admin_profile_menu'>
                    <p>Welcome Admin!</p>
                    <img className='dashboard_navbar_caret' src={caretdown} alt="caretdown" />
                    <div className='dashboard_navbar_admin_profile_content'>
                    <NavLink style={{textDecoration: 'none'}} to="/sofaadmin/settings">
                    <p><img className='dashboard_navbar_admin_profile_img' src={gear} alt="gear" /><span style={{color: 'black'}}>Settings</span></p>
                    </NavLink>
                    <button onClick={async e => {
                        await fetch("http://backend.sofalightbusiness.com/sofalight/backend/api/logout",{credentials: 'include'})
                        .then(d => d.json())
                        .then(d => {
                            window.location = "/"
                        }).catch(e => console.log(e))
                    }}><img className='dashboard_navbar_admin_profile_img' src={rightfrombracket} alt="right from bracket" /><span>Sign Out</span></button>
                </div>
                </div>
                
            </div>
        </nav>
        <div className='dashboard_navbar_admin_sidebar_and_content'>
            <aside className={open?'dashboard_navbar_admin_sidebar dashboard_navbar_admin_sidebar_width':'dashboard_navbar_admin_sidebar'}>
                <h1>APPLICATION</h1>
                <p>Furniture Store</p>
                <ul>
                <NavLink
                  to='/sofaadmin/'>
                    <li>Products</li>
                  </NavLink>

                  <NavLink
                  to='/sofaadmin/addproduct'>
                    <li>Add Product</li>
                  </NavLink>

                  {/* <NavLink
                  to='/editproduct'>
                    <li>Edit Product</li>
                  </NavLink>

                  <NavLink
                  to='/productdetails'>
                    <li>Preview Product</li>
                  </NavLink> */}

                  <NavLink
                  to='/sofaadmin/orders'>
                    <li>Orders</li>
                  </NavLink>
                    
                    
                </ul>
                <h1>MANAGE</h1>
                <ul>
                <NavLink
                  to='/sofaadmin/settings'>
                    <li>Settings</li>
                  </NavLink>
                </ul>
            </aside>
            <div className='dashboard_navbar_admin_content'>
                <Routes>
                    <Route path='/sofaadmin/' element={
                        <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                            <ViewProductsAdmin />
                        </ErrorBoundary>
                    } />
                    <Route path='/sofaadmin/viewproducts' element={
                        <ErrorBoundary fallback={<p>Something went wrong</p>}>
                            <ViewProductsAdmin />
                        </ErrorBoundary>
                    } />
                    <Route path='/sofaadmin/addproduct' element={<AddProduct/>} />
                    <Route path='/sofaadmin/editproduct' element={
                    <ErrorBoundary fallback={<ErrorMessage message="Click on an edit button of a product to edit product information." />}>
                    <EditProduct/>
                </ErrorBoundary>
                    } />
                    <Route path='/sofaadmin/productdetails' element={
                        <ErrorBoundary fallback={<ErrorMessage message="Click on an image of a product to view more product information." />}>
                            <ProductDetails role="admin"/>
                        </ErrorBoundary>
                    } />

                  <Route path='/sofaadmin/orders' element={
                        <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                            <Orders />
                        </ErrorBoundary>
                    } />

                <Route path='/sofaadmin/settings' element={
                        <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                            <Settings />
                        </ErrorBoundary>
                    } />
                </Routes>
            </div>
        </div>
    </div>
        </BrowserRouter>
    </>
  )
}

export default Dashboard