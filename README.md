<!--<documentation_excluded>-->
<h1 align="center">W3Stream Node.js client</h1>

W3Stream is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.

## Project description

W3Stream's Node.js is a lightweight client built in `TypeScript` that streamlines the coding process. Chunking files is handled for you, as is pagination and refreshing your tokens.

## Getting started

### Installation
With `npm`:
```
npm install @w3stream/nodejs-client
```

...or with `yarn`:
```
yarn add @w3stream/nodejs-client
```


### Development

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Code sample

```typescript
import W3StreamClient from "@w3stream/nodejs-client";

(async () => {
  try {
    const client = new W3StreamClient({
      publicKey: "YOUR_PUBLIC_KEY",
      secretKey: "YOUR_SECRET_KEY",
    });
    const videoCreationPayload = {
      title: "First video", // The title of your new video.
      description: "A new video.", // A brief description of your video.
    };

    const video = await client.video.create(videoCreationPayload);
    if (!video.data) {
      throw new Error("Failed to create video");
    }
    if (!video.data.id) {
      throw new Error("Failed to create video");
    }
    // Option 1: Use client upload with videoId
    // await client.uploadVideo(video.data.id, "./path/to/video.mp4");
    // console.log("Upload successfully");
    // Option 2: Upload parts yourself
    const uploadResult = await client.video.uploadPart(
      video.data.id,
      "./path/to/video.mp4",
    );
    console.log(uploadResult);

    const checkResult = await client.video.uploadVideoComplete(video.data.id);
    // Check if the video upload is complete
    console.log(checkResult);
  } catch (e) {
    console.error(e);
  }
})();

```

## Documentation

### API endpoints


