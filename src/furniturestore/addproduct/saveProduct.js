async function saveProduct(data, textInfo) {
    let saveStatus = "not saved";
    let d = {productInfo: textInfo, images: data}
    /// make a post request.
    console.log("sending data ", d)
   await fetch("http://localhost:3002/sofalight/backend/api/products/add", {
  method: "POST",
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