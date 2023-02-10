# Swagger\Client\CustomerDetailsResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomerDetails**](CustomerDetailsResourceApi.md#createcustomerdetails) | **POST** /api/customer-details | 
[**deleteCustomerDetails**](CustomerDetailsResourceApi.md#deletecustomerdetails) | **DELETE** /api/customer-details/{id} | 
[**getAllCustomerDetails**](CustomerDetailsResourceApi.md#getallcustomerdetails) | **GET** /api/customer-details | 
[**getCustomerDetails**](CustomerDetailsResourceApi.md#getcustomerdetails) | **GET** /api/customer-details/{id} | 
[**partialUpdateCustomerDetails**](CustomerDetailsResourceApi.md#partialupdatecustomerdetails) | **PATCH** /api/customer-details/{id} | 
[**updateCustomerDetails**](CustomerDetailsResourceApi.md#updatecustomerdetails) | **PUT** /api/customer-details/{id} | 

# **createCustomerDetails**
> \Swagger\Client\Model\CustomerDetailsDTO createCustomerDetails($body)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CustomerDetailsResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\CustomerDetailsDTO(); // \Swagger\Client\Model\CustomerDetailsDTO | 

try {
    $result = $apiInstance->createCustomerDetails($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomerDetailsResourceApi->createCustomerDetails: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\CustomerDetailsDTO**](../Model/CustomerDetailsDTO.md)|  |

### Return type

[**\Swagger\Client\Model\CustomerDetailsDTO**](../Model/CustomerDetailsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteCustomerDetails**
> deleteCustomerDetails($id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CustomerDetailsResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 789; // int | 

try {
    $apiInstance->deleteCustomerDetails($id);
} catch (Exception $e) {
    echo 'Exception when calling CustomerDetailsResourceApi->deleteCustomerDetails: ', $e->getMessage(), PHP_EOL;
}
?>
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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAllCustomerDetails**
> \Swagger\Client\Model\CustomerDetailsDTO[] getAllCustomerDetails($page, $size, $sort, $eagerload)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CustomerDetailsResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$page = 0; // int | Zero-based page index (0..N)
$size = 20; // int | The size of the page to be returned
$sort = array("sort_example"); // string[] | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
$eagerload = false; // bool | 

try {
    $result = $apiInstance->getAllCustomerDetails($page, $size, $sort, $eagerload);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomerDetailsResourceApi->getAllCustomerDetails: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Zero-based page index (0..N) | [optional] [default to 0]
 **size** | **int**| The size of the page to be returned | [optional] [default to 20]
 **sort** | [**string[]**](../Model/string.md)| Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional]
 **eagerload** | **bool**|  | [optional] [default to false]

### Return type

[**\Swagger\Client\Model\CustomerDetailsDTO[]**](../Model/CustomerDetailsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCustomerDetails**
> \Swagger\Client\Model\CustomerDetailsDTO getCustomerDetails($id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CustomerDetailsResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 789; // int | 

try {
    $result = $apiInstance->getCustomerDetails($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomerDetailsResourceApi->getCustomerDetails: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\CustomerDetailsDTO**](../Model/CustomerDetailsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **partialUpdateCustomerDetails**
> \Swagger\Client\Model\CustomerDetailsDTO partialUpdateCustomerDetails($body, $id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CustomerDetailsResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\CustomerDetailsDTO(); // \Swagger\Client\Model\CustomerDetailsDTO | 
$id = 789; // int | 

try {
    $result = $apiInstance->partialUpdateCustomerDetails($body, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomerDetailsResourceApi->partialUpdateCustomerDetails: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\CustomerDetailsDTO**](../Model/CustomerDetailsDTO.md)|  |
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\CustomerDetailsDTO**](../Model/CustomerDetailsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateCustomerDetails**
> \Swagger\Client\Model\CustomerDetailsDTO updateCustomerDetails($body, $id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CustomerDetailsResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\CustomerDetailsDTO(); // \Swagger\Client\Model\CustomerDetailsDTO | 
$id = 789; // int | 

try {
    $result = $apiInstance->updateCustomerDetails($body, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomerDetailsResourceApi->updateCustomerDetails: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\CustomerDetailsDTO**](../Model/CustomerDetailsDTO.md)|  |
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\CustomerDetailsDTO**](../Model/CustomerDetailsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

