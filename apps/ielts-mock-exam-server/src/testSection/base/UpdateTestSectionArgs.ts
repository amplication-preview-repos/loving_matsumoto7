/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TestSectionWhereUniqueInput } from "./TestSectionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TestSectionUpdateInput } from "./TestSectionUpdateInput";

@ArgsType()
class UpdateTestSectionArgs {
  @ApiProperty({
    required: true,
    type: () => TestSectionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TestSectionWhereUniqueInput)
  @Field(() => TestSectionWhereUniqueInput, { nullable: false })
  where!: TestSectionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TestSectionUpdateInput,
  })
  @ValidateNested()
  @Type(() => TestSectionUpdateInput)
  @Field(() => TestSectionUpdateInput, { nullable: false })
  data!: TestSectionUpdateInput;
}

export { UpdateTestSectionArgs as UpdateTestSectionArgs };
