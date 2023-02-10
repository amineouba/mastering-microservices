import { Gender } from 'app/entities/enumerations/gender.model';

import { ICustomerDetails, NewCustomerDetails } from './customer-details.model';

export const sampleWithRequiredData: ICustomerDetails = {
  id: 48932,
  gender: Gender['OTHER'],
  phone: '(786) 270-4357 x0517',
  addressLine1: 'synergies open-source olive',
  city: 'Saraimouth',
  country: 'Afghanistan',
};

export const sampleWithPartialData: ICustomerDetails = {
  id: 10571,
  gender: Gender['OTHER'],
  phone: '1-776-524-0755 x0299',
  addressLine1: 'bypassing Idaho',
  addressLine2: 'Ports optical Infrastructure',
  city: 'East Annamae',
  country: 'Slovenia',
};

export const sampleWithFullData: ICustomerDetails = {
  id: 51200,
  gender: Gender['MALE'],
  phone: '617-798-3470 x14829',
  addressLine1: 'Tasty Virginia',
  addressLine2: 'Balboa',
  city: 'Temple',
  country: 'South Africa',
};

export const sampleWithNewData: NewCustomerDetails = {
  gender: Gender['MALE'],
  phone: '940.695.1793 x740',
  addressLine1: 'synthesize concept',
  city: 'Loweville',
  country: 'Somalia',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
