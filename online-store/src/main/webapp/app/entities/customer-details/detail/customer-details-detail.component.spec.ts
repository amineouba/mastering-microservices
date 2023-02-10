import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CustomerDetailsDetailComponent } from './customer-details-detail.component';

describe('CustomerDetails Management Detail Component', () => {
  let comp: CustomerDetailsDetailComponent;
  let fixture: ComponentFixture<CustomerDetailsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailsDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ customerDetails: { id: 123 } }) },
        },
      ],
    })
      .overrideTemplate(CustomerDetailsDetailComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(CustomerDetailsDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load customerDetails on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.customerDetails).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
