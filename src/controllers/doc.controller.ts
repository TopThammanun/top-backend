import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { DocService } from '../services/doc.service';
import { Prisma, Doc } from '@prisma/client';

@Controller('doc')
export class DocController {
  constructor(private readonly appService: DocService) {}

  @Get('/all')
  getAll(): any {
    return this.appService.getAll();
  }

  @Post('/create')
  createDoc(@Body() data: Prisma.DocCreateInput): any {
    return this.appService.createPost(data);
  }

  @Put('/update/:id')
  updateDoc(@Param('id') Id: string, @Body() data: Prisma.DocCreateInput): any {
    return this.appService.updatePost(Id, data);
  }

  @Get('/:id')
  getById(@Param('id') Id: string): any {
    return this.appService.getById(Id);
  }
}
