import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IShoppingCart } from '../shopping-cart.model';

@Component({
  selector: 'jhi-shopping-cart-detail',
  templateUrl: './shopping-cart-detail.component.html',
})
export class ShoppingCartDetailComponent implements OnInit {
  shoppingCart: IShoppingCart | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ shoppingCart }) => {
      this.shoppingCart = shoppingCart;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
