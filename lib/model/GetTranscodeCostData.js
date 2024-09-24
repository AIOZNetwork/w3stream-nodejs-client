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
class GetTranscodeCostData {
    static getAttributeTypeMap() {
        return GetTranscodeCostData.attributeTypeMap;
    }
}
GetTranscodeCostData.discriminator = undefined;
GetTranscodeCostData.attributeTypeMap = [
    {
        name: 'isEnough',
        baseName: 'is_enough',
        type: 'boolean',
        format: '',
    },
    {
        name: 'price',
        baseName: 'price',
        type: 'string',
        format: '',
    },
];
exports.default = GetTranscodeCostData;
