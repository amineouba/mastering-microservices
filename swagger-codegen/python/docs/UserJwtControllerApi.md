# swagger_client.UserJwtControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize**](UserJwtControllerApi.md#authorize) | **POST** /api/authenticate | 

# **authorize**
> JWTToken authorize(body)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.UserJwtControllerApi()
body = swagger_client.LoginVM() # LoginVM | 

try:
    api_response = api_instance.authorize(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserJwtControllerApi->authorize: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginVM**](LoginVM.md)|  | 

### Return type

[**JWTToken**](JWTToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

