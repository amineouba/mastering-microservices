# swagger_client.ShoppingCartResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_shopping_cart**](ShoppingCartResourceApi.md#create_shopping_cart) | **POST** /api/shopping-carts | 
[**delete_shopping_cart**](ShoppingCartResourceApi.md#delete_shopping_cart) | **DELETE** /api/shopping-carts/{id} | 
[**get_all_shopping_carts**](ShoppingCartResourceApi.md#get_all_shopping_carts) | **GET** /api/shopping-carts | 
[**get_shopping_cart**](ShoppingCartResourceApi.md#get_shopping_cart) | **GET** /api/shopping-carts/{id} | 
[**partial_update_shopping_cart**](ShoppingCartResourceApi.md#partial_update_shopping_cart) | **PATCH** /api/shopping-carts/{id} | 
[**update_shopping_cart**](ShoppingCartResourceApi.md#update_shopping_cart) | **PUT** /api/shopping-carts/{id} | 

# **create_shopping_cart**
> ShoppingCartDTO create_shopping_cart(body)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ShoppingCartResourceApi()
body = swagger_client.ShoppingCartDTO() # ShoppingCartDTO | 

try:
    api_response = api_instance.create_shopping_cart(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ShoppingCartResourceApi->create_shopping_cart: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShoppingCartDTO**](ShoppingCartDTO.md)|  | 

### Return type

[**ShoppingCartDTO**](ShoppingCartDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_shopping_cart**
> delete_shopping_cart(id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ShoppingCartResourceApi()
id = 789 # int | 

try:
    api_instance.delete_shopping_cart(id)
except ApiException as e:
    print("Exception when calling ShoppingCartResourceApi->delete_shopping_cart: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_shopping_carts**
> list[ShoppingCartDTO] get_all_shopping_carts()



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ShoppingCartResourceApi()

try:
    api_response = api_instance.get_all_shopping_carts()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ShoppingCartResourceApi->get_all_shopping_carts: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[ShoppingCartDTO]**](ShoppingCartDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_shopping_cart**
> ShoppingCartDTO get_shopping_cart(id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ShoppingCartResourceApi()
id = 789 # int | 

try:
    api_response = api_instance.get_shopping_cart(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ShoppingCartResourceApi->get_shopping_cart: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**ShoppingCartDTO**](ShoppingCartDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partial_update_shopping_cart**
> ShoppingCartDTO partial_update_shopping_cart(body, id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ShoppingCartResourceApi()
body = swagger_client.ShoppingCartDTO() # ShoppingCartDTO | 
id = 789 # int | 

try:
    api_response = api_instance.partial_update_shopping_cart(body, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ShoppingCartResourceApi->partial_update_shopping_cart: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShoppingCartDTO**](ShoppingCartDTO.md)|  | 
 **id** | **int**|  | 

### Return type

[**ShoppingCartDTO**](ShoppingCartDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_shopping_cart**
> ShoppingCartDTO update_shopping_cart(body, id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ShoppingCartResourceApi()
body = swagger_client.ShoppingCartDTO() # ShoppingCartDTO | 
id = 789 # int | 

try:
    api_response = api_instance.update_shopping_cart(body, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ShoppingCartResourceApi->update_shopping_cart: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShoppingCartDTO**](ShoppingCartDTO.md)|  | 
 **id** | **int**|  | 

### Return type

[**ShoppingCartDTO**](ShoppingCartDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

