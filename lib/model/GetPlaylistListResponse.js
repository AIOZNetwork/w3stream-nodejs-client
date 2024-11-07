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
class GetPlaylistListResponse {
    static getAttributeTypeMap() {
        return GetPlaylistListResponse.attributeTypeMap;
    }
}
GetPlaylistListResponse.discriminator = undefined;
GetPlaylistListResponse.attributeTypeMap = [
    {
        name: 'data',
        baseName: 'data',
        type: 'GetPlaylistListData',
        format: '',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'string',
        format: '',
    },
];
exports.default = GetPlaylistListResponse;
