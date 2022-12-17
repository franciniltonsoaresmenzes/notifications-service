import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notifications';

type Overrride = Partial<NotificationProps>;

export function makeNotification(override: Overrride = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-1',
    ...override,
  });
}
