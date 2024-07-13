/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserDashboard as PrismaUserDashboard } from "@prisma/client";

export class UserDashboardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserDashboardCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userDashboard.count(args);
  }

  async userDashboards(
    args: Prisma.UserDashboardFindManyArgs
  ): Promise<PrismaUserDashboard[]> {
    return this.prisma.userDashboard.findMany(args);
  }
  async userDashboard(
    args: Prisma.UserDashboardFindUniqueArgs
  ): Promise<PrismaUserDashboard | null> {
    return this.prisma.userDashboard.findUnique(args);
  }
  async createUserDashboard(
    args: Prisma.UserDashboardCreateArgs
  ): Promise<PrismaUserDashboard> {
    return this.prisma.userDashboard.create(args);
  }
  async updateUserDashboard(
    args: Prisma.UserDashboardUpdateArgs
  ): Promise<PrismaUserDashboard> {
    return this.prisma.userDashboard.update(args);
  }
  async deleteUserDashboard(
    args: Prisma.UserDashboardDeleteArgs
  ): Promise<PrismaUserDashboard> {
    return this.prisma.userDashboard.delete(args);
  }
}