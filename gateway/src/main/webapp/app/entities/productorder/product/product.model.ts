import { IProductCategory } from 'app/entities/productorder/product-category/product-category.model';
import { ProductSize } from 'app/entities/enumerations/product-size.model';

export interface IProduct {
  id: number;
  sku?: string | null;
  upc?: string | null;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  productSize?: ProductSize | null;
  colors?: string | null;
  image?: string | null;
  imageContentType?: string | null;
  imageSha1?: string | null;
  imageCdnUrl?: string | null;
  thumbnailSha1?: string | null;
  thumbnailCdnUrl?: string | null;
  productCategory?: Pick<IProductCategory, 'id'> | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
