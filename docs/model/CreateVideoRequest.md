
# CreateVideoRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Description of the video |  [optional]
**isPublic** | **boolean** | // Is panoramic video IsPanoramic *bool &#x60;json:\&quot;is_panoramic\&quot; form:\&quot;is_panoramic\&quot;&#x60; Is public video |  [optional]
**metadata** | [**Array&lt;Metadata&gt;**](Metadata.md) | Metadata of the video (key-value pair, max: 50 items, key max length: 255, value max length: 255) |  [optional]
**qualities** | **Array&lt;string&gt;** | Qualities of the video (default: 1080p, 720p,  360p, allow:2160p, 1440p, 1080p, 720p,  360p, 240p, 144p) |  [optional]
**tags** | **Array&lt;string&gt;** | Tags of the video (max: 50 items, max length: 255) |  [optional]
**title** | **string** | Title of the video |  [optional]
**watermark** | [**VideoWatermark**](VideoWatermark.md) | Video thumbnailConfig |  [optional]



