import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestContentServiceBase } from "./base/testContent.service.base";

@Injectable()
export class TestContentService extends TestContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
