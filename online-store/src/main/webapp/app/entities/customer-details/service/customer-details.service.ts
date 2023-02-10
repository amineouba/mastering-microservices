import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ICustomerDetails, NewCustomerDetails } from '../customer-details.model';

export type PartialUpdateCustomerDetails = Partial<ICustomerDetails> & Pick<ICustomerDetails, 'id'>;

export type EntityResponseType = HttpResponse<ICustomerDetails>;
export type EntityArrayResponseType = HttpResponse<ICustomerDetails[]>;

@Injectable({ providedIn: 'root' })
export class CustomerDetailsService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/customer-details');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(customerDetails: NewCustomerDetails): Observable<EntityResponseType> {
    return this.http.post<ICustomerDetails>(this.resourceUrl, customerDetails, { observe: 'response' });
  }

  update(customerDetails: ICustomerDetails): Observable<EntityResponseType> {
    return this.http.put<ICustomerDetails>(`${this.resourceUrl}/${this.getCustomerDetailsIdentifier(customerDetails)}`, customerDetails, {
      observe: 'response',
    });
  }

  partialUpdate(customerDetails: PartialUpdateCustomerDetails): Observable<EntityResponseType> {
    return this.http.patch<ICustomerDetails>(`${this.resourceUrl}/${this.getCustomerDetailsIdentifier(customerDetails)}`, customerDetails, {
      observe: 'response',
    });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICustomerDetails>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICustomerDetails[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getCustomerDetailsIdentifier(customerDetails: Pick<ICustomerDetails, 'id'>): number {
    return customerDetails.id;
  }

  compareCustomerDetails(o1: Pick<ICustomerDetails, 'id'> | null, o2: Pick<ICustomerDetails, 'id'> | null): boolean {
    return o1 && o2 ? this.getCustomerDetailsIdentifier(o1) === this.getCustomerDetailsIdentifier(o2) : o1 === o2;
  }

  addCustomerDetailsToCollectionIfMissing<Type extends Pick<ICustomerDetails, 'id'>>(
    customerDetailsCollection: Type[],
    ...customerDetailsToCheck: (Type | null | undefined)[]
  ): Type[] {
    const customerDetails: Type[] = customerDetailsToCheck.filter(isPresent);
    if (customerDetails.length > 0) {
      const customerDetailsCollectionIdentifiers = customerDetailsCollection.map(
        customerDetailsItem => this.getCustomerDetailsIdentifier(customerDetailsItem)!
      );
      const customerDetailsToAdd = customerDetails.filter(customerDetailsItem => {
        const customerDetailsIdentifier = this.getCustomerDetailsIdentifier(customerDetailsItem);
        if (customerDetailsCollectionIdentifiers.includes(customerDetailsIdentifier)) {
          return false;
        }
        customerDetailsCollectionIdentifiers.push(customerDetailsIdentifier);
        return true;
      });
      return [...customerDetailsToAdd, ...customerDetailsCollection];
    }
    return customerDetailsCollection;
  }
}
