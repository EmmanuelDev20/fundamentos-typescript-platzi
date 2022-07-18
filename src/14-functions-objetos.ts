(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }

  // login('emanuel@gmail.com', '123121');
  login({
    email: 'emmanuel.gmail.com',
    password: '23412!apj'
  })

  const products: any[] = [];

  const addProduct = (data: {
    title: String,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
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
