import React, {useState, useEffect, useRef} from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { CToast,CToastHeader,CToastBody,CButton,CToaster } from '@coreui/react';

import Titles from '../components/titles/Titles'
import Labels from '../components/labels/Labels'

import './AddProduct.css'
import TextField from '../components/textfields/TextField'
import TextArea from '../components/textarea/TextArea'
import RadioButton from '../components/radiobuttons/RadioButton'
import CustomTextField from '../components/customtextfield/CustomTextField'
import ImageViewer from '../components/imageviewer/ImageViewer'
import ComboBox from '../components/combobox/ComboBox'

import "../components/imageuploader/ImageUpload.css"
import upload from "../components/imageuploader/upload.svg"
import ActionButton from '../components/actionbuttons/ActionButton'

import saveProduct from './saveProduct'

function AddProduct() {


  let checkLogin = 'check'
    useEffect(() => {
        async function getUser() {
            await fetch("https://www.backend.sofalightbusiness.com/sofalight/backend/api/getLoggedIn",{credentials: "include"})
            .then(d => d.json())
            .then(d => {
                console.log(d);
                if(d.user === "Not Logged in") {
                    console.log(d, "not logged in")
                    window.location = "/"
                    return
                }
                document.getElementById("preloaderScreenAddProduct").style.display = "none"
              })
            .catch(e => {
                console.log("error")
            })
        }
        if(checkLogin === 'check') {
            getUser()
        }
    },[checkLogin])

  // image 
  let [products, setProducts] = useState([]);

  let [productName, setProductName] = useState();
  let [productSubText, setProductSubText] = useState();
  let [productCategory, setProductCategory] = useState();
  let [productPrice, setProductPrice] = useState();
  let [productDiscount, setProductDiscount] = useState();
  let [productStatus, setProductStatus] = useState();
  let [productDescription, setProductDescription] = useState();

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
      <div className="fw-bold me-auto">Product Creation Status</div>
      <small>Now</small>
    </CToastHeader>
    <CToastBody>Product created successfully.</CToastBody>
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
      <div className="fw-bold me-auto">Product Creation Status</div>
      <small>Now</small>
    </CToastHeader>
    <CToastBody>Product not created. Refresh the page and try again.</CToastBody>
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
      <div className="fw-bold me-auto">Product Creation Status</div>
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
             console.log(result)
                setProducts([...products, [result.info.original_filename, result.info.secure_url, result.info.public_id]]);
                
            }
        })
    },[products])
    
  return (
    <>
    <div id="preloaderScreenAddProduct">
      <div className='loader'>
        <div className='inner-loader'></div>
      </div>
    </div>
    <div className='sofa_light_dashboard_furniturestore_AddProduct'>
      <>
    <CButton style={{display: 'none'}} id="successbuttonId" onClick={() => addToast(successToast)}>Send a toast</CButton>
    <CToaster ref={success} push={toast} placement="top-end" />

    <CButton style={{display: 'none'}} id="failurebuttonId" onClick={() => addToast(failureToast)}>Send a toast</CButton>
    <CToaster ref={failure} push={toast} placement="top-end" />

    <CButton style={{display: 'none'}} id="emptyerrorbuttonId" onClick={() => addToast(emptyerrorbuttonId)}>Send a toast</CButton>
    <CToaster ref={emptyError} push={toast} placement="top-end" />
  </>
        <Titles title='About Product (Add)' />
        <Labels title='Product Name:' />
        <TextField keepSync={val => setProductName(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_name" />
        <Labels title='Brand:' />
        <TextField  keepSync={val => setProductSubText(val)} id="sofa_light_dashboard_furniturestore_components_textfield_sub_text" />
        <Labels title='Category:' />
        <ComboBox  keepSync={val => setProductCategory(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_category" />
        <Labels title='Price:' />
        <CustomTextField keepSync={val => setProductPrice(val)} id="sofa_light_dashboard_furniturestore_components_custom_text_field_1" />
        <Labels title='Discount:' />
        <CustomTextField keepSync={val => setProductDiscount(val)} id="sofa_light_dashboard_furniturestore_components_custom_text_field_2" />
        <Labels title='Status:' />
        <RadioButton keepSync={val => setProductStatus(val)} val1="Published" val2="Draft" />
        <Labels title='Product Description:' />
        <TextArea keepSync={val => setProductDescription(val)} id="sofa_light_dashboard_furniturestore_components_textarea_1" />
        <Titles title={`Product Images (${4-products.length})`} />
        <div onClick={handleClickUploadImage} id='sofa_light_dashboard_furniturestore_components_imageUpload_Id' className='sofa_light_dashboard_furniturestore_components_imageUpload'>
          <img src={upload} alt='upload' />
          <p><span>Click and Browse</span> to Choose a File</p>
        </div>
        <div id='sofa_light_dashboard_furniturestore_components_product_images_div'>
          {products.map((img, ky) => <ImageViewer clickedHandler={e => {
            
            // delete image from cloudinary
            
            products = products.filter(product => product[2]!==img[2])
            setProducts(products);

           
          }} img={img[1]} key={ky} title={img[0]} />)}
        </div>

        {/* save product */}
        <ActionButton handleSave={async e => {
          if(productName===''||productSubText===''||productCategory===''||productPrice===''||productDiscount===''||productStatus===''||productDescription===''||products.length===0) {
            document.getElementById("emptyerrorbuttonId").click();
            return;
          }
          let textInfo = {
            productName,
            productSubText,
            productCategory,
            productPrice,
            productDiscount,
            productStatus,
            productDescription
          }
          document.getElementById("saveProductStatusButtonId").style.display = "block"
          document.getElementById("saveProductButtonId").setAttribute("disabled","true")
          /// how to send data to the back end.
          let saveStatus =await saveProduct(products, textInfo)
          console.log("save status", saveStatus);
          if(saveStatus === "saved") {
            // get ready to process next save
            setProducts([])
            document.getElementById("saveProductStatusButtonId").style.display = "none"
            document.getElementById("successbuttonId").click();
            document.getElementById("saveProductButtonId").removeAttribute("disabled")
           
          }else {
            document.getElementById("failurebuttonId").click();
          }
        }} />
       
    </div>
    </>
  )
}

export default AddProduct