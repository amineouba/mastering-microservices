import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ShoppingCartComponent } from './list/shopping-cart.component';
import { ShoppingCartDetailComponent } from './detail/shopping-cart-detail.component';
import { ShoppingCartUpdateComponent } from './update/shopping-cart-update.component';
import { ShoppingCartDeleteDialogComponent } from './delete/shopping-cart-delete-dialog.component';
import { ShoppingCartRoutingModule } from './route/shopping-cart-routing.module';

@NgModule({
  imports: [SharedModule, ShoppingCartRoutingModule],
  declarations: [ShoppingCartComponent, ShoppingCartDetailComponent, ShoppingCartUpdateComponent, ShoppingCartDeleteDialogComponent],
})
export class ShoppingCartModule {}
