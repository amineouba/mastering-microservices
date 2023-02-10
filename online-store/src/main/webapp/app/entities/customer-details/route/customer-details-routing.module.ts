import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { CustomerDetailsComponent } from '../list/customer-details.component';
import { CustomerDetailsDetailComponent } from '../detail/customer-details-detail.component';
import { CustomerDetailsUpdateComponent } from '../update/customer-details-update.component';
import { CustomerDetailsRoutingResolveService } from './customer-details-routing-resolve.service';
import { ASC } from 'app/config/navigation.constants';

const customerDetailsRoute: Routes = [
  {
    path: '',
    component: CustomerDetailsComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CustomerDetailsDetailComponent,
    resolve: {
      customerDetails: CustomerDetailsRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CustomerDetailsUpdateComponent,
    resolve: {
      customerDetails: CustomerDetailsRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CustomerDetailsUpdateComponent,
    resolve: {
      customerDetails: CustomerDetailsRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(customerDetailsRoute)],
  exports: [RouterModule],
})
export class CustomerDetailsRoutingModule {}
