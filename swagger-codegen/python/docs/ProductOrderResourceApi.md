# swagger_client.ProductOrderResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_product_order**](ProductOrderResourceApi.md#create_product_order) | **POST** /api/product-orders | 
[**delete_product_order**](ProductOrderResourceApi.md#delete_product_order) | **DELETE** /api/product-orders/{id} | 
[**get_all_product_orders**](ProductOrderResourceApi.md#get_all_product_orders) | **GET** /api/product-orders | 
[**get_product_order**](ProductOrderResourceApi.md#get_product_order) | **GET** /api/product-orders/{id} | 
[**partial_update_product_order**](ProductOrderResourceApi.md#partial_update_product_order) | **PATCH** /api/product-orders/{id} | 
[**update_product_order**](ProductOrderResourceApi.md#update_product_order) | **PUT** /api/product-orders/{id} | 

# **create_product_order**
> ProductOrderDTO create_product_order(body)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductOrderResourceApi()
body = swagger_client.ProductOrderDTO() # ProductOrderDTO | 

try:
    api_response = api_instance.create_product_order(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProductOrderResourceApi->create_product_order: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductOrderDTO**](ProductOrderDTO.md)|  | 

### Return type

[**ProductOrderDTO**](ProductOrderDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_product_order**
> delete_product_order(id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductOrderResourceApi()
id = 789 # int | 

try:
    api_instance.delete_product_order(id)
except ApiException as e:
    print("Exception when calling ProductOrderResourceApi->delete_product_order: %s\n" % e)
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

# **get_all_product_orders**
> list[ProductOrderDTO] get_all_product_orders(eagerload=eagerload)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductOrderResourceApi()
eagerload = false # bool |  (optional) (default to false)

try:
    api_response = api_instance.get_all_product_orders(eagerload=eagerload)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProductOrderResourceApi->get_all_product_orders: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eagerload** | **bool**|  | [optional] [default to false]

### Return type

[**list[ProductOrderDTO]**](ProductOrderDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_product_order**
> ProductOrderDTO get_product_order(id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductOrderResourceApi()
id = 789 # int | 

try:
    api_response = api_instance.get_product_order(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProductOrderResourceApi->get_product_order: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**ProductOrderDTO**](ProductOrderDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partial_update_product_order**
> ProductOrderDTO partial_update_product_order(body, id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductOrderResourceApi()
body = swagger_client.ProductOrderDTO() # ProductOrderDTO | 
id = 789 # int | 

try:
    api_response = api_instance.partial_update_product_order(body, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProductOrderResourceApi->partial_update_product_order: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductOrderDTO**](ProductOrderDTO.md)|  | 
 **id** | **int**|  | 

### Return type

[**ProductOrderDTO**](ProductOrderDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_product_order**
> ProductOrderDTO update_product_order(body, id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductOrderResourceApi()
body = swagger_client.ProductOrderDTO() # ProductOrderDTO | 
id = 789 # int | 

try:
    api_response = api_instance.update_product_order(body, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProductOrderResourceApi->update_product_order: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductOrderDTO**](ProductOrderDTO.md)|  | 
 **id** | **int**|  | 

### Return type

[**ProductOrderDTO**](ProductOrderDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

