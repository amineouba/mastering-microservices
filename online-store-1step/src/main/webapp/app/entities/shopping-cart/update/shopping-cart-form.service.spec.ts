import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../shopping-cart.test-samples';

import { ShoppingCartFormService } from './shopping-cart-form.service';

describe('ShoppingCart Form Service', () => {
  let service: ShoppingCartFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartFormService);
  });

  describe('Service methods', () => {
    describe('createShoppingCartFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createShoppingCartFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            placedDate: expect.any(Object),
            status: expect.any(Object),
            totalPrice: expect.any(Object),
            paymentMethod: expect.any(Object),
            paymentReference: expect.any(Object),
            customerDetails: expect.any(Object),
          })
        );
      });

      it('passing IShoppingCart should create a new form with FormGroup', () => {
        const formGroup = service.createShoppingCartFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            placedDate: expect.any(Object),
            status: expect.any(Object),
            totalPrice: expect.any(Object),
            paymentMethod: expect.any(Object),
            paymentReference: expect.any(Object),
            customerDetails: expect.any(Object),
          })
        );
      });
    });

    describe('getShoppingCart', () => {
      it('should return NewShoppingCart for default ShoppingCart initial value', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const formGroup = service.createShoppingCartFormGroup(sampleWithNewData);

        const shoppingCart = service.getShoppingCart(formGroup) as any;

        expect(shoppingCart).toMatchObject(sampleWithNewData);
      });

      it('should return NewShoppingCart for empty ShoppingCart initial value', () => {
        const formGroup = service.createShoppingCartFormGroup();

        const shoppingCart = service.getShoppingCart(formGroup) as any;

        expect(shoppingCart).toMatchObject({});
      });

      it('should return IShoppingCart', () => {
        const formGroup = service.createShoppingCartFormGroup(sampleWithRequiredData);

        const shoppingCart = service.getShoppingCart(formGroup) as any;

        expect(shoppingCart).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing IShoppingCart should not enable id FormControl', () => {
        const formGroup = service.createShoppingCartFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewShoppingCart should disable id FormControl', () => {
        const formGroup = service.createShoppingCartFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
