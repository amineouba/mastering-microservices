import { ProductSize } from 'app/entities/enumerations/product-size.model';

import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
  sku: 'Customer-focused',
  upc: 'cross-platform Unbranded deposit',
  ean: 'Interface Table',
  name: 'Saint-Dominique',
  price: 66440,
  productSize: ProductSize['XXL'],
};

export const sampleWithPartialData: IProduct = {
  id: 72582,
  sku: 'hub',
  upc: 'b',
  ean: 'Plastic Incredible Agent',
  name: 'encompassing vertical policy',
  description: '../fake-data/blob/hipster.txt',
  price: 80395,
  productSize: ProductSize['XXL'],
  colors: 'idq,ydtcf,htr,sl,kqh',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
  imageCdnUrl: 'architectures enhance',
  thumbnailCdnUrl: 'bricks-and-clicks transmitter',
};

export const sampleWithFullData: IProduct = {
  id: 23843,
  sku: 'compress Franc',
  upc: 'pixel Pound copy',
  ean: 'Salad Dollar',
  name: 'de',
  description: '../fake-data/blob/hipster.txt',
  price: 42945,
  productSize: ProductSize['M'],
  colors: 'lykif,s,cjizol,abwd,uysf,ea',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
  imageSha1: '45b1a8408ea6cfffe1bf53d4ca51e552c339c3f9',
  imageCdnUrl: 'Frozen project',
  thumbnailSha1: '6546d6774456c182607a5864a16c8278901fa3a4',
  thumbnailCdnUrl: 'Vision-oriented',
};

export const sampleWithNewData: NewProduct = {
  sku: 'maroon maroon',
  upc: 'relationships de parsing',
  ean: 'c',
  name: 'Generic',
  price: 88927,
  productSize: ProductSize['XXL'],
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
