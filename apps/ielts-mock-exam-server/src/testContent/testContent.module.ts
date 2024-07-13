import { Module } from "@nestjs/common";
import { TestContentModuleBase } from "./base/testContent.module.base";
import { TestContentService } from "./testContent.service";
import { TestContentController } from "./testContent.controller";
import { TestContentResolver } from "./testContent.resolver";

@Module({
  imports: [TestContentModuleBase],
  controllers: [TestContentController],
  providers: [TestContentService, TestContentResolver],
  exports: [TestContentService],
})
export class TestContentModule {}
