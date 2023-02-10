# Swagger\Client\ProductCategoryResourceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductCategory**](ProductCategoryResourceApi.md#createproductcategory) | **POST** /api/product-categories | 
[**deleteProductCategory**](ProductCategoryResourceApi.md#deleteproductcategory) | **DELETE** /api/product-categories/{id} | 
[**getAllProductCategories**](ProductCategoryResourceApi.md#getallproductcategories) | **GET** /api/product-categories | 
[**getProductCategory**](ProductCategoryResourceApi.md#getproductcategory) | **GET** /api/product-categories/{id} | 
[**partialUpdateProductCategory**](ProductCategoryResourceApi.md#partialupdateproductcategory) | **PATCH** /api/product-categories/{id} | 
[**updateProductCategory**](ProductCategoryResourceApi.md#updateproductcategory) | **PUT** /api/product-categories/{id} | 

# **createProductCategory**
> \Swagger\Client\Model\ProductCategoryDTO createProductCategory($body)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductCategoryResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ProductCategoryDTO(); // \Swagger\Client\Model\ProductCategoryDTO | 

try {
    $result = $apiInstance->createProductCategory($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductCategoryResourceApi->createProductCategory: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ProductCategoryDTO**](../Model/ProductCategoryDTO.md)|  |

### Return type

[**\Swagger\Client\Model\ProductCategoryDTO**](../Model/ProductCategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteProductCategory**
> deleteProductCategory($id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductCategoryResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 789; // int | 

try {
    $apiInstance->deleteProductCategory($id);
} catch (Exception $e) {
    echo 'Exception when calling ProductCategoryResourceApi->deleteProductCategory: ', $e->getMessage(), PHP_EOL;
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

# **getAllProductCategories**
> \Swagger\Client\Model\ProductCategoryDTO[] getAllProductCategories($page, $size, $sort)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductCategoryResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$page = 0; // int | Zero-based page index (0..N)
$size = 20; // int | The size of the page to be returned
$sort = array("sort_example"); // string[] | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.

try {
    $result = $apiInstance->getAllProductCategories($page, $size, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductCategoryResourceApi->getAllProductCategories: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Zero-based page index (0..N) | [optional] [default to 0]
 **size** | **int**| The size of the page to be returned | [optional] [default to 20]
 **sort** | [**string[]**](../Model/string.md)| Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional]

### Return type

[**\Swagger\Client\Model\ProductCategoryDTO[]**](../Model/ProductCategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProductCategory**
> \Swagger\Client\Model\ProductCategoryDTO getProductCategory($id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductCategoryResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 789; // int | 

try {
    $result = $apiInstance->getProductCategory($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductCategoryResourceApi->getProductCategory: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\ProductCategoryDTO**](../Model/ProductCategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **partialUpdateProductCategory**
> \Swagger\Client\Model\ProductCategoryDTO partialUpdateProductCategory($body, $id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductCategoryResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ProductCategoryDTO(); // \Swagger\Client\Model\ProductCategoryDTO | 
$id = 789; // int | 

try {
    $result = $apiInstance->partialUpdateProductCategory($body, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductCategoryResourceApi->partialUpdateProductCategory: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ProductCategoryDTO**](../Model/ProductCategoryDTO.md)|  |
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\ProductCategoryDTO**](../Model/ProductCategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/merge-patch+json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateProductCategory**
> \Swagger\Client\Model\ProductCategoryDTO updateProductCategory($body, $id)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProductCategoryResourceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ProductCategoryDTO(); // \Swagger\Client\Model\ProductCategoryDTO | 
$id = 789; // int | 

try {
    $result = $apiInstance->updateProductCategory($body, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductCategoryResourceApi->updateProductCategory: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ProductCategoryDTO**](../Model/ProductCategoryDTO.md)|  |
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\ProductCategoryDTO**](../Model/ProductCategoryDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

