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
class RenameAPIKeyRequest {
    static getAttributeTypeMap() {
        return RenameAPIKeyRequest.attributeTypeMap;
    }
}
RenameAPIKeyRequest.discriminator = undefined;
RenameAPIKeyRequest.attributeTypeMap = [
    {
        name: 'apiKeyName',
        baseName: 'api_key_name',
        type: 'string',
        format: '',
    },
];
exports.default = RenameAPIKeyRequest;
