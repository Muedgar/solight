async function saveProduct(id,data, textInfo) {
  let saveStatus = "not updated";
   let form ={
    productInfo: textInfo,
    images:data
   }
    /// make a post request.
   await fetch("https://sofaadminbackend.herokuapp.com/sofalight/backend/api/products/update/"+id, {
   credentials: 'include',
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