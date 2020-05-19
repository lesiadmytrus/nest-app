import { Injectable } from '@nestjs/common';
import { Item } from 'src/item.interface';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  getAll(): Item[] {
    return this.items;
  }

  create(item: Item) {
    this.items.push(item);
  }
}
