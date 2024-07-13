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
import { TestContentWhereUniqueInput } from "./TestContentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TestContentUpdateInput } from "./TestContentUpdateInput";

@ArgsType()
class UpdateTestContentArgs {
  @ApiProperty({
    required: true,
    type: () => TestContentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TestContentWhereUniqueInput)
  @Field(() => TestContentWhereUniqueInput, { nullable: false })
  where!: TestContentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TestContentUpdateInput,
  })
  @ValidateNested()
  @Type(() => TestContentUpdateInput)
  @Field(() => TestContentUpdateInput, { nullable: false })
  data!: TestContentUpdateInput;
}

export { UpdateTestContentArgs as UpdateTestContentArgs };
