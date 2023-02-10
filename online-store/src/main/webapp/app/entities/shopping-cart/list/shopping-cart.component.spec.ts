import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ShoppingCartService } from '../service/shopping-cart.service';

import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCart Management Component', () => {
  let comp: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let service: ShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{ path: 'shopping-cart', component: ShoppingCartComponent }]), HttpClientTestingModule],
      declarations: [ShoppingCartComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              defaultSort: 'id,asc',
            }),
            queryParamMap: of(
              jest.requireActual('@angular/router').convertToParamMap({
                page: '1',
                size: '1',
                sort: 'id,desc',
              })
            ),
            snapshot: { queryParams: {} },
          },
        },
      ],
    })
      .overrideTemplate(ShoppingCartComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(ShoppingCartService);

    const headers = new HttpHeaders();
    jest.spyOn(service, 'query').mockReturnValue(
      of(
        new HttpResponse({
          body: [{ id: 123 }],
          headers,
        })
      )
    );
  });

  it('Should call load all on init', () => {
    // WHEN
    comp.ngOnInit();

    // THEN
    expect(service.query).toHaveBeenCalled();
    expect(comp.shoppingCarts?.[0]).toEqual(expect.objectContaining({ id: 123 }));
  });

  describe('trackId', () => {
    it('Should forward to shoppingCartService', () => {
      const entity = { id: 123 };
      jest.spyOn(service, 'getShoppingCartIdentifier');
      const id = comp.trackId(0, entity);
      expect(service.getShoppingCartIdentifier).toHaveBeenCalledWith(entity);
      expect(id).toBe(entity.id);
    });
  });
});
