import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ICustomerDetails, NewCustomerDetails } from '../customer-details.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ICustomerDetails for edit and NewCustomerDetailsFormGroupInput for create.
 */
type CustomerDetailsFormGroupInput = ICustomerDetails | PartialWithRequiredKeyOf<NewCustomerDetails>;

type CustomerDetailsFormDefaults = Pick<NewCustomerDetails, 'id'>;

type CustomerDetailsFormGroupContent = {
  id: FormControl<ICustomerDetails['id'] | NewCustomerDetails['id']>;
  gender: FormControl<ICustomerDetails['gender']>;
  phone: FormControl<ICustomerDetails['phone']>;
  addressLine1: FormControl<ICustomerDetails['addressLine1']>;
  addressLine2: FormControl<ICustomerDetails['addressLine2']>;
  city: FormControl<ICustomerDetails['city']>;
  country: FormControl<ICustomerDetails['country']>;
  user: FormControl<ICustomerDetails['user']>;
};

export type CustomerDetailsFormGroup = FormGroup<CustomerDetailsFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class CustomerDetailsFormService {
  createCustomerDetailsFormGroup(customerDetails: CustomerDetailsFormGroupInput = { id: null }): CustomerDetailsFormGroup {
    const customerDetailsRawValue = {
      ...this.getFormDefaults(),
      ...customerDetails,
    };
    return new FormGroup<CustomerDetailsFormGroupContent>({
      id: new FormControl(
        { value: customerDetailsRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      gender: new FormControl(customerDetailsRawValue.gender, {
        validators: [Validators.required],
      }),
      phone: new FormControl(customerDetailsRawValue.phone, {
        validators: [Validators.required],
      }),
      addressLine1: new FormControl(customerDetailsRawValue.addressLine1, {
        validators: [Validators.required],
      }),
      addressLine2: new FormControl(customerDetailsRawValue.addressLine2),
      city: new FormControl(customerDetailsRawValue.city, {
        validators: [Validators.required],
      }),
      country: new FormControl(customerDetailsRawValue.country, {
        validators: [Validators.required],
      }),
      user: new FormControl(customerDetailsRawValue.user, {
        validators: [Validators.required],
      }),
    });
  }

  getCustomerDetails(form: CustomerDetailsFormGroup): ICustomerDetails | NewCustomerDetails {
    return form.getRawValue() as ICustomerDetails | NewCustomerDetails;
  }

  resetForm(form: CustomerDetailsFormGroup, customerDetails: CustomerDetailsFormGroupInput): void {
    const customerDetailsRawValue = { ...this.getFormDefaults(), ...customerDetails };
    form.reset(
      {
        ...customerDetailsRawValue,
        id: { value: customerDetailsRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): CustomerDetailsFormDefaults {
    return {
      id: null,
    };
  }
}
