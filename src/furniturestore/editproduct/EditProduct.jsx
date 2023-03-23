import React, {useState} from 'react'

import Titles from '../components/titles/Titles'
import Labels from '../components/labels/Labels'

import './EditProduct.css'
import TextField from '../components/textfields/TextField'
import TextArea from '../components/textarea/TextArea'
import RadioButton from '../components/radiobuttons/RadioButton'
import CustomTextField from '../components/customtextfield/CustomTextField'
import ImageViewer from '../components/imageviewer/ImageViewer'

import "../components/imageuploader/ImageUpload.css"
import upload from "../components/imageuploader/upload.svg"
import ActionButton from '../components/actionbuttons/ActionButton'

import saveProduct from './saveProduct'

function EditProduct() {
  // image 
  let [products, setProducts] = useState([]);

  let [productName, setProductName] = useState();
  let [productSubText, setProductSubText] = useState();
  let [productCategory, setProductCategory] = useState();
  let [productPrice, setProductPrice] = useState();
  let [productDiscount, setProductDiscount] = useState();
  let [productStatus, setProductStatus] = useState();
  let [productDescription, setProductDescription] = useState();
  let [productMetaTitle, setProductMetaTitle] = useState();
  let [productKeyword, setProductKeyword] = useState();

  function handleClickUploadImage() {
    if(products.length===4) return;
    console.log("clicked");
    let fileInput = document.createElement('input');
    fileInput.setAttribute('id', 'createProductInput');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('accept', 'image/png, image/jpeg');
    fileInput.addEventListener('change',
      handleChangeUploadImage
    );
    fileInput.style.display = "none";
    document.getElementById("sofa_light_dashboard_furniturestore_components_product_images_div").appendChild(fileInput);
    fileInput.click();
}

function handleChangeUploadImage() {
  let id = "createProductInput";
    let input = document.getElementById(id);
    input.file = input.files[0];
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    // document.getElementById("fileId").value = input.files[0].name;
    // console.log(input.files[0].name);
    fReader.onloadend = function(event) {
            setProducts([...products,[`${event.target.result}`,input.files[0].name,`${input.files[0].name}${products.length+1}`]]);
            console.log("products",products);
        }
        document.getElementById("sofa_light_dashboard_furniturestore_components_product_images_div").removeChild(document.getElementById(id));
}

  return (
    <div className='sofa_light_dashboard_furniturestore_AddProduct'>
        <Titles title='About Product' />
        <Labels title='Product Name:' />
        <TextField keepSync={val => setProductName(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_name" />
        <Labels title='Sub Text:' />
        <TextField  keepSync={val => setProductSubText(val)} id="sofa_light_dashboard_furniturestore_components_textfield_sub_text" />
        <Labels title='Category:' />
        <TextField  keepSync={val => setProductCategory(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_category" />
        <Labels title='Price:' />
        <CustomTextField keepSync={val => setProductPrice(val)} id="sofa_light_dashboard_furniturestore_components_custom_text_field_1" />
        <Labels title='Discount:' />
        <CustomTextField keepSync={val => setProductDiscount(val)} id="sofa_light_dashboard_furniturestore_components_custom_text_field_2" />
        <Labels title='Status:' />
        <RadioButton keepSync={val => setProductStatus(val)} val1="Published" val2="Draft" />
        <Labels title='Product Description:' />
        <TextArea keepSync={val => setProductDescription(val)} id="sofa_light_dashboard_furniturestore_components_textarea_1" />
        <Labels title='Meta Title:' />
        <TextField  keepSync={val => setProductMetaTitle(val)} id="sofa_light_dashboard_furniturestore_components_textfield_meta_title" />
        <Labels title='Meta Keyword:' />
        <TextField  keepSync={val => setProductKeyword(val)} id="sofa_light_dashboard_furniturestore_components_textfield_meta_keyword" />
        <Titles title={`Product Images (${4-products.length})`} />
        <div onClick={handleClickUploadImage} id='sofa_light_dashboard_furniturestore_components_imageUpload_Id' className='sofa_light_dashboard_furniturestore_components_imageUpload'>
          <img src={upload} alt='upload' />
          <p><span>Click and Browse</span> to Choose a File</p>
        </div>
        <div id='sofa_light_dashboard_furniturestore_components_product_images_div'>
          {products.map((img, ky) => <ImageViewer clickedHandler={e => {
            products = products.filter(product => product[2]!==img[2])
            setProducts(products);
          }} img={img[0]} key={ky} title={img[1]} />)}
        </div>

        {/* save product */}
        <ActionButton handleSave={async e => {
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
          /// how to send data to the back end.
          if(await saveProduct(products, textInfo)) {
            // get ready to process next save
            setProducts([])
            
           
          }
        }} />
    </div>
  )
}

export default EditProduct