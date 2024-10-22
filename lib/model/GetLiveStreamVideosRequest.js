"use strict";
/**
 * @w3stream/nodejs-client
 * W3STREAM Service
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class GetLiveStreamVideosRequest {
    static getAttributeTypeMap() {
        return GetLiveStreamVideosRequest.attributeTypeMap;
    }
}
GetLiveStreamVideosRequest.discriminator = undefined;
GetLiveStreamVideosRequest.attributeTypeMap = [
    {
        name: 'limit',
        baseName: 'limit',
        type: 'number',
        format: '',
    },
    {
        name: 'liveStreamKeyId',
        baseName: 'live_stream_key_id',
        type: 'string',
        format: '',
    },
    {
        name: 'offset',
        baseName: 'offset',
        type: 'number',
        format: '',
    },
    {
        name: 'orderBy',
        baseName: 'order_by',
        type: 'string',
        format: '',
    },
    {
        name: 'search',
        baseName: 'search',
        type: 'string',
        format: '',
    },
    {
        name: 'sortBy',
        baseName: 'sort_by',
        type: 'string',
        format: '',
    },
];
exports.default = GetLiveStreamVideosRequest;
