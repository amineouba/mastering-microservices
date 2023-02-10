import { IProduct } from 'app/entities/product/product.model';
import { IShoppingCart } from 'app/entities/shopping-cart/shopping-cart.model';

export interface IProductOrder {
  id: number;
  quantity?: number | null;
  totalPrice?: number | null;
  product?: Pick<IProduct, 'id' | 'name'> | null;
  cart?: Pick<IShoppingCart, 'id'> | null;
}

export type NewProductOrder = Omit<IProductOrder, 'id'> & { id: null };
