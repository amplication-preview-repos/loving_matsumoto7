import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestContentService } from "./testContent.service";
import { TestContentControllerBase } from "./base/testContent.controller.base";

@swagger.ApiTags("testContents")
@common.Controller("testContents")
export class TestContentController extends TestContentControllerBase {
  constructor(protected readonly service: TestContentService) {
    super(service);
  }
}
