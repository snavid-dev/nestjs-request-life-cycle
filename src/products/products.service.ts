import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return [
      {
        id: 1,
        name: 'Laptop',
      },
      {
        id: 2,
        name: 'Smartphone',
      },
      {
        id: 3,
        name: 'Tablet',
      },
    ];
  }
}
