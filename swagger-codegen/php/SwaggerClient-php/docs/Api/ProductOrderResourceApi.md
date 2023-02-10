# Swagger\Client\ProductOrderResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductOrder**](ProductOrderResourceApi.md#createproductorder) | **POST** /api/product-orders | 
[**deleteProductOrder**](ProductOrderResourceApi.md#deleteproductorder) | **DELETE** /api/product-orders/{id} | 
[**getAllProductOrders**](ProductOrderResourceApi.md#getallproductorders) | **GET** /api/product-orders | 
[**getProductOrder**](ProductOrderResourceApi.md#getproductorder) | **GET** /api/product-orders/{id} | 
[**partialUpdateProductOrder**](ProductOrderResourceApi.md#partialupdateproductorder) | **PATCH** /api/product-orders/{id} | 
[**updateProductOrder**](ProductOrderResourceApi.md#updateproductorder) | **PUT** /api/product-orders/{id} | 

# **createProductOrder**
> \Swagger\Client\Model\ProductOrderDTO createProductOrder($body)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductOrderResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ProductOrderDTO(); // \Swagger\Client\Model\ProductOrderDTO | 

try {
    $result = $apiInstance->createProductOrder($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductOrderResourceApi->createProductOrder: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ProductOrderDTO**](../Model/ProductOrderDTO.md)|  |

### Return type

[**\Swagger\Client\Model\ProductOrderDTO**](../Model/ProductOrderDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteProductOrder**
> deleteProductOrder($id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductOrderResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 789; // int | 

try {
    $apiInstance->deleteProductOrder($id);
} catch (Exception $e) {
    echo 'Exception when calling ProductOrderResourceApi->deleteProductOrder: ', $e->getMessage(), PHP_EOL;
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

# **getAllProductOrders**
> \Swagger\Client\Model\ProductOrderDTO[] getAllProductOrders($eagerload)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductOrderResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$eagerload = false; // bool | 

try {
    $result = $apiInstance->getAllProductOrders($eagerload);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductOrderResourceApi->getAllProductOrders: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eagerload** | **bool**|  | [optional] [default to false]

### Return type

[**\Swagger\Client\Model\ProductOrderDTO[]**](../Model/ProductOrderDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProductOrder**
> \Swagger\Client\Model\ProductOrderDTO getProductOrder($id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductOrderResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 789; // int | 

try {
    $result = $apiInstance->getProductOrder($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductOrderResourceApi->getProductOrder: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\ProductOrderDTO**](../Model/ProductOrderDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **partialUpdateProductOrder**
> \Swagger\Client\Model\ProductOrderDTO partialUpdateProductOrder($body, $id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductOrderResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ProductOrderDTO(); // \Swagger\Client\Model\ProductOrderDTO | 
$id = 789; // int | 

try {
    $result = $apiInstance->partialUpdateProductOrder($body, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductOrderResourceApi->partialUpdateProductOrder: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ProductOrderDTO**](../Model/ProductOrderDTO.md)|  |
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\ProductOrderDTO**](../Model/ProductOrderDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateProductOrder**
> \Swagger\Client\Model\ProductOrderDTO updateProductOrder($body, $id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductOrderResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ProductOrderDTO(); // \Swagger\Client\Model\ProductOrderDTO | 
$id = 789; // int | 

try {
    $result = $apiInstance->updateProductOrder($body, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductOrderResourceApi->updateProductOrder: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ProductOrderDTO**](../Model/ProductOrderDTO.md)|  |
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\ProductOrderDTO**](../Model/ProductOrderDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

