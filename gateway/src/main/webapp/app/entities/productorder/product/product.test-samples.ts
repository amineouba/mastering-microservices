import { ProductSize } from 'app/entities/enumerations/product-size.model';

import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
  sku: 'Customer-focused',
  upc: 'cross-platform Unbranded deposit',
  name: 'Interface Table',
  price: 304,
  productSize: ProductSize['M'],
};

export const sampleWithPartialData: IProduct = {
  id: 3502,
  sku: 'functionalities Garden Customer-focused',
  upc: 'program mission-critical',
  name: 'silver',
  description: '../fake-data/blob/hipster.txt',
  price: 19060,
  productSize: ProductSize['XL'],
  colors: 'sja,htxu',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
  imageSha1: '7ffc458c6bd1e64d51104ef0240d82f5457edf5e',
  imageCdnUrl: 'Franc',
  thumbnailSha1: '5355696e73c8f507a14f0e85190fda59b0f9313a',
  thumbnailCdnUrl: 'hacking',
};

export const sampleWithFullData: IProduct = {
  id: 77268,
  sku: 'program green Dobra',
  upc: 'Shirt Adaptive',
  name: 'virtual',
  description: '../fake-data/blob/hipster.txt',
  price: 30287,
  productSize: ProductSize['M'],
  colors: 'tq',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
  imageSha1: '4ca51e552c339c3f94c8af6b56546d6774456c18',
  imageCdnUrl: 'redundant Bacon',
  thumbnailSha1: '16c8278901fa3a4be914c06d0640221ad79cd960',
  thumbnailCdnUrl: 'Generic',
};

export const sampleWithNewData: NewProduct = {
  sku: 'Producteur Fresh Malte',
  upc: 'Mongolie',
  name: 'repurpose',
  price: 98571,
  productSize: ProductSize['XS'],
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
