import * as graphql from "@nestjs/graphql";
import { TestContentResolverBase } from "./base/testContent.resolver.base";
import { TestContent } from "./base/TestContent";
import { TestContentService } from "./testContent.service";

@graphql.Resolver(() => TestContent)
export class TestContentResolver extends TestContentResolverBase {
  constructor(protected readonly service: TestContentService) {
    super(service);
  }
}
