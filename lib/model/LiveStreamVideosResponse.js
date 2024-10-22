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
class LiveStreamVideosResponse {
    static getAttributeTypeMap() {
        return LiveStreamVideosResponse.attributeTypeMap;
    }
}
LiveStreamVideosResponse.discriminator = undefined;
LiveStreamVideosResponse.attributeTypeMap = [
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
        format: '',
    },
    {
        name: 'videos',
        baseName: 'videos',
        type: 'Array<LiveStreamVideoResponse>',
        format: '',
    },
];
exports.default = LiveStreamVideosResponse;
