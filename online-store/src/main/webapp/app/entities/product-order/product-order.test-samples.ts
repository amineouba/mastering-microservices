import { IProductOrder, NewProductOrder } from './product-order.model';

export const sampleWithRequiredData: IProductOrder = {
  id: 84064,
  quantity: 93286,
  totalPrice: 67710,
};

export const sampleWithPartialData: IProductOrder = {
  id: 20151,
  quantity: 33777,
  totalPrice: 20999,
};

export const sampleWithFullData: IProductOrder = {
  id: 67223,
  quantity: 84112,
  totalPrice: 28058,
};

export const sampleWithNewData: NewProductOrder = {
  quantity: 37473,
  totalPrice: 30782,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
