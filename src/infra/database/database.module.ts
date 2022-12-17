import { Module } from '@nestjs/common';
import { NotificationRepository } from '@application/repositories/notificaton-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepositories } from './prisma/repositories/prisma-notifications-repositories';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepositories,
    },
  ],
  exports: [NotificationRepository],
})
export class DataBaseModule {}
