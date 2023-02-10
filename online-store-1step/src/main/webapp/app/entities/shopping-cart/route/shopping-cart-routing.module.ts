import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ShoppingCartComponent } from '../list/shopping-cart.component';
import { ShoppingCartDetailComponent } from '../detail/shopping-cart-detail.component';
import { ShoppingCartUpdateComponent } from '../update/shopping-cart-update.component';
import { ShoppingCartRoutingResolveService } from './shopping-cart-routing-resolve.service';
import { ASC } from 'app/config/navigation.constants';

const shoppingCartRoute: Routes = [
  {
    path: '',
    component: ShoppingCartComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ShoppingCartDetailComponent,
    resolve: {
      shoppingCart: ShoppingCartRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ShoppingCartUpdateComponent,
    resolve: {
      shoppingCart: ShoppingCartRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ShoppingCartUpdateComponent,
    resolve: {
      shoppingCart: ShoppingCartRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(shoppingCartRoute)],
  exports: [RouterModule],
})
export class ShoppingCartRoutingModule {}
