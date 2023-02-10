# swagger_client.ProductCategoryResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_product_category**](ProductCategoryResourceApi.md#create_product_category) | **POST** /api/product-categories | 
[**delete_product_category**](ProductCategoryResourceApi.md#delete_product_category) | **DELETE** /api/product-categories/{id} | 
[**get_all_product_categories**](ProductCategoryResourceApi.md#get_all_product_categories) | **GET** /api/product-categories | 
[**get_product_category**](ProductCategoryResourceApi.md#get_product_category) | **GET** /api/product-categories/{id} | 
[**partial_update_product_category**](ProductCategoryResourceApi.md#partial_update_product_category) | **PATCH** /api/product-categories/{id} | 
[**update_product_category**](ProductCategoryResourceApi.md#update_product_category) | **PUT** /api/product-categories/{id} | 

# **create_product_category**
> ProductCategoryDTO create_product_category(body)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductCategoryResourceApi()
body = swagger_client.ProductCategoryDTO() # ProductCategoryDTO | 

try:
    api_response = api_instance.create_product_category(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProductCategoryResourceApi->create_product_category: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductCategoryDTO**](ProductCategoryDTO.md)|  | 

### Return type

[**ProductCategoryDTO**](ProductCategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_product_category**
> delete_product_category(id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductCategoryResourceApi()
id = 789 # int | 

try:
    api_instance.delete_product_category(id)
except ApiException as e:
    print("Exception when calling ProductCategoryResourceApi->delete_product_category: %s\n" % e)
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

# **get_all_product_categories**
> list[ProductCategoryDTO] get_all_product_categories(page=page, size=size, sort=sort)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductCategoryResourceApi()
page = 0 # int | Zero-based page index (0..N) (optional) (default to 0)
size = 20 # int | The size of the page to be returned (optional) (default to 20)
sort = ['sort_example'] # list[str] | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional)

try:
    api_response = api_instance.get_all_product_categories(page=page, size=size, sort=sort)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProductCategoryResourceApi->get_all_product_categories: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Zero-based page index (0..N) | [optional] [default to 0]
 **size** | **int**| The size of the page to be returned | [optional] [default to 20]
 **sort** | [**list[str]**](str.md)| Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 

### Return type

[**list[ProductCategoryDTO]**](ProductCategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_product_category**
> ProductCategoryDTO get_product_category(id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductCategoryResourceApi()
id = 789 # int | 

try:
    api_response = api_instance.get_product_category(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProductCategoryResourceApi->get_product_category: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**ProductCategoryDTO**](ProductCategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partial_update_product_category**
> ProductCategoryDTO partial_update_product_category(body, id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductCategoryResourceApi()
body = swagger_client.ProductCategoryDTO() # ProductCategoryDTO | 
id = 789 # int | 

try:
    api_response = api_instance.partial_update_product_category(body, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProductCategoryResourceApi->partial_update_product_category: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductCategoryDTO**](ProductCategoryDTO.md)|  | 
 **id** | **int**|  | 

### Return type

[**ProductCategoryDTO**](ProductCategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_product_category**
> ProductCategoryDTO update_product_category(body, id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProductCategoryResourceApi()
body = swagger_client.ProductCategoryDTO() # ProductCategoryDTO | 
id = 789 # int | 

try:
    api_response = api_instance.update_product_category(body, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProductCategoryResourceApi->update_product_category: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductCategoryDTO**](ProductCategoryDTO.md)|  | 
 **id** | **int**|  | 

### Return type

[**ProductCategoryDTO**](ProductCategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

