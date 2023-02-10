import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { ProductOrderFormService, ProductOrderFormGroup } from './product-order-form.service';
import { IProductOrder } from '../product-order.model';
import { ProductOrderService } from '../service/product-order.service';
import { IProduct } from 'app/entities/product/product.model';
import { ProductService } from 'app/entities/product/service/product.service';
import { IShoppingCart } from 'app/entities/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from 'app/entities/shopping-cart/service/shopping-cart.service';

@Component({
  selector: 'jhi-product-order-update',
  templateUrl: './product-order-update.component.html',
})
export class ProductOrderUpdateComponent implements OnInit {
  isSaving = false;
  productOrder: IProductOrder | null = null;

  productsSharedCollection: IProduct[] = [];
  shoppingCartsSharedCollection: IShoppingCart[] = [];

  editForm: ProductOrderFormGroup = this.productOrderFormService.createProductOrderFormGroup();

  constructor(
    protected productOrderService: ProductOrderService,
    protected productOrderFormService: ProductOrderFormService,
    protected productService: ProductService,
    protected shoppingCartService: ShoppingCartService,
    protected activatedRoute: ActivatedRoute
  ) {}

  compareProduct = (o1: IProduct | null, o2: IProduct | null): boolean => this.productService.compareProduct(o1, o2);

  compareShoppingCart = (o1: IShoppingCart | null, o2: IShoppingCart | null): boolean =>
    this.shoppingCartService.compareShoppingCart(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ productOrder }) => {
      this.productOrder = productOrder;
      if (productOrder) {
        this.updateForm(productOrder);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const productOrder = this.productOrderFormService.getProductOrder(this.editForm);
    if (productOrder.id !== null) {
      this.subscribeToSaveResponse(this.productOrderService.update(productOrder));
    } else {
      this.subscribeToSaveResponse(this.productOrderService.create(productOrder));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IProductOrder>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(productOrder: IProductOrder): void {
    this.productOrder = productOrder;
    this.productOrderFormService.resetForm(this.editForm, productOrder);

    this.productsSharedCollection = this.productService.addProductToCollectionIfMissing<IProduct>(
      this.productsSharedCollection,
      productOrder.product
    );
    this.shoppingCartsSharedCollection = this.shoppingCartService.addShoppingCartToCollectionIfMissing<IShoppingCart>(
      this.shoppingCartsSharedCollection,
      productOrder.cart
    );
  }

  protected loadRelationshipsOptions(): void {
    this.productService
      .query()
      .pipe(map((res: HttpResponse<IProduct[]>) => res.body ?? []))
      .pipe(
        map((products: IProduct[]) => this.productService.addProductToCollectionIfMissing<IProduct>(products, this.productOrder?.product))
      )
      .subscribe((products: IProduct[]) => (this.productsSharedCollection = products));

    this.shoppingCartService
      .query()
      .pipe(map((res: HttpResponse<IShoppingCart[]>) => res.body ?? []))
      .pipe(
        map((shoppingCarts: IShoppingCart[]) =>
          this.shoppingCartService.addShoppingCartToCollectionIfMissing<IShoppingCart>(shoppingCarts, this.productOrder?.cart)
        )
      )
      .subscribe((shoppingCarts: IShoppingCart[]) => (this.shoppingCartsSharedCollection = shoppingCarts));
  }
}
