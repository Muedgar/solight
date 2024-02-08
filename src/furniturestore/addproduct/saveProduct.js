async function saveProduct(data, textInfo) {
    let saveStatus = "not saved";
    let d = {productInfo: textInfo, images: data}
    /// make a post request.
    console.log("sending data ", d)
   await fetch(`https://www.backend.sofalightbusiness.com/sofalight/backend/api/products/add?jwt=${localStorage.getItem('token')}`, {
  method: "POST",
  credentials: 'omit',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(d),
})
  .then((response) => response.json())
  .then((result) => {
    saveStatus = "saved"
  })
  .catch((error) => {
    console.log(error.message)
  });

  return saveStatus;
}


export default saveProduct;