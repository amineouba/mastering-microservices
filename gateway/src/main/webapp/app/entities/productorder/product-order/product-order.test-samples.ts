import dayjs from 'dayjs/esm';

import { OrderStatus } from 'app/entities/enumerations/order-status.model';

import { IProductOrder, NewProductOrder } from './product-order.model';

export const sampleWithRequiredData: IProductOrder = {
  id: 84064,
  placedDate: dayjs('2023-01-25T01:08'),
  status: OrderStatus['CANCELLED'],
  code: 'sticky',
};

export const sampleWithPartialData: IProductOrder = {
  id: 28058,
  placedDate: dayjs('2023-01-25T14:32'),
  status: OrderStatus['COMPLETED'],
  invoiceId: 28632,
  code: 'web-enabled Intelligent',
};

export const sampleWithFullData: IProductOrder = {
  id: 24086,
  placedDate: dayjs('2023-01-25T07:01'),
  status: OrderStatus['PENDING'],
  invoiceId: 73388,
  code: 'Intelligent b',
};

export const sampleWithNewData: NewProductOrder = {
  placedDate: dayjs('2023-01-25T09:16'),
  status: OrderStatus['CANCELLED'],
  code: 'Towels',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
