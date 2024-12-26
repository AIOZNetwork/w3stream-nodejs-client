# WatermarkApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**upload()**](WatermarkApi.md#upload) | Create a new watermark | **POST** /watermarks |
| [**delete()**](WatermarkApi.md#delete) | Delete a watermark by ID | **DELETE** /watermarks/{id} |
| [**list()**](WatermarkApi.md#list) | List all watermarks | **GET** /watermarks |


<a name="upload"></a>
## **`upload()` - Create a new watermark**


Create a new watermark by uploading a JPG or a PNG image.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **file** | **string \| Readable \| Buffer**| **yes**| Watermark image file |


### Return type

Promise<[**CreateWatermarkResponse**](../model/CreateWatermarkResponse.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete a watermark by ID**


Delete a watermark.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Watermark ID |


### Return type

Promise<[**GetWebhooksListResponse**](../model/GetWebhooksListResponse.md)>.




---

<a name="list"></a>
## **`list()` - List all watermarks**


List all watermarks associated with your workspace.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **sortBy** | **&#39;created_at&#39; \| &#39;name&#39;**| no| sort by |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no| allowed: asc, desc. Default: asc |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. Default(0) |
 | **limit** | **number**| no| results per page. Allowed values 1-100, default is 25 |


### Return type

Promise<[**GetAllWatermarkResponse**](../model/GetAllWatermarkResponse.md)>.




---

