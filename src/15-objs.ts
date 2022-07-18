(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
      title: String,
      createdAt: Date,
      stock: number,
      size?: Sizes
  }



  addProduct({
    title: 'Producto 1',
    createdAt: new Date(1993, 1, 1),
    stock: 12
  })

  addProduct({
    title: 'Producto 1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'S'
  })

  console.log(products)
})()
