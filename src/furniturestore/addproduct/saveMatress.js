async function saveMattress(data, textInfo) {
  let saveStatus = "not saved";
  let d = { productInfo: textInfo, images: data };
  /// make a post request.
  console.log("sending data ", d);
  await fetch("http://localhost:3003/sofalight/backend/api/mattress/add", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(d),
  })
    .then((response) => response.json())
    .then((result) => {
      saveStatus = "saved";
    })
    .catch((error) => {
      console.log(error.message);
    });

  return saveStatus;
}

export default saveMattress;
