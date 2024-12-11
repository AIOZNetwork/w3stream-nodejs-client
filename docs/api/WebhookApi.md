# WebhookApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](WebhookApi.md#create) | Create webhook | **POST** /webhooks |
| [**get()**](WebhookApi.md#get) | Get user&#39;s webhook by id | **GET** /webhooks/{id} |
| [**update()**](WebhookApi.md#update) | Update event webhook | **PATCH** /webhooks/{id} |
| [**delete()**](WebhookApi.md#delete) | Delete webhook | **DELETE** /webhooks/{id} |
| [**list()**](WebhookApi.md#list) | Get list webhooks | **GET** /webhooks |
| [**check()**](WebhookApi.md#check) | Check webhook by id | **POST** /webhooks/check/{id} |


<a name="create"></a>
## **`create()` - Create webhook**


Webhooks can push notifications to your server, rather than polling w3stream for changes

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **request** | [**CreateWebhookRequest**](../model/CreateWebhookRequest.md)| **yes**| Create Webhook input |


### Return type

Promise<[**CreateWebhookResponse**](../model/CreateWebhookResponse.md)>.




---

<a name="get"></a>
## **`get()` - Get user&#39;s webhook by id**


Retrieve webhook details by id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| webhook&#39;s id |


### Return type

Promise<[**GetUserWebhookResponse**](../model/GetUserWebhookResponse.md)>.




---

<a name="update"></a>
## **`update()` - Update event webhook**


This endpoint will update the indicated webhook.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| webhook&#39;s id |
 | **request** | [**UpdateWebhookRequest**](../model/UpdateWebhookRequest.md)| **yes**| Update Webhook input, events example: video.encoding.quality.completed |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete webhook**


This endpoint will delete the indicated webhook.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Webhook ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="list"></a>
## **`list()` - Get list webhooks**


This method returns a list of your webhooks (with all their details). 

You can filter what the webhook list that the API returns using the parameters described below.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **search** | **string**| no| only support search by name |
 | **sortBy** | **&#39;created_at&#39; \| &#39;name&#39;**| no| sort by |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no| allowed: asc, desc. Default: asc |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. Default(0) |
 | **limit** | **number**| no| results per page. Allowed values 1-100, default is 25 |
 | **encodingFinished** | **boolean**| no| search by event encoding finished |
 | **encodingStarted** | **boolean**| no| search by event encoding started |
 | **fileReceived** | **boolean**| no| search by event file received |


### Return type

Promise<[**GetWebhooksListResponse**](../model/GetWebhooksListResponse.md)>.




---

<a name="check"></a>
## **`check()` - Check webhook by id**


This endpoint will check the indicated webhook.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| webhook&#39;s id |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

