import { Notification } from '@application/entities/notifications';
import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notificaton-repository';

interface GetRecipientNotificationRequest {
  recipientId: string;
}

interface GetRecipientNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: GetRecipientNotificationRequest,
  ): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationRepository.findManyRecipientId(
      recipientId,
    );

    return {
      notifications,
    };
  }
}
