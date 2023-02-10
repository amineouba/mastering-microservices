import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { IShoppingCart, NewShoppingCart } from '../shopping-cart.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IShoppingCart for edit and NewShoppingCartFormGroupInput for create.
 */
type ShoppingCartFormGroupInput = IShoppingCart | PartialWithRequiredKeyOf<NewShoppingCart>;

/**
 * Type that converts some properties for forms.
 */
type FormValueOf<T extends IShoppingCart | NewShoppingCart> = Omit<T, 'placedDate'> & {
  placedDate?: string | null;
};

type ShoppingCartFormRawValue = FormValueOf<IShoppingCart>;

type NewShoppingCartFormRawValue = FormValueOf<NewShoppingCart>;

type ShoppingCartFormDefaults = Pick<NewShoppingCart, 'id' | 'placedDate'>;

type ShoppingCartFormGroupContent = {
  id: FormControl<ShoppingCartFormRawValue['id'] | NewShoppingCart['id']>;
  placedDate: FormControl<ShoppingCartFormRawValue['placedDate']>;
  status: FormControl<ShoppingCartFormRawValue['status']>;
  totalPrice: FormControl<ShoppingCartFormRawValue['totalPrice']>;
  paymentMethod: FormControl<ShoppingCartFormRawValue['paymentMethod']>;
  paymentReference: FormControl<ShoppingCartFormRawValue['paymentReference']>;
  customerDetails: FormControl<ShoppingCartFormRawValue['customerDetails']>;
};

export type ShoppingCartFormGroup = FormGroup<ShoppingCartFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class ShoppingCartFormService {
  createShoppingCartFormGroup(shoppingCart: ShoppingCartFormGroupInput = { id: null }): ShoppingCartFormGroup {
    const shoppingCartRawValue = this.convertShoppingCartToShoppingCartRawValue({
      ...this.getFormDefaults(),
      ...shoppingCart,
    });
    return new FormGroup<ShoppingCartFormGroupContent>({
      id: new FormControl(
        { value: shoppingCartRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      placedDate: new FormControl(shoppingCartRawValue.placedDate, {
        validators: [Validators.required],
      }),
      status: new FormControl(shoppingCartRawValue.status, {
        validators: [Validators.required],
      }),
      totalPrice: new FormControl(shoppingCartRawValue.totalPrice, {
        validators: [Validators.required, Validators.min(0)],
      }),
      paymentMethod: new FormControl(shoppingCartRawValue.paymentMethod, {
        validators: [Validators.required],
      }),
      paymentReference: new FormControl(shoppingCartRawValue.paymentReference),
      customerDetails: new FormControl(shoppingCartRawValue.customerDetails, {
        validators: [Validators.required],
      }),
    });
  }

  getShoppingCart(form: ShoppingCartFormGroup): IShoppingCart | NewShoppingCart {
    return this.convertShoppingCartRawValueToShoppingCart(form.getRawValue() as ShoppingCartFormRawValue | NewShoppingCartFormRawValue);
  }

  resetForm(form: ShoppingCartFormGroup, shoppingCart: ShoppingCartFormGroupInput): void {
    const shoppingCartRawValue = this.convertShoppingCartToShoppingCartRawValue({ ...this.getFormDefaults(), ...shoppingCart });
    form.reset(
      {
        ...shoppingCartRawValue,
        id: { value: shoppingCartRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): ShoppingCartFormDefaults {
    const currentTime = dayjs();

    return {
      id: null,
      placedDate: currentTime,
    };
  }

  private convertShoppingCartRawValueToShoppingCart(
    rawShoppingCart: ShoppingCartFormRawValue | NewShoppingCartFormRawValue
  ): IShoppingCart | NewShoppingCart {
    return {
      ...rawShoppingCart,
      placedDate: dayjs(rawShoppingCart.placedDate, DATE_TIME_FORMAT),
    };
  }

  private convertShoppingCartToShoppingCartRawValue(
    shoppingCart: IShoppingCart | (Partial<NewShoppingCart> & ShoppingCartFormDefaults)
  ): ShoppingCartFormRawValue | PartialWithRequiredKeyOf<NewShoppingCartFormRawValue> {
    return {
      ...shoppingCart,
      placedDate: shoppingCart.placedDate ? shoppingCart.placedDate.format(DATE_TIME_FORMAT) : undefined,
    };
  }
}
