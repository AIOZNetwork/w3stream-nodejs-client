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
class CreateWatermarkResponse {
    static getAttributeTypeMap() {
        return CreateWatermarkResponse.attributeTypeMap;
    }
}
CreateWatermarkResponse.discriminator = undefined;
CreateWatermarkResponse.attributeTypeMap = [
    {
        name: 'data',
        baseName: 'data',
        type: 'CreateWatermarkData',
        format: '',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'string',
        format: '',
    },
];
exports.default = CreateWatermarkResponse;
