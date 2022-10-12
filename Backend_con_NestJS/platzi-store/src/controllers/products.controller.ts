import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // @Get('products/:productId')
  // getProduct(@Param() params: any) {
  //   return `product ${params.productId}`;
  // }

  // Rutas no dinamicas deben ir de primeras para no ser capturadas como parametros
  // filter sería tomado como productId si esta ruta estuviera despues
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit => ${limit} offset| => ${offset} brand => ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
