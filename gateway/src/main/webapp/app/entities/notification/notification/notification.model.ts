import dayjs from 'dayjs/esm';
import { NotificationType } from 'app/entities/enumerations/notification-type.model';

export interface INotification {
  id: number;
  date?: dayjs.Dayjs | null;
  details?: string | null;
  sentDate?: dayjs.Dayjs | null;
  format?: NotificationType | null;
  userId?: number | null;
  productId?: number | null;
}

export type NewNotification = Omit<INotification, 'id'> & { id: null };
