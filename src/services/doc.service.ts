import { Injectable } from '@nestjs/common';
import { Prisma, Doc } from '@prisma/client';
import { prisma } from '../config/prisma';

@Injectable()
export class DocService {
  constructor(private prisma: prisma) {}

  async getAll(): Promise<Doc[]> {
    return this.prisma.doc.findMany({});
  }

  async createPost(data: Prisma.DocCreateInput): Promise<Doc> {
    try {
      return this.prisma.doc.create({
        data,
      });
    } catch (e) {
      console.error(e);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async updatePost(id: string, data: Prisma.DocCreateInput): Promise<Doc> {
    try {
      return this.prisma.doc.update({
        where: {
          id: id,
        },
        data: data,
      });
    } catch (e) {
      console.error(e);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
