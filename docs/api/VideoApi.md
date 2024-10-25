# VideoApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](VideoApi.md#create) | Create video object | **POST** /videos/create |
| [**update()**](VideoApi.md#update) | update video info | **PATCH** /videos/{id} |
| [**delete()**](VideoApi.md#delete) | Delete video | **DELETE** /videos/{id} |
| [**uploadThumbnail()**](VideoApi.md#uploadThumbnail) | Upload video thumbnail | **POST** /videos/{id}/thumbnail |
| [**createCaption()**](VideoApi.md#createCaption) | Create a new video caption | **POST** /videos/{id}/captions/{lan} |
| [**deleteCaption()**](VideoApi.md#deleteCaption) | Delete a video caption | **DELETE** /videos/{id}/captions/{lan} |
| [**getCaptions()**](VideoApi.md#getCaptions) | Get video captions | **GET** /videos/{id}/captions |
| [**getCost()**](VideoApi.md#getCost) | get video transcoding cost | **GET** /videos/cost |
| [**getDetail()**](VideoApi.md#getDetail) | get video detail | **GET** /videos/{id} |
| [**getVideoList()**](VideoApi.md#getVideoList) | Get user videos list | **POST** /videos |
| [**getVideoPlayerInfo()**](VideoApi.md#getVideoPlayerInfo) | Get video player info | **GET** /videos/{id}/player.json |
| [**setCaption()**](VideoApi.md#setCaption) | Set default video caption | **PATCH** /videos/{id}/captions/{lan} |
| [**uploadPart()**](VideoApi.md#uploadPart) | Upload part of video | **POST** /videos/{id}/part |
| [**uploadVideoComplete()**](VideoApi.md#uploadVideoComplete) | Get upload video when complete | **GET** /videos/{id}/complete |


<a name="create"></a>
## **`create()` - Create video object**


Create a video object

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **request** | [**CreateVideoRequest**](../model/CreateVideoRequest.md)| **yes**| video&#39;s info |


### Return type

Promise<[**CreateVideoResponse**](../model/CreateVideoResponse.md)>.




---

<a name="update"></a>
## **`update()` - update video info**


### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| video&#39;s id |
 | **input** | [**UpdateVideoInfoRequest**](../model/UpdateVideoInfoRequest.md)| **yes**| input |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete video**


Delete a video by video ID.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Video ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="uploadThumbnail"></a>
## **`uploadThumbnail()` - Upload video thumbnail**


### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| video&#39;s id |
 | **file** | **string \| Readable \| Buffer**| **yes**| file video to be uploaded |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="createCaption"></a>
## **`createCaption()` - Create a new video caption**


Uploads a VTT file and creates a new video caption for the specified video.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Video ID |
 | **lan** | **string**| **yes**| Language |
 | **file** | **string \| Readable \| Buffer**| **yes**| VTT File |


### Return type

Promise<[**CreateVideoCaptionResponse**](../model/CreateVideoCaptionResponse.md)>.




---

<a name="deleteCaption"></a>
## **`deleteCaption()` - Delete a video caption**


Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Video ID |
 | **lan** | **string**| **yes**| Language |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="getCaptions"></a>
## **`getCaptions()` - Get video captions**


Retrieves a list of video captions for the specified video.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Video ID |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. Default(0) |
 | **limit** | **number**| no| results per page. Allowed values 1-100, default is 25 |


### Return type

Promise<[**GetVideoCaptionsResponse**](../model/GetVideoCaptionsResponse.md)>.




---

<a name="getCost"></a>
## **`getCost()` - get video transcoding cost**


get video transcoding cost

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **qualities** | **string**| **yes**| video&#39;s qualities |
 | **duration** | **number**| **yes**| video&#39;s duration |


### Return type

Promise<[**GetTranscodeCostResponse**](../model/GetTranscodeCostResponse.md)>.




---

<a name="getDetail"></a>
## **`getDetail()` - get video detail**


Retrieve the video details by video id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| video&#39;s id |


### Return type

Promise<[**GetVideoDetailResponse**](../model/GetVideoDetailResponse.md)>.




---

<a name="getVideoList"></a>
## **`getVideoList()` - Get user videos list**


Retrieve a list of videos for the authenticated user.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **request** | [**GetVideoListRequest**](../model/GetVideoListRequest.md)| **yes**| video&#39;s info |


### Return type

Promise<[**GetVideoListResponse**](../model/GetVideoListResponse.md)>.




---

<a name="getVideoPlayerInfo"></a>
## **`getVideoPlayerInfo()` - Get video player info**


Get video player info

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Video ID |
 | **token** | **string**| no| Token |


### Return type

Promise<[**GetVideoPlayerInfoResponse**](../model/GetVideoPlayerInfoResponse.md)>.




---

<a name="setCaption"></a>
## **`setCaption()` - Set default video caption**


Sets the default caption for the specified video and language.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Video ID |
 | **lan** | **string**| **yes**| Language |
 | **isDefault** | [**SetDefaultCaptionRequest**](../model/SetDefaultCaptionRequest.md)| **yes**| Set Default Caption Request |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="uploadPart"></a>
## **`uploadPart()` - Upload part of video**


Upload part of video

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| video&#39;s id |
 | **file** | **string \| Readable \| Buffer**| **yes**| File video to be uploaded |
 | **hash** | **string**| no| Md5 hash of part |
 | **index** | **string**| no| Index of the part |
| **progressListener** | **(event: UploadProgressEvent) => void \| undefined** | no | Optional upload progress listener |

### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.



### Upload chunks

Large files are broken into chunks for upload. You can control the size of the chunks using the `chunkSize` parameter when you instanciate the W3StreamClient:

```js
const client = new W3StreamClient({
    apiKey: "YOUR_API_KEY",
    apiPublicKey: "YOUR_PUBLIC_KEY",
    chunkSize: 50 * 1024 * 1024, // 50mb chunks
});
```
```js
const client = new W3StreamClient({ apiKey: "YOUR_API_KEY", apiPublicKey: "YOUR_PUBLIC_KEY" });const client = new W3StreamClient({ apiKey: "YOUR_API_KEY", apiPublicKey: "YOUR_PUBLIC_KEY" });

const id = 'id_example'; // video's id

const hash = 'hash_example'; // Md5 hash of part

const index = 'index_example'; // Index of the part

const uploadSession = client.createUploadPartProgressiveSession(idhashindex);

await uploadSession.uploadPart('test/data/10m.mp4.part.a');
await uploadSession.uploadPart('test/data/10m.mp4.part.b');
const res = await uploadSession.uploadLastPart('test/data/10m.mp4.part.c');  // ResponseSuccess 

console.log(result);
```

---

<a name="uploadVideoComplete"></a>
## **`uploadVideoComplete()` - Get upload video when complete**


Get upload video when complete.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| video&#39;s id |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

