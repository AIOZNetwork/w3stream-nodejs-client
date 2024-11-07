# PlaylistApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**deleteThumbnail()**](PlaylistApi.md#deleteThumbnail) | Delete a playlist thumbnail | **DELETE** /playlists/{id}/thumbnail |
| [**addItem()**](PlaylistApi.md#addItem) | Add a video to a playlist | **POST** /playlists/{id}/items |
| [**createPlaylist()**](PlaylistApi.md#createPlaylist) | Create a new playlist | **POST** /playlists/create |
| [**deleteItem()**](PlaylistApi.md#deleteItem) | Remove a video from a playlist | **DELETE** /playlists/{id}/items/{item_id} |
| [**deletePlaylist()**](PlaylistApi.md#deletePlaylist) | Delete a playlist by ID | **DELETE** /playlists/{id} |
| [**getPlaylistById()**](PlaylistApi.md#getPlaylistById) | Get playlist by ID | **GET** /playlists/{id} |
| [**getPlaylistInfo()**](PlaylistApi.md#getPlaylistInfo) | Get a playlist public | **GET** /playlists/{id}/player.json |
| [**getPlaylists()**](PlaylistApi.md#getPlaylists) | Get user&#39;s playlists | **POST** /playlists |
| [**moveItems()**](PlaylistApi.md#moveItems) | Move a video within a playlist | **PUT** /playlists/{id}/items |
| [**updatePlaylist()**](PlaylistApi.md#updatePlaylist) | Update a playlist | **PATCH** /playlists/{id} |


<a name="deleteThumbnail"></a>
## **`deleteThumbnail()` - Delete a playlist thumbnail**


Delete the thumbnail of a specific playlist for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="addItem"></a>
## **`addItem()` - Add a video to a playlist**


Add a specific video to a playlist for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **request** | [**AddVideoToPlaylistRequest**](../model/AddVideoToPlaylistRequest.md)| **yes**| Video details |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="createPlaylist"></a>
## **`createPlaylist()` - Create a new playlist**


Create a new playlist for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **payload** | [**CreatePlaylistRequest**](../model/CreatePlaylistRequest.md)| **yes**| Create playlist request |


### Return type

Promise<[**CreatePlaylistResponse**](../model/CreatePlaylistResponse.md)>.




---

<a name="deleteItem"></a>
## **`deleteItem()` - Remove a video from a playlist**


Remove a specific video from a playlist for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **itemId** | **string**| **yes**| Playlist Item ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="deletePlaylist"></a>
## **`deletePlaylist()` - Delete a playlist by ID**


Delete a specific playlist by its ID for the authenticated user

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
 | **sortBy** | **&#39;created_at&#39; \| &#39;title&#39;**| no| Sort field |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no| Sort order |


### Return type

Promise<[**GetPlaylistByIdResponse**](../model/GetPlaylistByIdResponse.md)>.




---

<a name="getPlaylistInfo"></a>
## **`getPlaylistInfo()` - Get a playlist public**


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
 | **payload** | [**GetPlaylistListRequest**](../model/GetPlaylistListRequest.md)| **yes**| Get playlist list request |


### Return type

Promise<[**GetPlaylistListResponse**](../model/GetPlaylistListResponse.md)>.




---

<a name="moveItems"></a>
## **`moveItems()` - Move a video within a playlist**


Change the position of a video in a playlist for the authenticated user.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **payload** | [**MoveVideoInPlaylistRequest**](../model/MoveVideoInPlaylistRequest.md)| **yes**| Move video details |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="updatePlaylist"></a>
## **`updatePlaylist()` - Update a playlist**


Update details of a specific playlist for the authenticated user

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **file** | **string \| Readable \| Buffer**| **yes**| Thumbnail |
 | **name** | **string**| no| Playlist name |
 | **tags** | **Array&lt;string&gt;**| no| Tags |
 | **metadata** | **Array&lt;string&gt;**| no| Metadata |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

