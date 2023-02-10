import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { CustomerDetailsComponent } from './list/customer-details.component';
import { CustomerDetailsDetailComponent } from './detail/customer-details-detail.component';
import { CustomerDetailsUpdateComponent } from './update/customer-details-update.component';
import { CustomerDetailsDeleteDialogComponent } from './delete/customer-details-delete-dialog.component';
import { CustomerDetailsRoutingModule } from './route/customer-details-routing.module';

@NgModule({
  imports: [SharedModule, CustomerDetailsRoutingModule],
  declarations: [
    CustomerDetailsComponent,
    CustomerDetailsDetailComponent,
    CustomerDetailsUpdateComponent,
    CustomerDetailsDeleteDialogComponent,
  ],
})
export class CustomerDetailsModule {}
