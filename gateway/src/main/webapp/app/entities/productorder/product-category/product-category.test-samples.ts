import { IProductCategory, NewProductCategory } from './product-category.model';

export const sampleWithRequiredData: IProductCategory = {
  id: 39228,
  name: 'invoice Guinée',
};

export const sampleWithPartialData: IProductCategory = {
  id: 87861,
  name: 'Superviseur 1080p de',
};

export const sampleWithFullData: IProductCategory = {
  id: 61440,
  name: 'Ball',
  description: 'haptic Producteur Irlande',
};

export const sampleWithNewData: NewProductCategory = {
  name: 'Cape',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
