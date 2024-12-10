# PlaylistApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**addVideoToPlaylist()**](PlaylistApi.md#addVideoToPlaylist) | Add a video to a playlist | **POST** /playlists/{id}/items |
| [**createPlaylist()**](PlaylistApi.md#createPlaylist) | Create a playlist | **POST** /playlists/create |
| [**deletePlaylistById()**](PlaylistApi.md#deletePlaylistById) | Delete a playlist by ID | **DELETE** /playlists/{id} |
| [**deletePlaylistThumbnail()**](PlaylistApi.md#deletePlaylistThumbnail) | Delete a playlist thumbnail | **DELETE** /playlists/{id}/thumbnail |
| [**getPlaylistById()**](PlaylistApi.md#getPlaylistById) | Get playlist by ID | **GET** /playlists/{id} |
| [**getPlaylistPublicInfo()**](PlaylistApi.md#getPlaylistPublicInfo) | Get a playlist public | **GET** /playlists/{id}/player.json |
| [**getPlaylists()**](PlaylistApi.md#getPlaylists) | Get user&#39;s playlists | **POST** /playlists |
| [**moveVideoInPlaylist()**](PlaylistApi.md#moveVideoInPlaylist) | Move a video in a playlist | **PUT** /playlists/{id}/items |
| [**removeVideoFromPlaylist()**](PlaylistApi.md#removeVideoFromPlaylist) | Remove a video from a playlist | **DELETE** /playlists/{id}/items/{item_id} |
| [**updatePlaylist()**](PlaylistApi.md#updatePlaylist) | Update a playlist | **PATCH** /playlists/{id} |


<a name="addVideoToPlaylist"></a>
## **`addVideoToPlaylist()` - Add a video to a playlist**


Add a specific video to a playlist for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **payload** | [**AddVideoToPlaylistRequest**](../model/AddVideoToPlaylistRequest.md)| **yes**| Video details |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="createPlaylist"></a>
## **`createPlaylist()` - Create a playlist**


Create a playlist for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **request** | [**CreatePlaylistRequest**](../model/CreatePlaylistRequest.md)| **yes**| Playlist input |


### Return type

Promise<[**CreatePlaylistResponse**](../model/CreatePlaylistResponse.md)>.




---

<a name="deletePlaylistById"></a>
## **`deletePlaylistById()` - Delete a playlist by ID**


Delete a specific playlist by its ID for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="deletePlaylistThumbnail"></a>
## **`deletePlaylistThumbnail()` - Delete a playlist thumbnail**


Delete the thumbnail of a specific playlist for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="getPlaylistById"></a>
## **`getPlaylistById()` - Get playlist by ID**


Retrieve a specific playlist by its ID for the current user.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **sortBy** | **&#39;created_at&#39; \| &#39;title&#39; \| &#39;duration&#39;**| no| sort by |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no| allowed: asc, desc. Default: asc |


### Return type

Promise<[**GetPlaylistByIdResponse**](../model/GetPlaylistByIdResponse.md)>.




---

<a name="getPlaylistPublicInfo"></a>
## **`getPlaylistPublicInfo()` - Get a playlist public**


Get a specific playlist public by its ID

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |


### Return type

Promise<[**PublicPlaylistObject**](../model/PublicPlaylistObject.md)>.




---

<a name="getPlaylists"></a>
## **`getPlaylists()` - Get user&#39;s playlists**


Retrieve a list of playlists for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **request** | [**GetPlaylistListRequest**](../model/GetPlaylistListRequest.md)| **yes**| Playlist filter |


### Return type

Promise<[**GetPlaylistListResponse**](../model/GetPlaylistListResponse.md)>.




---

<a name="moveVideoInPlaylist"></a>
## **`moveVideoInPlaylist()` - Move a video in a playlist**


Move a specific video in a playlist for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **payload** | [**MoveVideoInPlaylistRequest**](../model/MoveVideoInPlaylistRequest.md)| **yes**| Video details |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="removeVideoFromPlaylist"></a>
## **`removeVideoFromPlaylist()` - Remove a video from a playlist**


Remove a specific video from a playlist for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **itemId** | **string**| **yes**| Playlist Item ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="updatePlaylist"></a>
## **`updatePlaylist()` - Update a playlist**


Update a specific playlist for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **file** | **string \| Readable \| Buffer**| **yes**|  |
 | **metadata** | **Array&lt;Metadata&gt;**| no|  |
 | **name** | **string**| no|  |
 | **tags** | **Array&lt;string&gt;**| no|  |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

