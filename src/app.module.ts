import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { DocController } from './controllers/doc.controller';
import { DocService } from './services/doc.service';
import { prisma } from './config/prisma';
@Module({
  imports: [],
  controllers: [AppController, DocController],
  providers: [prisma, AppService, DocService],
})
export class AppModule {}
