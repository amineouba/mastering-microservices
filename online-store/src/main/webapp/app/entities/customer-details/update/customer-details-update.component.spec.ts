import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { CustomerDetailsFormService } from './customer-details-form.service';
import { CustomerDetailsService } from '../service/customer-details.service';
import { ICustomerDetails } from '../customer-details.model';

import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/user.service';

import { CustomerDetailsUpdateComponent } from './customer-details-update.component';

describe('CustomerDetails Management Update Component', () => {
  let comp: CustomerDetailsUpdateComponent;
  let fixture: ComponentFixture<CustomerDetailsUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let customerDetailsFormService: CustomerDetailsFormService;
  let customerDetailsService: CustomerDetailsService;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [CustomerDetailsUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(CustomerDetailsUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    customerDetailsFormService = TestBed.inject(CustomerDetailsFormService);
    customerDetailsService = TestBed.inject(CustomerDetailsService);
    userService = TestBed.inject(UserService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call User query and add missing value', () => {
      const customerDetails: ICustomerDetails = { id: 456 };
      const user: IUser = { id: 29616 };
      customerDetails.user = user;

      const userCollection: IUser[] = [{ id: 31025 }];
      jest.spyOn(userService, 'query').mockReturnValue(of(new HttpResponse({ body: userCollection })));
      const additionalUsers = [user];
      const expectedCollection: IUser[] = [...additionalUsers, ...userCollection];
      jest.spyOn(userService, 'addUserToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ customerDetails });
      comp.ngOnInit();

      expect(userService.query).toHaveBeenCalled();
      expect(userService.addUserToCollectionIfMissing).toHaveBeenCalledWith(
        userCollection,
        ...additionalUsers.map(expect.objectContaining)
      );
      expect(comp.usersSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const customerDetails: ICustomerDetails = { id: 456 };
      const user: IUser = { id: 785 };
      customerDetails.user = user;

      activatedRoute.data = of({ customerDetails });
      comp.ngOnInit();

      expect(comp.usersSharedCollection).toContain(user);
      expect(comp.customerDetails).toEqual(customerDetails);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ICustomerDetails>>();
      const customerDetails = { id: 123 };
      jest.spyOn(customerDetailsFormService, 'getCustomerDetails').mockReturnValue(customerDetails);
      jest.spyOn(customerDetailsService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ customerDetails });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: customerDetails }));
      saveSubject.complete();

      // THEN
      expect(customerDetailsFormService.getCustomerDetails).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(customerDetailsService.update).toHaveBeenCalledWith(expect.objectContaining(customerDetails));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ICustomerDetails>>();
      const customerDetails = { id: 123 };
      jest.spyOn(customerDetailsFormService, 'getCustomerDetails').mockReturnValue({ id: null });
      jest.spyOn(customerDetailsService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ customerDetails: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: customerDetails }));
      saveSubject.complete();

      // THEN
      expect(customerDetailsFormService.getCustomerDetails).toHaveBeenCalled();
      expect(customerDetailsService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ICustomerDetails>>();
      const customerDetails = { id: 123 };
      jest.spyOn(customerDetailsService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ customerDetails });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(customerDetailsService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareUser', () => {
      it('Should forward to userService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(userService, 'compareUser');
        comp.compareUser(entity, entity2);
        expect(userService.compareUser).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