#### Api key

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#create) | Create API key | **POST** `/api_keys`
[**update()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#update) | Rename API key | **PATCH** `/api_keys/{id}`
[**delete()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#delete) | Delete API key | **DELETE** `/api_keys/{id}`
[**list()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#list) | Get list API keys | **GET** `/api_keys`


#### Players

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/PlayersApi.md#create) | Create a player theme | **POST** `/players`
[**get()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/PlayersApi.md#get) | Get a player theme by ID | **GET** `/players/{id}`
[**update()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/PlayersApi.md#update) | Update a player theme by ID | **PATCH** `/players/{id}`
[**delete()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/PlayersApi.md#delete) | Delete a player theme by ID | **DELETE** `/players/{id}`
[**list()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/PlayersApi.md#list) | List all player themes | **GET** `/players`
[**uploadLogo()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/PlayersApi.md#uploadLogo) | Upload a logo for a player theme by ID | **POST** `/players/{id}/logo`
[**deleteLogo()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/PlayersApi.md#deleteLogo) | Delete a logo for a player theme by ID | **DELETE** `/players/{id}/logo`
[**addPlayer()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/PlayersApi.md#addPlayer) | Add a player theme to a video | **POST** `/players/add-player`
[**removePlayer()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/PlayersApi.md#removePlayer) | Remove a player theme from a video | **POST** `/players/remove-player`


#### VideoApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#create) | Create video object | **POST** `/videos/create`
[**update()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#update) | update video info | **PATCH** `/videos/{id}`
[**delete()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#delete) | Delete video | **DELETE** `/videos/{id}`
[**uploadThumbnail()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#uploadThumbnail) | Upload video thumbnail | **POST** `/videos/{id}/thumbnail`
[**createCaption()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#createCaption) | Create a new video caption | **POST** `/videos/{id}/captions/{lan}`
[**deleteCaption()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#deleteCaption) | Delete a video caption | **DELETE** `/videos/{id}/captions/{lan}`
[**getCaptions()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#getCaptions) | Get video captions | **GET** `/videos/{id}/captions`
[**getCost()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#getCost) | get video transcoding cost | **GET** `/videos/cost`
[**getDetail()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#getDetail) | get video detail | **GET** `/videos/{id}`
[**getVideoList()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#getVideoList) | Get user videos list | **POST** `/videos`
[**setCaption()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#setCaption) | Set default video caption | **PATCH** `/videos/{id}/captions/{lan}`
[**uploadPart()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#uploadPart) | Upload part of video | **POST** `/videos/{id}/part`
[**uploadVideoComplete()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoApi.md#uploadVideoComplete) | Get upload video when complete | **GET** `/videos/{id}/complete`


#### Video chapter

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoChapterApi.md#create) | Create a video chapter | **POST** `/videos/{id}/chapters/{lan}`
[**get()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoChapterApi.md#get) | Get video chapters | **GET** `/videos/{id}/chapters`
[**delete()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/VideoChapterApi.md#delete) | Delete a video chapter | **DELETE** `/videos/{id}/chapters/{lan}`


#### Watermark

Method | Description | HTTP request
------------- | ------------- | -------------
[**upload()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/WatermarkApi.md#upload) | Create a new watermark | **POST** `/watermarks`
[**delete()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/WatermarkApi.md#delete) | Delete a watermark by ID | **DELETE** `/watermarks/{id}`
[**list()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/WatermarkApi.md#list) | List all watermarks | **GET** `/watermarks`


#### Webhook

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/WebhookApi.md#create) | Create webhook | **POST** `/webhooks`
[**get()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/WebhookApi.md#get) | Get user&#39;s webhook by id | **GET** `/webhooks/{id}`
[**update()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/WebhookApi.md#update) | Update event webhook | **PATCH** `/webhooks/{id}`
[**delete()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/WebhookApi.md#delete) | Delete webhook | **DELETE** `/webhooks/{id}`
[**list()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/WebhookApi.md#list) | Get list webhooks | **GET** `/webhooks`
[**check()**](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/api/WebhookApi.md#check) | Check webhook by id | **POST** `/webhooks/check/{id}`



### Models

 - [AddPlayerThemesToVideoRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/AddPlayerThemesToVideoRequest.md)
 - [ApiKey](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/ApiKey.md)
 - [Asset](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/Asset.md)
 - [Controls](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/Controls.md)
 - [CreateApiKeyData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateApiKeyData.md)
 - [CreateApiKeyRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateApiKeyRequest.md)
 - [CreateApiKeyResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateApiKeyResponse.md)
 - [CreatePlayerThemeRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreatePlayerThemeRequest.md)
 - [CreatePlayerThemesData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreatePlayerThemesData.md)
 - [CreatePlayerThemesResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreatePlayerThemesResponse.md)
 - [CreateVideoCaptionData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateVideoCaptionData.md)
 - [CreateVideoCaptionResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateVideoCaptionResponse.md)
 - [CreateVideoChapterData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateVideoChapterData.md)
 - [CreateVideoChapterResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateVideoChapterResponse.md)
 - [CreateVideoRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateVideoRequest.md)
 - [CreateVideoResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateVideoResponse.md)
 - [CreateWatermarkData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateWatermarkData.md)
 - [CreateWatermarkResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateWatermarkResponse.md)
 - [CreateWebhookData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateWebhookData.md)
 - [CreateWebhookRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateWebhookRequest.md)
 - [CreateWebhookResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/CreateWebhookResponse.md)
 - [GetAllWatermarkData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetAllWatermarkData.md)
 - [GetAllWatermarkResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetAllWatermarkResponse.md)
 - [GetApiKeysData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetApiKeysData.md)
 - [GetApiKeysResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetApiKeysResponse.md)
 - [GetPlayerThemeByIdData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetPlayerThemeByIdData.md)
 - [GetPlayerThemeByIdResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetPlayerThemeByIdResponse.md)
 - [GetPlayerThemeData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetPlayerThemeData.md)
 - [GetPlayerThemeResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetPlayerThemeResponse.md)
 - [GetTranscodeCostData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetTranscodeCostData.md)
 - [GetTranscodeCostResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetTranscodeCostResponse.md)
 - [GetUserWebhookData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetUserWebhookData.md)
 - [GetUserWebhookResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetUserWebhookResponse.md)
 - [GetVideoCaptionsData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetVideoCaptionsData.md)
 - [GetVideoCaptionsResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetVideoCaptionsResponse.md)
 - [GetVideoChaptersData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetVideoChaptersData.md)
 - [GetVideoChaptersResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetVideoChaptersResponse.md)
 - [GetVideoDetailResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetVideoDetailResponse.md)
 - [GetVideoListData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetVideoListData.md)
 - [GetVideoListRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetVideoListRequest.md)
 - [GetVideoListResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetVideoListResponse.md)
 - [GetWebhooksListData](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetWebhooksListData.md)
 - [GetWebhooksListResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/GetWebhooksListResponse.md)
 - [Metadata](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/Metadata.md)
 - [PlayerTheme](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/PlayerTheme.md)
 - [QualityObject](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/QualityObject.md)
 - [RemovePlayerThemesFromVideoRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/RemovePlayerThemesFromVideoRequest.md)
 - [RenameAPIKeyRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/RenameAPIKeyRequest.md)
 - [ResponseError](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/ResponseError.md)
 - [ResponseSuccess](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/ResponseSuccess.md)
 - [SetDefaultCaptionRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/SetDefaultCaptionRequest.md)
 - [Theme](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/Theme.md)
 - [UpdatePlayerThemeRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/UpdatePlayerThemeRequest.md)
 - [UpdatePlayerThemeResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/UpdatePlayerThemeResponse.md)
 - [UpdateVideoInfoRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/UpdateVideoInfoRequest.md)
 - [UpdateWebhookRequest](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/UpdateWebhookRequest.md)
 - [UploadLogoByIdResponse](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/UploadLogoByIdResponse.md)
 - [Video](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/Video.md)
 - [VideoAssets](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/VideoAssets.md)
 - [VideoCaption](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/VideoCaption.md)
 - [VideoChapter](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/VideoChapter.md)
 - [VideoWatermark](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/VideoWatermark.md)
 - [Watermark](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/Watermark.md)
 - [Webhook](https://github.com/AIOZNetwork/w3stream-nodejs-client/blob/main/docs/model/Webhook.md)


### Rate Limiting

W3Stream implements rate limiting to ensure fair usage and stability of the service. The API provides the rate limit values in the response headers for any API requests you make. 
In this Node.js client, you can access these headers by using the `*WithResponseHeaders()` versions of the methods. These methods return both the response body and the headers, allowing you to check the `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Retry-After` headers to understand your current rate limit status.


Here is an example of how to use these methods:

```js
const client = new W3StreamClient({
  secretKey: "YOUR_SECRET_KEY",
  publicKey: "YOUR_PUBLIC_KEY"
});

const { headers, body } = const webhook = await client.webhook.listWithResponseHeaders();
```

### Authorization

#### API key and public key

All endpoints required to be authenticated using the API key and public key mechanism described in our [documentation](https://w3stream.xyz/docs/video-management/api-key-management).

All you have to do is provide an API key and public key when instantiating the W3StreamClient:
```js
const client = new W3StreamClient({
  secretKey: "YOUR_SECRET_KEY",
  publicKey: "YOUR_PUBLIC_KEY"
});
```
## Have you gotten use from this API client?

Please take a moment to leave a star on the client ⭐

This helps other users to find the clients and also helps us understand which clients are most popular. Thank you!
