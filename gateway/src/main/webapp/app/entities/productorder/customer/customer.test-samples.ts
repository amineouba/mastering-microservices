import { Gender } from 'app/entities/enumerations/gender.model';

import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 24379,
  userId: 32779,
  firstName: 'Sixte',
  lastName: 'Fernandez',
  gender: Gender['MALE'],
  email: 'Sylvestre.Lemoine8@yahoo.fr',
  phone: '0487556958',
  addressLine1: 'analyzer invoice',
  city: 'North Sandrine',
  country: 'Syrie',
};

export const sampleWithPartialData: ICustomer = {
  id: 71618,
  userId: 55267,
  firstName: 'France',
  lastName: 'Lopez',
  gender: Gender['OTHER'],
  email: 'Chrysostome_Fabre@hotmail.fr',
  phone: '+33 105357625',
  addressLine1: 'Balanced withdrawal Corse',
  addressLine2: 'silver transmitter',
  city: 'North Lucilleton',
  country: 'Mali',
};

export const sampleWithFullData: ICustomer = {
  id: 2067,
  userId: 14245,
  firstName: 'Guyot',
  lastName: 'Schneider',
  gender: Gender['FEMALE'],
  email: 'Grgoire_Philippe4@yahoo.fr',
  phone: '+33 579696130',
  addressLine1: 'c',
  addressLine2: 'Bénin',
  city: 'Ponsfurt',
  country: 'France',
};

export const sampleWithNewData: NewCustomer = {
  userId: 24825,
  firstName: 'Swassane',
  lastName: 'Arnaud',
  gender: Gender['MALE'],
  email: 'Andre.Perez@gmail.com',
  phone: '0701177691',
  addressLine1: 'expedite',
  city: 'North Didier',
  country: 'Mauritanie',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
