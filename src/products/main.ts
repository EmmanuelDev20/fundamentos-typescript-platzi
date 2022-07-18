import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Producto 1',
  createdAt: new Date(1993, 1, 1),
  stock: 6
});

addProduct({
  title: 'Producto 1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
  size: 'S'
});

console.log(products)

console.log(calcStock())
