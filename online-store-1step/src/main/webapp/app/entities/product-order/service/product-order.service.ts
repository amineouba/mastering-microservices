import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IProductOrder, NewProductOrder } from '../product-order.model';

export type PartialUpdateProductOrder = Partial<IProductOrder> & Pick<IProductOrder, 'id'>;

export type EntityResponseType = HttpResponse<IProductOrder>;
export type EntityArrayResponseType = HttpResponse<IProductOrder[]>;

@Injectable({ providedIn: 'root' })
export class ProductOrderService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/product-orders');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(productOrder: NewProductOrder): Observable<EntityResponseType> {
    return this.http.post<IProductOrder>(this.resourceUrl, productOrder, { observe: 'response' });
  }

  update(productOrder: IProductOrder): Observable<EntityResponseType> {
    return this.http.put<IProductOrder>(`${this.resourceUrl}/${this.getProductOrderIdentifier(productOrder)}`, productOrder, {
      observe: 'response',
    });
  }

  partialUpdate(productOrder: PartialUpdateProductOrder): Observable<EntityResponseType> {
    return this.http.patch<IProductOrder>(`${this.resourceUrl}/${this.getProductOrderIdentifier(productOrder)}`, productOrder, {
      observe: 'response',
    });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IProductOrder>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IProductOrder[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getProductOrderIdentifier(productOrder: Pick<IProductOrder, 'id'>): number {
    return productOrder.id;
  }

  compareProductOrder(o1: Pick<IProductOrder, 'id'> | null, o2: Pick<IProductOrder, 'id'> | null): boolean {
    return o1 && o2 ? this.getProductOrderIdentifier(o1) === this.getProductOrderIdentifier(o2) : o1 === o2;
  }

  addProductOrderToCollectionIfMissing<Type extends Pick<IProductOrder, 'id'>>(
    productOrderCollection: Type[],
    ...productOrdersToCheck: (Type | null | undefined)[]
  ): Type[] {
    const productOrders: Type[] = productOrdersToCheck.filter(isPresent);
    if (productOrders.length > 0) {
      const productOrderCollectionIdentifiers = productOrderCollection.map(
        productOrderItem => this.getProductOrderIdentifier(productOrderItem)!
      );
      const productOrdersToAdd = productOrders.filter(productOrderItem => {
        const productOrderIdentifier = this.getProductOrderIdentifier(productOrderItem);
        if (productOrderCollectionIdentifiers.includes(productOrderIdentifier)) {
          return false;
        }
        productOrderCollectionIdentifiers.push(productOrderIdentifier);
        return true;
      });
      return [...productOrdersToAdd, ...productOrderCollection];
    }
    return productOrderCollection;
  }
}
