import { Controller, Get, Post, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Item } from 'src/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  public items: Item[];

  constructor(
    private readonly itemsService: ItemsService
  ) {
  }

  @Get()
  async getAll(): Promise<Item[]> {
    return this.itemsService.getAll();
  }

  // @Post()
  // create(@Body() createItem: Item) {
  //   this.itemsService.create(createItem);
  // }

  @Post('upload')
  @UseInterceptors(FileInterceptor('upload_file'))
  uploadFile(@UploadedFile() file) {
    console.log('file',file);
    return { image: file.originalname };
  }
}
