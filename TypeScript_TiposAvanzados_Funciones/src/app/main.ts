import { addProduct } from './products/product.service';

addProduct({
  id: '1',
  updatedAt: new Date(),
  createdAt: new Date(),
  title: 'p1',
  stock: 90,
  category: {
    id: '12',
    updatedAt: new Date(),
    createdAt: new Date(),
    name: 'c1',
  },
});
