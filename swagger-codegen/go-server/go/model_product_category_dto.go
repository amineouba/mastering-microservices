/*
 * Store API
 *
 * Store API documentation
 *
 * API version: 0.0.1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

type ProductCategoryDto struct {

	Id int64 `json:"id,omitempty"`

	Name string `json:"name"`

	Description string `json:"description,omitempty"`
}
