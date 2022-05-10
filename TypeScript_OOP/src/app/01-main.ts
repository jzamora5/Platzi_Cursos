import axios from 'axios';

import {Product} from './models/product.model'

(async () => {
  async function getProducts(): Promise<Product[]> {
      // Tipado si la libreria soporta genrics
    // const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');

    // Forzar tipado si la libreria no soporta generics
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    const data = rta.data as Product[]

    return data;
  }

  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}`));

})();
