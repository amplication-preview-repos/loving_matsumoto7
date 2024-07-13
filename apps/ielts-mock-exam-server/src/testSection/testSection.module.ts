import { Module } from "@nestjs/common";
import { TestSectionModuleBase } from "./base/testSection.module.base";
import { TestSectionService } from "./testSection.service";
import { TestSectionController } from "./testSection.controller";
import { TestSectionResolver } from "./testSection.resolver";

@Module({
  imports: [TestSectionModuleBase],
  controllers: [TestSectionController],
  providers: [TestSectionService, TestSectionResolver],
  exports: [TestSectionService],
})
export class TestSectionModule {}
