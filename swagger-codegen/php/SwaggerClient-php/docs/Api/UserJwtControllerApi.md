# Swagger\Client\UserJwtControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize**](UserJwtControllerApi.md#authorize) | **POST** /api/authenticate | 

# **authorize**
> \Swagger\Client\Model\JWTToken authorize($body)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserJwtControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\LoginVM(); // \Swagger\Client\Model\LoginVM | 

try {
    $result = $apiInstance->authorize($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserJwtControllerApi->authorize: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\LoginVM**](../Model/LoginVM.md)|  |

### Return type

[**\Swagger\Client\Model\JWTToken**](../Model/JWTToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

