# swagger_client.CustomerDetailsResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_customer_details**](CustomerDetailsResourceApi.md#create_customer_details) | **POST** /api/customer-details | 
[**delete_customer_details**](CustomerDetailsResourceApi.md#delete_customer_details) | **DELETE** /api/customer-details/{id} | 
[**get_all_customer_details**](CustomerDetailsResourceApi.md#get_all_customer_details) | **GET** /api/customer-details | 
[**get_customer_details**](CustomerDetailsResourceApi.md#get_customer_details) | **GET** /api/customer-details/{id} | 
[**partial_update_customer_details**](CustomerDetailsResourceApi.md#partial_update_customer_details) | **PATCH** /api/customer-details/{id} | 
[**update_customer_details**](CustomerDetailsResourceApi.md#update_customer_details) | **PUT** /api/customer-details/{id} | 

# **create_customer_details**
> CustomerDetailsDTO create_customer_details(body)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomerDetailsResourceApi()
body = swagger_client.CustomerDetailsDTO() # CustomerDetailsDTO | 

try:
    api_response = api_instance.create_customer_details(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomerDetailsResourceApi->create_customer_details: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerDetailsDTO**](CustomerDetailsDTO.md)|  | 

### Return type

[**CustomerDetailsDTO**](CustomerDetailsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_customer_details**
> delete_customer_details(id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomerDetailsResourceApi()
id = 789 # int | 

try:
    api_instance.delete_customer_details(id)
except ApiException as e:
    print("Exception when calling CustomerDetailsResourceApi->delete_customer_details: %s\n" % e)
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

# **get_all_customer_details**
> list[CustomerDetailsDTO] get_all_customer_details(page=page, size=size, sort=sort, eagerload=eagerload)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomerDetailsResourceApi()
page = 0 # int | Zero-based page index (0..N) (optional) (default to 0)
size = 20 # int | The size of the page to be returned (optional) (default to 20)
sort = ['sort_example'] # list[str] | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional)
eagerload = false # bool |  (optional) (default to false)

try:
    api_response = api_instance.get_all_customer_details(page=page, size=size, sort=sort, eagerload=eagerload)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomerDetailsResourceApi->get_all_customer_details: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Zero-based page index (0..N) | [optional] [default to 0]
 **size** | **int**| The size of the page to be returned | [optional] [default to 20]
 **sort** | [**list[str]**](str.md)| Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 
 **eagerload** | **bool**|  | [optional] [default to false]

### Return type

[**list[CustomerDetailsDTO]**](CustomerDetailsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_customer_details**
> CustomerDetailsDTO get_customer_details(id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomerDetailsResourceApi()
id = 789 # int | 

try:
    api_response = api_instance.get_customer_details(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomerDetailsResourceApi->get_customer_details: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**CustomerDetailsDTO**](CustomerDetailsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partial_update_customer_details**
> CustomerDetailsDTO partial_update_customer_details(body, id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomerDetailsResourceApi()
body = swagger_client.CustomerDetailsDTO() # CustomerDetailsDTO | 
id = 789 # int | 

try:
    api_response = api_instance.partial_update_customer_details(body, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomerDetailsResourceApi->partial_update_customer_details: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerDetailsDTO**](CustomerDetailsDTO.md)|  | 
 **id** | **int**|  | 

### Return type

[**CustomerDetailsDTO**](CustomerDetailsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_customer_details**
> CustomerDetailsDTO update_customer_details(body, id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CustomerDetailsResourceApi()
body = swagger_client.CustomerDetailsDTO() # CustomerDetailsDTO | 
id = 789 # int | 

try:
    api_response = api_instance.update_customer_details(body, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CustomerDetailsResourceApi->update_customer_details: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerDetailsDTO**](CustomerDetailsDTO.md)|  | 
 **id** | **int**|  | 

### Return type

[**CustomerDetailsDTO**](CustomerDetailsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

