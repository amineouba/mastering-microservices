import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ICustomerDetails } from '../customer-details.model';
import { sampleWithRequiredData, sampleWithNewData, sampleWithPartialData, sampleWithFullData } from '../customer-details.test-samples';

import { CustomerDetailsService } from './customer-details.service';

const requireRestSample: ICustomerDetails = {
  ...sampleWithRequiredData,
};

describe('CustomerDetails Service', () => {
  let service: CustomerDetailsService;
  let httpMock: HttpTestingController;
  let expectedResult: ICustomerDetails | ICustomerDetails[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(CustomerDetailsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should create a CustomerDetails', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const customerDetails = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(customerDetails).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a CustomerDetails', () => {
      const customerDetails = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(customerDetails).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a CustomerDetails', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of CustomerDetails', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a CustomerDetails', () => {
      const expected = true;

      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult).toBe(expected);
    });

    describe('addCustomerDetailsToCollectionIfMissing', () => {
      it('should add a CustomerDetails to an empty array', () => {
        const customerDetails: ICustomerDetails = sampleWithRequiredData;
        expectedResult = service.addCustomerDetailsToCollectionIfMissing([], customerDetails);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(customerDetails);
      });

      it('should not add a CustomerDetails to an array that contains it', () => {
        const customerDetails: ICustomerDetails = sampleWithRequiredData;
        const customerDetailsCollection: ICustomerDetails[] = [
          {
            ...customerDetails,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addCustomerDetailsToCollectionIfMissing(customerDetailsCollection, customerDetails);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a CustomerDetails to an array that doesn't contain it", () => {
        const customerDetails: ICustomerDetails = sampleWithRequiredData;
        const customerDetailsCollection: ICustomerDetails[] = [sampleWithPartialData];
        expectedResult = service.addCustomerDetailsToCollectionIfMissing(customerDetailsCollection, customerDetails);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(customerDetails);
      });

      it('should add only unique CustomerDetails to an array', () => {
        const customerDetailsArray: ICustomerDetails[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const customerDetailsCollection: ICustomerDetails[] = [sampleWithRequiredData];
        expectedResult = service.addCustomerDetailsToCollectionIfMissing(customerDetailsCollection, ...customerDetailsArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const customerDetails: ICustomerDetails = sampleWithRequiredData;
        const customerDetails2: ICustomerDetails = sampleWithPartialData;
        expectedResult = service.addCustomerDetailsToCollectionIfMissing([], customerDetails, customerDetails2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(customerDetails);
        expect(expectedResult).toContain(customerDetails2);
      });

      it('should accept null and undefined values', () => {
        const customerDetails: ICustomerDetails = sampleWithRequiredData;
        expectedResult = service.addCustomerDetailsToCollectionIfMissing([], null, customerDetails, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(customerDetails);
      });

      it('should return initial array if no CustomerDetails is added', () => {
        const customerDetailsCollection: ICustomerDetails[] = [sampleWithRequiredData];
        expectedResult = service.addCustomerDetailsToCollectionIfMissing(customerDetailsCollection, undefined, null);
        expect(expectedResult).toEqual(customerDetailsCollection);
      });
    });

    describe('compareCustomerDetails', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareCustomerDetails(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareCustomerDetails(entity1, entity2);
        const compareResult2 = service.compareCustomerDetails(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareCustomerDetails(entity1, entity2);
        const compareResult2 = service.compareCustomerDetails(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareCustomerDetails(entity1, entity2);
        const compareResult2 = service.compareCustomerDetails(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
