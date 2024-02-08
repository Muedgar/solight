async function saveProduct(id,data, textInfo) {
  let saveStatus = "not updated";
   let form ={
    productInfo: textInfo,
    images:data
   }
    /// make a post request.
   await fetch(`https://www.backend.sofalightbusiness.com/sofalight/backend/api/products/update/${id}?jwt=${localStorage.getItem('token')}`, {
   credentials: 'omit',
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
})
  .then((response) => response.json())
  .then((result) => {
    saveStatus = "updated"
  })
  .catch((error) => {
    console.log(error.message)
  });

  return saveStatus;
}


export default saveProduct;