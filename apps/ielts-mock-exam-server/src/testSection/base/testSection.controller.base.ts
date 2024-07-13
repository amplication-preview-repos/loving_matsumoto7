/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TestSectionService } from "../testSection.service";
import { TestSectionCreateInput } from "./TestSectionCreateInput";
import { TestSection } from "./TestSection";
import { TestSectionFindManyArgs } from "./TestSectionFindManyArgs";
import { TestSectionWhereUniqueInput } from "./TestSectionWhereUniqueInput";
import { TestSectionUpdateInput } from "./TestSectionUpdateInput";
import { TestContentFindManyArgs } from "../../testContent/base/TestContentFindManyArgs";
import { TestContent } from "../../testContent/base/TestContent";
import { TestContentWhereUniqueInput } from "../../testContent/base/TestContentWhereUniqueInput";

export class TestSectionControllerBase {
  constructor(protected readonly service: TestSectionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TestSection })
  async createTestSection(
    @common.Body() data: TestSectionCreateInput
  ): Promise<TestSection> {
    return await this.service.createTestSection({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sectionType: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TestSection] })
  @ApiNestedQuery(TestSectionFindManyArgs)
  async testSections(@common.Req() request: Request): Promise<TestSection[]> {
    const args = plainToClass(TestSectionFindManyArgs, request.query);
    return this.service.testSections({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sectionType: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TestSection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async testSection(
    @common.Param() params: TestSectionWhereUniqueInput
  ): Promise<TestSection | null> {
    const result = await this.service.testSection({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sectionType: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TestSection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTestSection(
    @common.Param() params: TestSectionWhereUniqueInput,
    @common.Body() data: TestSectionUpdateInput
  ): Promise<TestSection | null> {
    try {
      return await this.service.updateTestSection({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          sectionType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TestSection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTestSection(
    @common.Param() params: TestSectionWhereUniqueInput
  ): Promise<TestSection | null> {
    try {
      return await this.service.deleteTestSection({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          sectionType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/testContents")
  @ApiNestedQuery(TestContentFindManyArgs)
  async findTestContents(
    @common.Req() request: Request,
    @common.Param() params: TestSectionWhereUniqueInput
  ): Promise<TestContent[]> {
    const query = plainToClass(TestContentFindManyArgs, request.query);
    const results = await this.service.findTestContents(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,
        description: true,

        testSection: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/testContents")
  async connectTestContents(
    @common.Param() params: TestSectionWhereUniqueInput,
    @common.Body() body: TestContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      testContents: {
        connect: body,
      },
    };
    await this.service.updateTestSection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/testContents")
  async updateTestContents(
    @common.Param() params: TestSectionWhereUniqueInput,
    @common.Body() body: TestContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      testContents: {
        set: body,
      },
    };
    await this.service.updateTestSection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/testContents")
  async disconnectTestContents(
    @common.Param() params: TestSectionWhereUniqueInput,
    @common.Body() body: TestContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      testContents: {
        disconnect: body,
      },
    };
    await this.service.updateTestSection({
      where: params,
      data,
      select: { id: true },
    });
  }
}
