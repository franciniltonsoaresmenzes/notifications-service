import { Notification } from '../../src/application/entities/notifications';
import { NotificationRepository } from '../../src/application/repositories/notificaton-repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
