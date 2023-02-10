/*
 * Store API
 *
 * Store API documentation
 *
 * API version: 0.0.1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger
import (
	"time"
)

type ShoppingCartDto struct {

	Id int64 `json:"id,omitempty"`

	PlacedDate time.Time `json:"placedDate"`

	Status string `json:"status"`

	TotalPrice float64 `json:"totalPrice"`

	PaymentMethod string `json:"paymentMethod"`

	PaymentReference string `json:"paymentReference,omitempty"`

	CustomerDetails *CustomerDetailsDto `json:"customerDetails,omitempty"`
}
