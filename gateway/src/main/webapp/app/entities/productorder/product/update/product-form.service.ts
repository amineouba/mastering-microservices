import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IProduct, NewProduct } from '../product.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IProduct for edit and NewProductFormGroupInput for create.
 */
type ProductFormGroupInput = IProduct | PartialWithRequiredKeyOf<NewProduct>;

type ProductFormDefaults = Pick<NewProduct, 'id'>;

type ProductFormGroupContent = {
  id: FormControl<IProduct['id'] | NewProduct['id']>;
  sku: FormControl<IProduct['sku']>;
  upc: FormControl<IProduct['upc']>;
  name: FormControl<IProduct['name']>;
  description: FormControl<IProduct['description']>;
  price: FormControl<IProduct['price']>;
  productSize: FormControl<IProduct['productSize']>;
  colors: FormControl<IProduct['colors']>;
  image: FormControl<IProduct['image']>;
  imageContentType: FormControl<IProduct['imageContentType']>;
  imageSha1: FormControl<IProduct['imageSha1']>;
  imageCdnUrl: FormControl<IProduct['imageCdnUrl']>;
  thumbnailSha1: FormControl<IProduct['thumbnailSha1']>;
  thumbnailCdnUrl: FormControl<IProduct['thumbnailCdnUrl']>;
  productCategory: FormControl<IProduct['productCategory']>;
};

export type ProductFormGroup = FormGroup<ProductFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class ProductFormService {
  createProductFormGroup(product: ProductFormGroupInput = { id: null }): ProductFormGroup {
    const productRawValue = {
      ...this.getFormDefaults(),
      ...product,
    };
    return new FormGroup<ProductFormGroupContent>({
      id: new FormControl(
        { value: productRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      sku: new FormControl(productRawValue.sku, {
        validators: [Validators.required],
      }),
      upc: new FormControl(productRawValue.upc, {
        validators: [Validators.required],
      }),
      name: new FormControl(productRawValue.name, {
        validators: [Validators.required],
      }),
      description: new FormControl(productRawValue.description),
      price: new FormControl(productRawValue.price, {
        validators: [Validators.required, Validators.min(0)],
      }),
      productSize: new FormControl(productRawValue.productSize, {
        validators: [Validators.required],
      }),
      colors: new FormControl(productRawValue.colors, {
        validators: [Validators.pattern('^([a-z]+,)*[a-z]+$')],
      }),
      image: new FormControl(productRawValue.image),
      imageContentType: new FormControl(productRawValue.imageContentType),
      imageSha1: new FormControl(productRawValue.imageSha1, {
        validators: [Validators.minLength(40), Validators.maxLength(40), Validators.pattern('[a-f0-9]{40}')],
      }),
      imageCdnUrl: new FormControl(productRawValue.imageCdnUrl),
      thumbnailSha1: new FormControl(productRawValue.thumbnailSha1, {
        validators: [Validators.minLength(40), Validators.maxLength(40), Validators.pattern('[a-f0-9]{40}')],
      }),
      thumbnailCdnUrl: new FormControl(productRawValue.thumbnailCdnUrl),
      productCategory: new FormControl(productRawValue.productCategory),
    });
  }

  getProduct(form: ProductFormGroup): IProduct | NewProduct {
    return form.getRawValue() as IProduct | NewProduct;
  }

  resetForm(form: ProductFormGroup, product: ProductFormGroupInput): void {
    const productRawValue = { ...this.getFormDefaults(), ...product };
    form.reset(
      {
        ...productRawValue,
        id: { value: productRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): ProductFormDefaults {
    return {
      id: null,
    };
  }
}
