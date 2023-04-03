import React, {useState,useRef,useEffect} from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { CToast,CToastHeader,CToastBody,CButton,CToaster } from '@coreui/react';

import Titles from '../components/titles/Titles'
import Labels from '../components/labels/Labels'

import './EditProduct.css'
import TextField from '../components/textfields/TextField'
import TextArea from '../components/textarea/TextArea'
import RadioButton from '../components/radiobuttons/RadioButton'
import CustomTextField from '../components/customtextfield/CustomTextField'
import ImageViewer from '../components/imageviewer/ImageViewer'
import ComboBox from '../components/combobox/ComboBox'
import "../components/imageuploader/ImageUpload.css"
import upload from "../components/imageuploader/upload.svg"
import EditActionButton from '../components/actionbuttons/EditActionButton'

import saveProduct from './saveProduct'

function EditProduct() {
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
              document.getElementById("preloaderScreenEditProduct").style.display = "none"
            })
          .catch(e => {
              console.log("error")
          })
      }
      if(checkLogin === 'check') {
          getUser()
      }
  },[checkLogin])


  
  let productInfos = JSON.parse(localStorage.getItem('product_edit'))
  // product images
  let [products, setProducts] = useState(productInfos.images);

  let [productName, setProductName] = useState(productInfos.productInfo.productName);
  let [productSubText, setProductSubText] = useState(productInfos.productInfo.productSubText);
  let [productCategory, setProductCategory] = useState(productInfos.productInfo.productCategory);
  let [productPrice, setProductPrice] = useState(productInfos.productInfo.productPrice);
  let [productDiscount, setProductDiscount] = useState(productInfos.productInfo.productDiscount);
  let [productStatus, setProductStatus] = useState(productInfos.productInfo.productStatus);
  let [productDescription, setProductDescription] = useState(productInfos.productInfo.productDescription);
  let [productMetaTitle, setProductMetaTitle] = useState(productInfos.productInfo.productMetaTitle);
  let [productKeyword, setProductKeyword] = useState(productInfos.productInfo.productKeyword);

  function handleClickUploadImage() {
   if(products.length >= 4) return;
    widgetRef.current.open()
}


const [toast, addToast] = useState(0)
const success = useRef()
const failure = useRef()
const emptyError = useRef()
const successToast = (
  <CToast>
    <CToastHeader closeButton>
      <svg
        className="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="green"></rect>
      </svg>
      <div className="fw-bold me-auto">Product Update Status</div>
      <small>Now</small>
    </CToastHeader>
    <CToastBody>Product updated successfully.</CToastBody>
  </CToast>
)
const failureToast = (
  <CToast>
    <CToastHeader closeButton>
      <svg
        className="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="red"></rect>
      </svg>
      <div className="fw-bold me-auto">Product Update Status</div>
      <small>Now</small>
    </CToastHeader>
    <CToastBody>Product not updated. Refresh the page and try again or contact support if the problem persists.</CToastBody>
  </CToast>
)

