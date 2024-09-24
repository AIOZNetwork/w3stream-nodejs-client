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
class GetApiKeysData {
    static getAttributeTypeMap() {
        return GetApiKeysData.attributeTypeMap;
    }
}
GetApiKeysData.discriminator = undefined;
GetApiKeysData.attributeTypeMap = [
    {
        name: 'apiKeys',
        baseName: 'api_keys',
        type: 'Array<ApiKey>',
        format: '',
    },
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
        format: '',
    },
];
exports.default = GetApiKeysData;
