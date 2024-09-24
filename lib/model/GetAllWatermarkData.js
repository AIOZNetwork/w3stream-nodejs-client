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
class GetAllWatermarkData {
    static getAttributeTypeMap() {
        return GetAllWatermarkData.attributeTypeMap;
    }
}
GetAllWatermarkData.discriminator = undefined;
GetAllWatermarkData.attributeTypeMap = [
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
        format: '',
    },
    {
        name: 'watermarks',
        baseName: 'watermarks',
        type: 'Array<Watermark>',
        format: '',
    },
];
exports.default = GetAllWatermarkData;
