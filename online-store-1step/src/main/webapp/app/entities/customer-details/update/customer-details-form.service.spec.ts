import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../customer-details.test-samples';

import { CustomerDetailsFormService } from './customer-details-form.service';

describe('CustomerDetails Form Service', () => {
  let service: CustomerDetailsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDetailsFormService);
  });

  describe('Service methods', () => {
    describe('createCustomerDetailsFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createCustomerDetailsFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            gender: expect.any(Object),
            phone: expect.any(Object),
            addressLine1: expect.any(Object),
            addressLine2: expect.any(Object),
            city: expect.any(Object),
            country: expect.any(Object),
            user: expect.any(Object),
          })
        );
      });

      it('passing ICustomerDetails should create a new form with FormGroup', () => {
        const formGroup = service.createCustomerDetailsFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            gender: expect.any(Object),
            phone: expect.any(Object),
            addressLine1: expect.any(Object),
            addressLine2: expect.any(Object),
            city: expect.any(Object),
            country: expect.any(Object),
            user: expect.any(Object),
          })
        );
      });
    });

    describe('getCustomerDetails', () => {
      it('should return NewCustomerDetails for default CustomerDetails initial value', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const formGroup = service.createCustomerDetailsFormGroup(sampleWithNewData);

        const customerDetails = service.getCustomerDetails(formGroup) as any;

        expect(customerDetails).toMatchObject(sampleWithNewData);
      });

      it('should return NewCustomerDetails for empty CustomerDetails initial value', () => {
        const formGroup = service.createCustomerDetailsFormGroup();

        const customerDetails = service.getCustomerDetails(formGroup) as any;

        expect(customerDetails).toMatchObject({});
      });

      it('should return ICustomerDetails', () => {
        const formGroup = service.createCustomerDetailsFormGroup(sampleWithRequiredData);

        const customerDetails = service.getCustomerDetails(formGroup) as any;

        expect(customerDetails).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing ICustomerDetails should not enable id FormControl', () => {
        const formGroup = service.createCustomerDetailsFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewCustomerDetails should disable id FormControl', () => {
        const formGroup = service.createCustomerDetailsFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
