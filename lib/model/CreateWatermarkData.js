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
class CreateWatermarkData {
    static getAttributeTypeMap() {
        return CreateWatermarkData.attributeTypeMap;
    }
}
CreateWatermarkData.discriminator = undefined;
CreateWatermarkData.attributeTypeMap = [
    {
        name: 'createdAt',
        baseName: 'created_at',
        type: 'string',
        format: '',
    },
    {
        name: 'watermarkId',
        baseName: 'watermark_id',
        type: 'string',
        format: '',
    },
];
exports.default = CreateWatermarkData;
