import dayjs from 'dayjs/esm';

import { NotificationType } from 'app/entities/enumerations/notification-type.model';

import { INotification, NewNotification } from './notification.model';

export const sampleWithRequiredData: INotification = {
  id: 30621,
  date: dayjs('2023-01-25T23:08'),
  sentDate: dayjs('2023-01-25T16:02'),
  format: NotificationType['SMS'],
  userId: 55330,
  productId: 77848,
};

export const sampleWithPartialData: INotification = {
  id: 25492,
  date: dayjs('2023-01-25T22:37'),
  details: 'Music Danemark',
  sentDate: dayjs('2023-01-25T11:15'),
  format: NotificationType['SMS'],
  userId: 900,
  productId: 32606,
};

export const sampleWithFullData: INotification = {
  id: 36914,
  date: dayjs('2023-01-25T05:23'),
  details: 'teal card',
  sentDate: dayjs('2023-01-25T15:46'),
  format: NotificationType['SMS'],
  userId: 65653,
  productId: 75473,
};

export const sampleWithNewData: NewNotification = {
  date: dayjs('2023-01-25T10:24'),
  sentDate: dayjs('2023-01-25T17:59'),
  format: NotificationType['SMS'],
  userId: 79381,
  productId: 16952,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
