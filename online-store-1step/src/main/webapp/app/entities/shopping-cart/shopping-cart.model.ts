import dayjs from 'dayjs/esm';
import { ICustomerDetails } from 'app/entities/customer-details/customer-details.model';
import { OrderStatus } from 'app/entities/enumerations/order-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

export interface IShoppingCart {
  id: number;
  placedDate?: dayjs.Dayjs | null;
  status?: OrderStatus | null;
  totalPrice?: number | null;
  paymentMethod?: PaymentMethod | null;
  paymentReference?: string | null;
  customerDetails?: Pick<ICustomerDetails, 'id'> | null;
}

export type NewShoppingCart = Omit<IShoppingCart, 'id'> & { id: null };
