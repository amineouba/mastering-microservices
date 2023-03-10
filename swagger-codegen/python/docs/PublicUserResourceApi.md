# swagger_client.PublicUserResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_all_public_users**](PublicUserResourceApi.md#get_all_public_users) | **GET** /api/users | 
[**get_authorities**](PublicUserResourceApi.md#get_authorities) | **GET** /api/authorities | 

# **get_all_public_users**
> list[UserDTO] get_all_public_users(page=page, size=size, sort=sort)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PublicUserResourceApi()
page = 0 # int | Zero-based page index (0..N) (optional) (default to 0)
size = 20 # int | The size of the page to be returned (optional) (default to 20)
sort = ['sort_example'] # list[str] | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional)

try:
    api_response = api_instance.get_all_public_users(page=page, size=size, sort=sort)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PublicUserResourceApi->get_all_public_users: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Zero-based page index (0..N) | [optional] [default to 0]
 **size** | **int**| The size of the page to be returned | [optional] [default to 20]
 **sort** | [**list[str]**](str.md)| Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 

### Return type

[**list[UserDTO]**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_authorities**
> list[str] get_authorities()



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PublicUserResourceApi()

try:
    api_response = api_instance.get_authorities()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PublicUserResourceApi->get_authorities: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**list[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

