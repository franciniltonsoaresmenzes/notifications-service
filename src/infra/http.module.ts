import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-case/send-notification';
import { DataBaseModule } from './database/database.module';
import { NotificationsController } from './http/controllers/notifications.controller';
import { CancelNotification } from '@application/use-case/cancel-notification';
import { CountRecipientNotification } from '@application/use-case/count-recipient-notifications';
import { GetRecipientNotification } from '@application/use-case/get-recipient-notifications';
import { ReadNotification } from '@application/use-case/read-notifications';
import { UnreadNotification } from '@application/use-case/unread-notifications';

@Module({
  imports: [DataBaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
