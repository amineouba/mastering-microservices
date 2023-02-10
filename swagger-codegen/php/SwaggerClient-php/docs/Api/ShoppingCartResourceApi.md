# Swagger\Client\ShoppingCartResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createShoppingCart**](ShoppingCartResourceApi.md#createshoppingcart) | **POST** /api/shopping-carts | 
[**deleteShoppingCart**](ShoppingCartResourceApi.md#deleteshoppingcart) | **DELETE** /api/shopping-carts/{id} | 
[**getAllShoppingCarts**](ShoppingCartResourceApi.md#getallshoppingcarts) | **GET** /api/shopping-carts | 
[**getShoppingCart**](ShoppingCartResourceApi.md#getshoppingcart) | **GET** /api/shopping-carts/{id} | 
[**partialUpdateShoppingCart**](ShoppingCartResourceApi.md#partialupdateshoppingcart) | **PATCH** /api/shopping-carts/{id} | 
[**updateShoppingCart**](ShoppingCartResourceApi.md#updateshoppingcart) | **PUT** /api/shopping-carts/{id} | 

# **createShoppingCart**
> \Swagger\Client\Model\ShoppingCartDTO createShoppingCart($body)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ShoppingCartResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ShoppingCartDTO(); // \Swagger\Client\Model\ShoppingCartDTO | 

try {
    $result = $apiInstance->createShoppingCart($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShoppingCartResourceApi->createShoppingCart: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ShoppingCartDTO**](../Model/ShoppingCartDTO.md)|  |

### Return type

[**\Swagger\Client\Model\ShoppingCartDTO**](../Model/ShoppingCartDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteShoppingCart**
> deleteShoppingCart($id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ShoppingCartResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 789; // int | 

try {
    $apiInstance->deleteShoppingCart($id);
} catch (Exception $e) {
    echo 'Exception when calling ShoppingCartResourceApi->deleteShoppingCart: ', $e->getMessage(), PHP_EOL;
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

# **getAllShoppingCarts**
> \Swagger\Client\Model\ShoppingCartDTO[] getAllShoppingCarts()



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ShoppingCartResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getAllShoppingCarts();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShoppingCartResourceApi->getAllShoppingCarts: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\ShoppingCartDTO[]**](../Model/ShoppingCartDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getShoppingCart**
> \Swagger\Client\Model\ShoppingCartDTO getShoppingCart($id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ShoppingCartResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 789; // int | 

try {
    $result = $apiInstance->getShoppingCart($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShoppingCartResourceApi->getShoppingCart: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\ShoppingCartDTO**](../Model/ShoppingCartDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **partialUpdateShoppingCart**
> \Swagger\Client\Model\ShoppingCartDTO partialUpdateShoppingCart($body, $id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ShoppingCartResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ShoppingCartDTO(); // \Swagger\Client\Model\ShoppingCartDTO | 
$id = 789; // int | 

try {
    $result = $apiInstance->partialUpdateShoppingCart($body, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShoppingCartResourceApi->partialUpdateShoppingCart: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ShoppingCartDTO**](../Model/ShoppingCartDTO.md)|  |
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\ShoppingCartDTO**](../Model/ShoppingCartDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateShoppingCart**
> \Swagger\Client\Model\ShoppingCartDTO updateShoppingCart($body, $id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ShoppingCartResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ShoppingCartDTO(); // \Swagger\Client\Model\ShoppingCartDTO | 
$id = 789; // int | 

try {
    $result = $apiInstance->updateShoppingCart($body, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShoppingCartResourceApi->updateShoppingCart: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ShoppingCartDTO**](../Model/ShoppingCartDTO.md)|  |
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\ShoppingCartDTO**](../Model/ShoppingCartDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