const emptyerrorbuttonId = (
  <CToast>
    <CToastHeader closeButton>
      <svg
        className="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="red"></rect>
      </svg>
      <div className="fw-bold me-auto">Product Update Status</div>
      <small>Now</small>
    </CToastHeader>
    <CToastBody>Some of products information are empty and you need to upload at least one image</CToastBody>
  </CToast>
)
const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUD_NAME,
            uploadPreset: process.env.REACT_APP_UPLOAD_PRESET
        }, function(error, result) {
            if(!error && result && result.event === "success") {
             
                setProducts([...products, [result.info.original_filename, result.info.secure_url, result.info.asset_id]]);
                
            }
        })
    },[products])

  return (
    <>
    <div id="preloaderScreenEditProduct">
      <div className='loader'>
        <div className='inner-loader'></div>
      </div>
    </div>
    <div className='sofa_light_dashboard_furniturestore_AddProduct'>
        <>
    <CButton style={{display: 'none'}} id="successbuttonIdEdit" onClick={() => addToast(successToast)}>Send a toast</CButton>
    <CToaster ref={success} push={toast} placement="top-end" />

    <CButton style={{display: 'none'}} id="failurebuttonIdEdit" onClick={() => addToast(failureToast)}>Send a toast</CButton>
    <CToaster ref={failure} push={toast} placement="top-end" />

    <CButton style={{display: 'none'}} id="emptyerrorbuttonIdEdit" onClick={() => addToast(emptyerrorbuttonId)}>Send a toast</CButton>
    <CToaster ref={emptyError} push={toast} placement="top-end" />
  </>
        <Titles title='About Product (Edit)' />
        <Labels title='Product Name:' />
        <TextField typ='edit' initVal={productName} keepSync={val => setProductName(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_name" />
        <Labels title='Brand:' />
        <TextField typ='edit' initVal={productSubText} keepSync={val => setProductSubText(val)} id="sofa_light_dashboard_furniturestore_components_textfield_sub_text" />
        <Labels title='Category:' />
        <ComboBox typ='edit' initVal={productCategory} keepSync={val => setProductCategory(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_category" />
        <Labels title='Price:' />
        <CustomTextField typ='edit' initVal={productPrice} keepSync={val => setProductPrice(val)} id="sofa_light_dashboard_furniturestore_components_custom_text_field_1" />
        <Labels title='Discount:' />
        <CustomTextField typ='edit' initVal={productDiscount} keepSync={val => setProductDiscount(val)} id="sofa_light_dashboard_furniturestore_components_custom_text_field_2" />
        <Labels title='Status:' />
        <RadioButton keepSync={val => setProductStatus(val)} val1="Published" val2="Draft" />
        <Labels title='Product Description:' />
        <TextArea typ='edit' initVal={productDescription} keepSync={val => setProductDescription(val)} id="sofa_light_dashboard_furniturestore_components_textarea_1" />
        <Labels title='Meta Title:' />
        <TextField typ='edit' initVal={productMetaTitle} keepSync={val => setProductMetaTitle(val)} id="sofa_light_dashboard_furniturestore_components_textfield_meta_title" />
        <Labels title='Meta Keyword:' />
        <TextField typ='edit' initVal={productKeyword} keepSync={val => setProductKeyword(val)} id="sofa_light_dashboard_furniturestore_components_textfield_meta_keyword" />
        <Titles title={`Product Images (${4-products.length})`} />
        <div onClick={handleClickUploadImage} id='sofa_light_dashboard_furniturestore_components_imageUpload_Id' className='sofa_light_dashboard_furniturestore_components_imageUpload'>
          <img src={upload} alt='upload' />
          <p><span>Click and Browse</span> to Choose a File</p>
        </div>
        <div id='sofa_light_dashboard_furniturestore_components_product_images_div'>
          {products.map((img, ky) => <ImageViewer clickedHandler={e => {
            products = products.filter(product => product[2]!==img[2])
            setProducts(products);
          }} img={img[1]} key={ky} title={img[0]} />)}
        </div>

        {/* save product */}
        <EditActionButton handleSave={async e => {
          if(productName===''||productSubText===''||productCategory===''||productPrice===''||productDiscount===''||productStatus===''||productDescription===''||productMetaTitle===''||productMetaTitle===''||productKeyword===''||products.length===0) {
            document.getElementById("emptyerrorbuttonIdEdit").click();
            return;
          }
          let textInfo = {
            productName,
            productSubText,
            productCategory,
            productPrice,
            productDiscount,
            productStatus,
            productDescription,
            productMetaTitle,
            productKeyword
          }
          e.target.children[0].style.display = "block"
          e.target.setAttribute("disabled","true")
         
          let saveStatus = await saveProduct(productInfos._id,products,textInfo)
        
          console.log("save status", saveStatus);
          if(saveStatus === "updated") {
            // get ready to process next save
            setProducts([])
            e.target.children[0].style.display = "none"
            document.getElementById("successbuttonIdEdit").click();
            e.target.removeAttribute("disabled")
           
          }else {
            document.getElementById("failurebuttonIdEdit").click();
          }
        }
        }
          />
    </div>
    </>
  )
}

export default EditProduct