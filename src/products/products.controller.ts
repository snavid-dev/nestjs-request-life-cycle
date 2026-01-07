import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiKeyGuard } from '../common/guards/api-key/api-key.guard';

@Controller('products')
@UseGuards(ApiKeyGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}
