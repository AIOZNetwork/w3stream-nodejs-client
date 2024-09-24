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
class GetVideoListResponse {
    static getAttributeTypeMap() {
        return GetVideoListResponse.attributeTypeMap;
    }
}
GetVideoListResponse.discriminator = undefined;
GetVideoListResponse.attributeTypeMap = [
    {
        name: 'data',
        baseName: 'data',
        type: 'GetVideoListData',
        format: '',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'string',
        format: '',
    },
];
exports.default = GetVideoListResponse;
