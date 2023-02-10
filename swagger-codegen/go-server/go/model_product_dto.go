/*
 * Store API
 *
 * Store API documentation
 *
 * API version: 0.0.1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

// Product sold by the Online store
type ProductDto struct {

	Id int64 `json:"id,omitempty"`

	Sku string `json:"sku"`

	Upc string `json:"upc"`

	Ean string `json:"ean"`

	Name string `json:"name"`

	Description string `json:"description,omitempty"`

	Price float64 `json:"price"`

	ProductSize string `json:"productSize"`

	Colors string `json:"colors,omitempty"`

	Image []string `json:"image,omitempty"`

	ImageContentType string `json:"imageContentType,omitempty"`

	ImageSha1 string `json:"imageSha1,omitempty"`

	ImageCdnUrl string `json:"imageCdnUrl,omitempty"`

	ThumbnailSha1 string `json:"thumbnailSha1,omitempty"`

	ThumbnailCdnUrl string `json:"thumbnailCdnUrl,omitempty"`

	ProductCategory *ProductCategoryDto `json:"productCategory,omitempty"`
}
