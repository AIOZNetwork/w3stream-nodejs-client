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
class GetLiveStreamVideosResponse {
    static getAttributeTypeMap() {
        return GetLiveStreamVideosResponse.attributeTypeMap;
    }
}
GetLiveStreamVideosResponse.discriminator = undefined;
GetLiveStreamVideosResponse.attributeTypeMap = [
    {
        name: 'data',
        baseName: 'data',
        type: 'LiveStreamVideosResponse',
        format: '',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'string',
        format: '',
    },
];
exports.default = GetLiveStreamVideosResponse;
