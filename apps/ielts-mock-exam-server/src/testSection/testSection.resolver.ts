import * as graphql from "@nestjs/graphql";
import { TestSectionResolverBase } from "./base/testSection.resolver.base";
import { TestSection } from "./base/TestSection";
import { TestSectionService } from "./testSection.service";

@graphql.Resolver(() => TestSection)
export class TestSectionResolver extends TestSectionResolverBase {
  constructor(protected readonly service: TestSectionService) {
    super(service);
  }
}
