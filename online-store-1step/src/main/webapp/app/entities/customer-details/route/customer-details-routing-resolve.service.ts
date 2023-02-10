import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ICustomerDetails } from '../customer-details.model';
import { CustomerDetailsService } from '../service/customer-details.service';

@Injectable({ providedIn: 'root' })
export class CustomerDetailsRoutingResolveService implements Resolve<ICustomerDetails | null> {
  constructor(protected service: CustomerDetailsService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICustomerDetails | null | never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((customerDetails: HttpResponse<ICustomerDetails>) => {
          if (customerDetails.body) {
            return of(customerDetails.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(null);
  }
}
