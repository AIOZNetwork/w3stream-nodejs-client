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
class CreateApiKeyData {
    static getAttributeTypeMap() {
        return CreateApiKeyData.attributeTypeMap;
    }
}
CreateApiKeyData.discriminator = undefined;
CreateApiKeyData.attributeTypeMap = [
    {
        name: 'apiKey',
        baseName: 'api_key',
        type: 'ApiKey',
        format: '',
    },
];
exports.default = CreateApiKeyData;
