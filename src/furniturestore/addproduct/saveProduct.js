async function saveProduct(data, textInfo) {
    
    //files array:
    let files = [];
    data.forEach(element => {
        files.push(dataURLtoFile(element[0],element[1]));
    });

    let form = new FormData();
	for(let file of files) {
     form.append('image', file);	
    }	


    // append textinfo to form.

    for (let text of Object.keys(textInfo)) {
        let info = textInfo[text];
        form.append(`${text}`, info);
    }


    /// make a post request.
   await fetch("http://localhost:3002/sofalight/backend/api/products/add", {
  method: "POST",
  body: form,
})
  .then((response) => response.json())
  .then((result) => {
    return true;
  })
  .catch((error) => {
    return false;
  });
}


function dataURLtoFile(dataurl, filename) {
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
}



export default saveProduct;