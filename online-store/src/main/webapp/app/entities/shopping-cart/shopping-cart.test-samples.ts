import dayjs from 'dayjs/esm';

import { OrderStatus } from 'app/entities/enumerations/order-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

import { IShoppingCart, NewShoppingCart } from './shopping-cart.model';

export const sampleWithRequiredData: IShoppingCart = {
  id: 126,
  placedDate: dayjs('2023-02-07T09:31'),
  status: OrderStatus['PENDING'],
  totalPrice: 14283,
  paymentMethod: PaymentMethod['CREDIT_CARD'],
};

export const sampleWithPartialData: IShoppingCart = {
  id: 36543,
  placedDate: dayjs('2023-02-07T04:31'),
  status: OrderStatus['COMPLETED'],
  totalPrice: 96105,
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentReference: 'invoice b',
};

export const sampleWithFullData: IShoppingCart = {
  id: 91317,
  placedDate: dayjs('2023-02-07T08:24'),
  status: OrderStatus['PENDING'],
  totalPrice: 84584,
  paymentMethod: PaymentMethod['IDEAL'],
  paymentReference: 'Mouse generate mint',
};

export const sampleWithNewData: NewShoppingCart = {
  placedDate: dayjs('2023-02-07T03:39'),
  status: OrderStatus['CANCELLED'],
  totalPrice: 38442,
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
