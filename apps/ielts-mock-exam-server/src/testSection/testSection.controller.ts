import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestSectionService } from "./testSection.service";
import { TestSectionControllerBase } from "./base/testSection.controller.base";

@swagger.ApiTags("testSections")
@common.Controller("testSections")
export class TestSectionController extends TestSectionControllerBase {
  constructor(protected readonly service: TestSectionService) {
    super(service);
  }
}
