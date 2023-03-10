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
	"fmt"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

func NewRouter() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		var handler http.Handler
		handler = route.HandlerFunc
		handler = Logger(handler, route.Name)

		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(handler)
	}

	return router
}

func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World!")
}

var routes = Routes{
	Route{
		"Index",
		"GET",
		"/",
		Index,
	},

	Route{
		"ActivateAccount",
		strings.ToUpper("Get"),
		"/api/activate",
		ActivateAccount,
	},

	Route{
		"ChangePassword",
		strings.ToUpper("Post"),
		"/api/account/change-password",
		ChangePassword,
	},

	Route{
		"FinishPasswordReset",
		strings.ToUpper("Post"),
		"/api/account/reset-password/finish",
		FinishPasswordReset,
	},

	Route{
		"GetAccount",
		strings.ToUpper("Get"),
		"/api/account",
		GetAccount,
	},

	Route{
		"IsAuthenticated",
		strings.ToUpper("Get"),
		"/api/authenticate",
		IsAuthenticated,
	},

	Route{
		"RegisterAccount",
		strings.ToUpper("Post"),
		"/api/register",
		RegisterAccount,
	},

	Route{
		"RequestPasswordReset",
		strings.ToUpper("Post"),
		"/api/account/reset-password/init",
		RequestPasswordReset,
	},

	Route{
		"SaveAccount",
		strings.ToUpper("Post"),
		"/api/account",
		SaveAccount,
	},

	Route{
		"CreateCustomerDetails",
		strings.ToUpper("Post"),
		"/api/customer-details",
		CreateCustomerDetails,
	},

	Route{
		"DeleteCustomerDetails",
		strings.ToUpper("Delete"),
		"/api/customer-details/{id}",
		DeleteCustomerDetails,
	},

	Route{
		"GetAllCustomerDetails",
		strings.ToUpper("Get"),
		"/api/customer-details",
		GetAllCustomerDetails,
	},

	Route{
		"GetCustomerDetails",
		strings.ToUpper("Get"),
		"/api/customer-details/{id}",
		GetCustomerDetails,
	},

	Route{
		"PartialUpdateCustomerDetails",
		strings.ToUpper("Patch"),
		"/api/customer-details/{id}",
		PartialUpdateCustomerDetails,
	},

	Route{
		"UpdateCustomerDetails",
		strings.ToUpper("Put"),
		"/api/customer-details/{id}",
		UpdateCustomerDetails,
	},

	Route{
		"CreateProductCategory",
		strings.ToUpper("Post"),
		"/api/product-categories",
		CreateProductCategory,
	},

	Route{
		"DeleteProductCategory",
		strings.ToUpper("Delete"),
		"/api/product-categories/{id}",
		DeleteProductCategory,
	},

	Route{
		"GetAllProductCategories",
		strings.ToUpper("Get"),
		"/api/product-categories",
		GetAllProductCategories,
	},

	Route{
		"GetProductCategory",
		strings.ToUpper("Get"),
		"/api/product-categories/{id}",
		GetProductCategory,
	},

	Route{
		"PartialUpdateProductCategory",
		strings.ToUpper("Patch"),
		"/api/product-categories/{id}",
		PartialUpdateProductCategory,
	},

	Route{
		"UpdateProductCategory",
		strings.ToUpper("Put"),
		"/api/product-categories/{id}",
		UpdateProductCategory,
	},

	Route{
		"CreateProductOrder",
		strings.ToUpper("Post"),
		"/api/product-orders",
		CreateProductOrder,
	},

	Route{
		"DeleteProductOrder",
		strings.ToUpper("Delete"),
		"/api/product-orders/{id}",
		DeleteProductOrder,
	},

	Route{
		"GetAllProductOrders",
		strings.ToUpper("Get"),
		"/api/product-orders",
		GetAllProductOrders,
	},

	Route{
		"GetProductOrder",
		strings.ToUpper("Get"),
		"/api/product-orders/{id}",
		GetProductOrder,
	},

	Route{
		"PartialUpdateProductOrder",
		strings.ToUpper("Patch"),
		"/api/product-orders/{id}",
		PartialUpdateProductOrder,
	},

	Route{
		"UpdateProductOrder",
		strings.ToUpper("Put"),
		"/api/product-orders/{id}",
		UpdateProductOrder,
	},

	Route{
		"CreateProduct",
		strings.ToUpper("Post"),
		"/api/products",
		CreateProduct,
	},

	Route{
		"DeleteProduct",
		strings.ToUpper("Delete"),
		"/api/products/{id}",
		DeleteProduct,
	},

	Route{
		"GetAllProducts",
		strings.ToUpper("Get"),
		"/api/products",
		GetAllProducts,
	},

	Route{
		"GetProduct",
		strings.ToUpper("Get"),
		"/api/products/{id}",
		GetProduct,
	},

	Route{
		"PartialUpdateProduct",
		strings.ToUpper("Patch"),
		"/api/products/{id}",
		PartialUpdateProduct,
	},

	Route{
		"UpdateProduct",
		strings.ToUpper("Put"),
		"/api/products/{id}",
		UpdateProduct,
	},

	Route{
		"GetAllPublicUsers",
		strings.ToUpper("Get"),
		"/api/users",
		GetAllPublicUsers,
	},

	Route{
		"GetAuthorities",
		strings.ToUpper("Get"),
		"/api/authorities",
		GetAuthorities,
	},

	Route{
		"CreateShoppingCart",
		strings.ToUpper("Post"),
		"/api/shopping-carts",
		CreateShoppingCart,
	},

	Route{
		"DeleteShoppingCart",
		strings.ToUpper("Delete"),
		"/api/shopping-carts/{id}",
		DeleteShoppingCart,
	},

	Route{
		"GetAllShoppingCarts",
		strings.ToUpper("Get"),
		"/api/shopping-carts",
		GetAllShoppingCarts,
	},

	Route{
		"GetShoppingCart",
		strings.ToUpper("Get"),
		"/api/shopping-carts/{id}",
		GetShoppingCart,
	},

	Route{
		"PartialUpdateShoppingCart",
		strings.ToUpper("Patch"),
		"/api/shopping-carts/{id}",
		PartialUpdateShoppingCart,
	},

	Route{
		"UpdateShoppingCart",
		strings.ToUpper("Put"),
		"/api/shopping-carts/{id}",
		UpdateShoppingCart,
	},

	Route{
		"Authorize",
		strings.ToUpper("Post"),
		"/api/authenticate",
		Authorize,
	},

	Route{
		"CreateUser",
		strings.ToUpper("Post"),
		"/api/admin/users",
		CreateUser,
	},

	Route{
		"DeleteUser",
		strings.ToUpper("Delete"),
		"/api/admin/users/{login}",
		DeleteUser,
	},

	Route{
		"GetAllUsers",
		strings.ToUpper("Get"),
		"/api/admin/users",
		GetAllUsers,
	},

	Route{
		"GetUser",
		strings.ToUpper("Get"),
		"/api/admin/users/{login}",
		GetUser,
	},

	Route{
		"UpdateUser",
		strings.ToUpper("Put"),
		"/api/admin/users",
		UpdateUser,
	},
}
