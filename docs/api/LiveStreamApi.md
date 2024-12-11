# LiveStreamApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**createLiveStreamKey()**](LiveStreamApi.md#createLiveStreamKey) | Create live stream key | **POST** /live_streams |
| [**createStreaming()**](LiveStreamApi.md#createStreaming) | Create a new live stream video | **POST** /live_streams/{id}/streamings |
| [**deleteLiveStreamKey()**](LiveStreamApi.md#deleteLiveStreamKey) | Delete live stream key | **DELETE** /live_streams/{id} |
| [**deleteLiveStreamVideo()**](LiveStreamApi.md#deleteLiveStreamVideo) | Delete live stream video | **DELETE** /live_streams/{id}/videos |
| [**getLiveStreamKey()**](LiveStreamApi.md#getLiveStreamKey) | Get live stream key | **GET** /live_streams/{id} |
| [**getLiveStreamKeys()**](LiveStreamApi.md#getLiveStreamKeys) | Get live stream key list | **GET** /live_streams |
| [**getLiveStreamPlayerInfo()**](LiveStreamApi.md#getLiveStreamPlayerInfo) | Get live stream video public | **GET** /live_streams/player/{id}/videos |
| [**getLiveStreamVideo()**](LiveStreamApi.md#getLiveStreamVideo) | Get live stream video | **GET** /live_streams/{id}/videos |
| [**getLiveStreamVideos()**](LiveStreamApi.md#getLiveStreamVideos) | Get live stream videos | **POST** /live_streams/{id}/videos |
| [**getStreaming()**](LiveStreamApi.md#getStreaming) | Get live stream video streaming | **GET** /live_streams/{id}/streamings/{stream_id} |
| [**getStreamings()**](LiveStreamApi.md#getStreamings) | Get live stream video streamings | **GET** /live_streams/{id}/streamings |
| [**updateLiveStreamKey()**](LiveStreamApi.md#updateLiveStreamKey) | Update live stream key | **PUT** /live_streams/{id} |


<a name="createLiveStreamKey"></a>
## **`createLiveStreamKey()` - Create live stream key**


Create live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **input** | [**CreateLiveStreamKeyRequest**](../model/CreateLiveStreamKeyRequest.md)| **yes**| CreateLiveStreamKeyRequest |


### Return type

Promise<[**CreateLiveStreamKeyResponse**](../model/CreateLiveStreamKeyResponse.md)>.




---

<a name="createStreaming"></a>
## **`createStreaming()` - Create a new live stream video**


Creates a new live stream video with the provided details

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |
 | **input** | [**CreateStreamingRequest**](../model/CreateStreamingRequest.md)| **yes**| CreateStreamingRequest |


### Return type

Promise<[**CreateStreamingResponse**](../model/CreateStreamingResponse.md)>.




---

<a name="deleteLiveStreamKey"></a>
## **`deleteLiveStreamKey()` - Delete live stream key**


Delete a live stream key by ID

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="deleteLiveStreamVideo"></a>
## **`deleteLiveStreamVideo()` - Delete live stream video**


Delete a live stream video by ID

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream video ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="getLiveStreamKey"></a>
## **`getLiveStreamKey()` - Get live stream key**


Get live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| ID |


### Return type

Promise<[**GetLiveStreamKeyResponse**](../model/GetLiveStreamKeyResponse.md)>.




---

<a name="getLiveStreamKeys"></a>
## **`getLiveStreamKeys()` - Get live stream key list**


Get live stream key list

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **search** | **string**| no| only support search by name |
 | **sortBy** | **&#39;created_at&#39; \| &#39;name&#39;**| no| sort by |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no| allowed: asc, desc. Default: asc |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. |
 | **limit** | **number**| no| results per page. |


### Return type

Promise<[**GetLiveStreamKeysListResponse**](../model/GetLiveStreamKeysListResponse.md)>.




---

<a name="getLiveStreamPlayerInfo"></a>
## **`getLiveStreamPlayerInfo()` - Get live stream video public**


Get live stream video public for a specific live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |


### Return type

Promise<[**GetLiveStreamVideoPublicResponse**](../model/GetLiveStreamVideoPublicResponse.md)>.




---

<a name="getLiveStreamVideo"></a>
## **`getLiveStreamVideo()` - Get live stream video**


Get a specific live stream video by ID

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream video ID |


### Return type

Promise<[**GetLiveStreamVideoResponse**](../model/GetLiveStreamVideoResponse.md)>.




---

<a name="getLiveStreamVideos"></a>
## **`getLiveStreamVideos()` - Get live stream videos**


Get live stream videos for a specific live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |
 | **data** | [**GetLiveStreamVideosRequest**](../model/GetLiveStreamVideosRequest.md)| **yes**| data |


### Return type

Promise<[**GetLiveStreamVideosResponse**](../model/GetLiveStreamVideosResponse.md)>.




---

<a name="getStreaming"></a>
## **`getStreaming()` - Get live stream video streaming**


Get live stream video streaming for a specific live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |
 | **streamId** | **string**| **yes**| Stream ID |


### Return type

Promise<[**GetStreamingResponse**](../model/GetStreamingResponse.md)>.




---

<a name="getStreamings"></a>
## **`getStreamings()` - Get live stream video streamings**


Get live stream video streamings for a specific live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |


### Return type

Promise<[**GetStreamingsResponse**](../model/GetStreamingsResponse.md)>.




---

<a name="updateLiveStreamKey"></a>
## **`updateLiveStreamKey()` - Update live stream key**


Update a live stream key by ID

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |
 | **input** | [**UpdateLiveStreamKeyRequest**](../model/UpdateLiveStreamKeyRequest.md)| **yes**| UpdateLiveStreamKeyRequest |


### Return type

Promise<[**UpdateLiveStreamKeyResponse**](../model/UpdateLiveStreamKeyResponse.md)>.




---

