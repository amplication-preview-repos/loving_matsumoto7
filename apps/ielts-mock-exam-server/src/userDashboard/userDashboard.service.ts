import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserDashboardServiceBase } from "./base/userDashboard.service.base";

@Injectable()
export class UserDashboardService extends UserDashboardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
