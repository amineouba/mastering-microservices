import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ShoppingCartDetailComponent } from './shopping-cart-detail.component';

describe('ShoppingCart Management Detail Component', () => {
  let comp: ShoppingCartDetailComponent;
  let fixture: ComponentFixture<ShoppingCartDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ shoppingCart: { id: 123 } }) },
        },
      ],
    })
      .overrideTemplate(ShoppingCartDetailComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(ShoppingCartDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load shoppingCart on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.shoppingCart).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
