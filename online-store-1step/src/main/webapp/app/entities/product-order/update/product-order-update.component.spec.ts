import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { ProductOrderFormService } from './product-order-form.service';
import { ProductOrderService } from '../service/product-order.service';
import { IProductOrder } from '../product-order.model';
import { IProduct } from 'app/entities/product/product.model';
import { ProductService } from 'app/entities/product/service/product.service';
import { IShoppingCart } from 'app/entities/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from 'app/entities/shopping-cart/service/shopping-cart.service';

import { ProductOrderUpdateComponent } from './product-order-update.component';

describe('ProductOrder Management Update Component', () => {
  let comp: ProductOrderUpdateComponent;
  let fixture: ComponentFixture<ProductOrderUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let productOrderFormService: ProductOrderFormService;
  let productOrderService: ProductOrderService;
  let productService: ProductService;
  let shoppingCartService: ShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ProductOrderUpdateComponent],
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
      .overrideTemplate(ProductOrderUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(ProductOrderUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    productOrderFormService = TestBed.inject(ProductOrderFormService);
    productOrderService = TestBed.inject(ProductOrderService);
    productService = TestBed.inject(ProductService);
    shoppingCartService = TestBed.inject(ShoppingCartService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call Product query and add missing value', () => {
      const productOrder: IProductOrder = { id: 456 };
      const product: IProduct = { id: 80438 };
      productOrder.product = product;

      const productCollection: IProduct[] = [{ id: 76511 }];
      jest.spyOn(productService, 'query').mockReturnValue(of(new HttpResponse({ body: productCollection })));
      const additionalProducts = [product];
      const expectedCollection: IProduct[] = [...additionalProducts, ...productCollection];
      jest.spyOn(productService, 'addProductToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ productOrder });
      comp.ngOnInit();

      expect(productService.query).toHaveBeenCalled();
      expect(productService.addProductToCollectionIfMissing).toHaveBeenCalledWith(
        productCollection,
        ...additionalProducts.map(expect.objectContaining)
      );
      expect(comp.productsSharedCollection).toEqual(expectedCollection);
    });

    it('Should call ShoppingCart query and add missing value', () => {
      const productOrder: IProductOrder = { id: 456 };
      const cart: IShoppingCart = { id: 47590 };
      productOrder.cart = cart;

      const shoppingCartCollection: IShoppingCart[] = [{ id: 67760 }];
      jest.spyOn(shoppingCartService, 'query').mockReturnValue(of(new HttpResponse({ body: shoppingCartCollection })));
      const additionalShoppingCarts = [cart];
      const expectedCollection: IShoppingCart[] = [...additionalShoppingCarts, ...shoppingCartCollection];
      jest.spyOn(shoppingCartService, 'addShoppingCartToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ productOrder });
      comp.ngOnInit();

      expect(shoppingCartService.query).toHaveBeenCalled();
      expect(shoppingCartService.addShoppingCartToCollectionIfMissing).toHaveBeenCalledWith(
        shoppingCartCollection,
        ...additionalShoppingCarts.map(expect.objectContaining)
      );
      expect(comp.shoppingCartsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const productOrder: IProductOrder = { id: 456 };
      const product: IProduct = { id: 59499 };
      productOrder.product = product;
      const cart: IShoppingCart = { id: 69791 };
      productOrder.cart = cart;

      activatedRoute.data = of({ productOrder });
      comp.ngOnInit();

      expect(comp.productsSharedCollection).toContain(product);
      expect(comp.shoppingCartsSharedCollection).toContain(cart);
      expect(comp.productOrder).toEqual(productOrder);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IProductOrder>>();
      const productOrder = { id: 123 };
      jest.spyOn(productOrderFormService, 'getProductOrder').mockReturnValue(productOrder);
      jest.spyOn(productOrderService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ productOrder });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: productOrder }));
      saveSubject.complete();

      // THEN
      expect(productOrderFormService.getProductOrder).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(productOrderService.update).toHaveBeenCalledWith(expect.objectContaining(productOrder));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IProductOrder>>();
      const productOrder = { id: 123 };
      jest.spyOn(productOrderFormService, 'getProductOrder').mockReturnValue({ id: null });
      jest.spyOn(productOrderService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ productOrder: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: productOrder }));
      saveSubject.complete();

      // THEN
      expect(productOrderFormService.getProductOrder).toHaveBeenCalled();
      expect(productOrderService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IProductOrder>>();
      const productOrder = { id: 123 };
      jest.spyOn(productOrderService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ productOrder });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(productOrderService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareProduct', () => {
      it('Should forward to productService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(productService, 'compareProduct');
        comp.compareProduct(entity, entity2);
        expect(productService.compareProduct).toHaveBeenCalledWith(entity, entity2);
      });
    });

    describe('compareShoppingCart', () => {
      it('Should forward to shoppingCartService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(shoppingCartService, 'compareShoppingCart');
        comp.compareShoppingCart(entity, entity2);
        expect(shoppingCartService.compareShoppingCart).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
