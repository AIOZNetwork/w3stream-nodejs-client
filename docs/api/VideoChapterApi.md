# VideoChapterApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](VideoChapterApi.md#create) | Create a video chapter | **POST** /videos/{id}/chapters/{lan} |
| [**get()**](VideoChapterApi.md#get) | Get video chapters | **GET** /videos/{id}/chapters |
| [**delete()**](VideoChapterApi.md#delete) | Delete a video chapter | **DELETE** /videos/{id}/chapters/{lan} |


<a name="create"></a>
## **`create()` - Create a video chapter**


Create a VTT file to add chapters to your video. Chapters help break the video into sections.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Video ID |
 | **lan** | **string**| **yes**| Language |
 | **file** | **string \| Readable \| Buffer**| **yes**| VTT File |


### Return type

Promise<[**CreateVideoChapterResponse**](../model/CreateVideoChapterResponse.md)>.




---

<a name="get"></a>
## **`get()` - Get video chapters**


Get a chapter for by video id in a specific language.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Video ID |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. Default(0) |
 | **limit** | **number**| no| results per page. Allowed values 1-100, default is 25 |


### Return type

Promise<[**GetVideoChaptersResponse**](../model/GetVideoChaptersResponse.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete a video chapter**


Delete a chapter in a specific language by providing the video ID for the video you want to delete the chapter from and the language the chapter is in.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Video ID |
 | **lan** | **string**| **yes**| Language |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

