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
import { UserDashboardWhereInput } from "./UserDashboardWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserDashboardOrderByInput } from "./UserDashboardOrderByInput";

@ArgsType()
class UserDashboardFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserDashboardWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserDashboardWhereInput, { nullable: true })
  @Type(() => UserDashboardWhereInput)
  where?: UserDashboardWhereInput;

  @ApiProperty({
    required: false,
    type: [UserDashboardOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserDashboardOrderByInput], { nullable: true })
  @Type(() => UserDashboardOrderByInput)
  orderBy?: Array<UserDashboardOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserDashboardFindManyArgs as UserDashboardFindManyArgs };
