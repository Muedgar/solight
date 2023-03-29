import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import logo from './assets/logo.png'
import caretdown from './assets/caretdown.svg'
import menu from './assets/menu.svg'
import gear from './assets/gear.svg'
import rightfrombracket from './assets/rightfrombracket.svg'

import './Dashboard.css'
import { AddProduct, EditProduct, ProductDetails, ViewProductsAdmin } from '../furniturestore/FurnitureStore';
import ErrorBoundary from './ErrorBoundary';
import ErrorMessage from './ErrorMessage';

function Dashboard() {
  const [open, setOpen] = useState(true)
  return (
    <div className='dashboard'>
        <BrowserRouter>
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
                    <p><img className='dashboard_navbar_admin_profile_img' src={gear} alt="gear" /><span>Settings</span></p>
                    <button><img className='dashboard_navbar_admin_profile_img' src={rightfrombracket} alt="right from bracket" /><span>Sign Out</span></button>
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
                  to='/'>
                    <li>Products</li>
                  </NavLink>

                  <NavLink
                  to='/addproduct'>
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
                  to='/'>
                    <li>Orders</li>
                  </NavLink>
                    
                    
                </ul>
                <h1>MANAGE</h1>
                <ul>
                <NavLink
                  to='/'>
                    <li>Settings</li>
                  </NavLink>
                </ul>
            </aside>
            <div className='dashboard_navbar_admin_content'>
                <Routes>
                    <Route path='/' element={
                        <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                            <ViewProductsAdmin />
                        </ErrorBoundary>
                    } />
                    <Route path='/viewproducts' element={
                        <ErrorBoundary fallback={<p>Something went wrong</p>}>
                            <ViewProductsAdmin />
                        </ErrorBoundary>
                    } />
                    <Route path='/addproduct' element={<AddProduct/>} />
                    <Route path='/editproduct' element={
                    <ErrorBoundary fallback={<ErrorMessage message="Click on an edit button of a product to edit product information." />}>
                    <EditProduct/>
                </ErrorBoundary>
                    } />
                    <Route path='/productdetails' element={
                        <ErrorBoundary fallback={<ErrorMessage message="Click on an image of a product to view more product information." />}>
                            <ProductDetails role="admin"/>
                        </ErrorBoundary>
                    } />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default Dashboard