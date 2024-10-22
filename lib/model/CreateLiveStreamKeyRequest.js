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
class CreateLiveStreamKeyRequest {
    static getAttributeTypeMap() {
        return CreateLiveStreamKeyRequest.attributeTypeMap;
    }
}
CreateLiveStreamKeyRequest.discriminator = undefined;
CreateLiveStreamKeyRequest.attributeTypeMap = [
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: 'save',
        baseName: 'save',
        type: 'boolean',
        format: '',
    },
];
exports.default = CreateLiveStreamKeyRequest;
