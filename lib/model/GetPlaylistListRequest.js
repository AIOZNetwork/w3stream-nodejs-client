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
class GetPlaylistListRequest {
    static getAttributeTypeMap() {
        return GetPlaylistListRequest.attributeTypeMap;
    }
}
GetPlaylistListRequest.discriminator = undefined;
GetPlaylistListRequest.attributeTypeMap = [
    {
        name: 'limit',
        baseName: 'limit',
        type: 'number',
        format: '',
    },
    {
        name: 'metadata',
        baseName: 'metadata',
        type: 'Array<Metadata>',
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
    {
        name: 'tags',
        baseName: 'tags',
        type: 'Array<string>',
        format: '',
    },
];
exports.default = GetPlaylistListRequest;
