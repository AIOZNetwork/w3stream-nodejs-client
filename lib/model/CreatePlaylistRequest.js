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
class CreatePlaylistRequest {
    static getAttributeTypeMap() {
        return CreatePlaylistRequest.attributeTypeMap;
    }
}
CreatePlaylistRequest.discriminator = undefined;
CreatePlaylistRequest.attributeTypeMap = [
    {
        name: 'metadata',
        baseName: 'metadata',
        type: 'Array<Metadata>',
        format: '',
    },
    {
        name: 'name',
        baseName: 'name',
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
exports.default = CreatePlaylistRequest;
