import { IUser } from 'app/entities/user/user.model';
import { Gender } from 'app/entities/enumerations/gender.model';

export interface ICustomerDetails {
  id: number;
  gender?: Gender | null;
  phone?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  country?: string | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
}

export type NewCustomerDetails = Omit<ICustomerDetails, 'id'> & { id: null };
