import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
  // Res,
} from '@nestjs/common';

import { ParseIntPipe } from '../common/parse-int.pipe';
// import { Response } from 'express';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

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

  // CON EXPRESS

  // @Get(':productId')
  // getProduct(@Res() response: Response, @Param('productId') productId: string) {
  //   response.status(206).send({
  //     message: `product ${productId}`,
  //   });
  // }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    // return {
    //   message: `product ${productId}`,
    // };
    return this.productService.findOne(productId);
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit => ${limit} offset| => ${offset} brand => ${brand}`,
    // };

    return this.productService.findAll();
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   message: 'accion de editar',
    //   id,
    //   payload,
    // };

    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
