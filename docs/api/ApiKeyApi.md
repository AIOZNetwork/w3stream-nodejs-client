# ApiKeyApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](ApiKeyApi.md#create) | Create API key | **POST** /api_keys |
| [**update()**](ApiKeyApi.md#update) | Rename API key | **PATCH** /api_keys/{id} |
| [**delete()**](ApiKeyApi.md#delete) | Delete API key | **DELETE** /api_keys/{id} |
| [**list()**](ApiKeyApi.md#list) | Get list API keys | **GET** /api_keys |


<a name="create"></a>
## **`create()` - Create API key**


This endpoint enables you to create a new API key for a specific project.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **request** | [**CreateApiKeyRequest**](../model/CreateApiKeyRequest.md)| **yes**| api key&#39;s data |


### Return type

Promise<[**CreateApiKeyResponse**](../model/CreateApiKeyResponse.md)>.




---

<a name="update"></a>
## **`update()` - Rename API key**


This endpoint enables you to rename an API key from a specific project.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| api key id |
 | **request** | [**RenameAPIKeyRequest**](../model/RenameAPIKeyRequest.md)| **yes**| new api key name |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete API key**


This endpoint enables you to delete an API key from a specific project.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| API key&#39;s ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="list"></a>
## **`list()` - Get list API keys**


Retrieve a list of all API keys for the current workspace.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **search** | **string**| no| only support search by name |
 | **sortBy** | **&#39;created_at&#39; \| &#39;name&#39;**| no| sort by |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no| allowed: asc, desc. Default: asc |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. Default(0) |
 | **limit** | **number**| no| results per page. Allowed values 1-100, default is 25 |


### Return type

Promise<[**GetApiKeysResponse**](../model/GetApiKeysResponse.md)>.




---

