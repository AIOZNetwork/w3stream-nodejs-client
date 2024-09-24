# PlayersApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](PlayersApi.md#create) | Create a player theme | **POST** /players |
| [**get()**](PlayersApi.md#get) | Get a player theme by ID | **GET** /players/{id} |
| [**update()**](PlayersApi.md#update) | Update a player theme by ID | **PATCH** /players/{id} |
| [**delete()**](PlayersApi.md#delete) | Delete a player theme by ID | **DELETE** /players/{id} |
| [**list()**](PlayersApi.md#list) | List all player themes | **GET** /players |
| [**uploadLogo()**](PlayersApi.md#uploadLogo) | Upload a logo for a player theme by ID | **POST** /players/{id}/logo |
| [**deleteLogo()**](PlayersApi.md#deleteLogo) | Delete a logo for a player theme by ID | **DELETE** /players/{id}/logo |
| [**addPlayer()**](PlayersApi.md#addPlayer) | Add a player theme to a video | **POST** /players/add-player |
| [**removePlayer()**](PlayersApi.md#removePlayer) | Remove a player theme from a video | **POST** /players/remove-player |


<a name="create"></a>
## **`create()` - Create a player theme**


Create a player for your video, and customize it.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **request** | [**CreatePlayerThemeRequest**](../model/CreatePlayerThemeRequest.md)| **yes**| Player theme input |


### Return type

Promise<[**CreatePlayerThemesResponse**](../model/CreatePlayerThemesResponse.md)>.




---

<a name="get"></a>
## **`get()` - Get a player theme by ID**


Retrieve a player theme by its ID, as well as details about it.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Player theme ID |


### Return type

Promise<[**GetPlayerThemeByIdResponse**](../model/GetPlayerThemeByIdResponse.md)>.




---

<a name="update"></a>
## **`update()` - Update a player theme by ID**


Use a player ID to update specific details for a player.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Player theme ID |
 | **input** | [**UpdatePlayerThemeRequest**](../model/UpdatePlayerThemeRequest.md)| **yes**| Player theme input |


### Return type

Promise<[**UpdatePlayerThemeResponse**](../model/UpdatePlayerThemeResponse.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete a player theme by ID**


Delete a player if you no longer need it. You can delete any player that you have the player ID for.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Player theme ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="list"></a>
## **`list()` - List all player themes**


Retrieve a list of all the player themes you created, as well as details about each one.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **search** | **string**| no| only support search by name |
 | **sortBy** | **&#39;created_at&#39; \| &#39;name&#39;**| no| sort by |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no| allowed: asc, desc. Default: asc |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. Default(0) |
 | **limit** | **number**| no| results per page. Allowed values 1-100, default is 25 |


### Return type

Promise<[**GetPlayerThemeResponse**](../model/GetPlayerThemeResponse.md)>.




---

<a name="uploadLogo"></a>
## **`uploadLogo()` - Upload a logo for a player theme by ID**


Upload a logo for a player theme by its ID.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Player theme ID |
 | **file** | **string \| Readable \| Buffer**| **yes**| The uploaded file (JPG or PNG) |
 | **link** | **string**| **yes**| The link to the logo (optional if a file is provided) |


### Return type

Promise<[**UploadLogoByIdResponse**](../model/UploadLogoByIdResponse.md)>.




---

<a name="deleteLogo"></a>
## **`deleteLogo()` - Delete a logo for a player theme by ID**


Delete the logo associated to a player.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Player theme ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="addPlayer"></a>
## **`addPlayer()` - Add a player theme to a video**


Add a player theme to a video by Id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **request** | [**AddPlayerThemesToVideoRequest**](../model/AddPlayerThemesToVideoRequest.md)| **yes**| Add player theme to video request |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="removePlayer"></a>
## **`removePlayer()` - Remove a player theme from a video**


Remove a player theme from a video by Id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **request** | [**RemovePlayerThemesFromVideoRequest**](../model/RemovePlayerThemesFromVideoRequest.md)| **yes**| Remove player theme from video request |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

