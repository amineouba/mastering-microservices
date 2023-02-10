import { Gender } from 'app/entities/enumerations/gender.model';

import { ICustomerDetails, NewCustomerDetails } from './customer-details.model';

export const sampleWithRequiredData: ICustomerDetails = {
  id: 48932,
  gender: Gender['OTHER'],
  phone: '+33 368607043',
  addressLine1: 'driver Bacon',
  city: 'Abigaellefort',
  country: 'Singapour',
};

export const sampleWithPartialData: ICustomerDetails = {
  id: 44452,
  gender: Gender['OTHER'],
  phone: '+33 405177776',
  addressLine1: 'homogeneous multi-byte',
  city: 'East Sidoineside',
  country: 'Grenade',
  latitude: 81859,
  geohash: 'e-markets',
  olc: 'system',
};

export const sampleWithFullData: ICustomerDetails = {
  id: 88085,
  gender: Gender['OTHER'],
  phone: '+33 609533208',
  addressLine1: 'solution indigo',
  addressLine2: 'PCI bandwidth metrics',
  city: 'Les Abymes',
  country: 'Bénin',
  latitude: 95168,
  longitude: 97358,
  geohash: 'b Balboa',
  olc: 'c Rhône-Alpes Kids',
};

export const sampleWithNewData: NewCustomerDetails = {
  gender: Gender['FEMALE'],
  phone: '0379374067',
  addressLine1: 'copy c Bacon',
  city: 'Coralineberg',
  country: 'Afghanistan',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
