import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestSectionServiceBase } from "./base/testSection.service.base";

@Injectable()
export class TestSectionService extends TestSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
