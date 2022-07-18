(() => {
  let productTitle = 'My amazing product';
  console.log('productTitle', productTitle);

  const productDescription = "balasdjp psaj fpoasjp fqp a";
  console.log("productDescription", productDescription)

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);

})()
