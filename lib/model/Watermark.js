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
class Watermark {
    static getAttributeTypeMap() {
        return Watermark.attributeTypeMap;
    }
}
Watermark.discriminator = undefined;
Watermark.attributeTypeMap = [
    {
        name: 'createdAt',
        baseName: 'created_at',
        type: 'string',
        format: '',
    },
    {
        name: 'height',
        baseName: 'height',
        type: 'number',
        format: '',
    },
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
        format: '',
    },
    {
        name: 'updatedAt',
        baseName: 'updated_at',
        type: 'string',
        format: '',
    },
    {
        name: 'userId',
        baseName: 'user_id',
        type: 'string',
        format: '',
    },
    {
        name: 'watermarkName',
        baseName: 'watermark_name',
        type: 'string',
        format: '',
    },
    {
        name: 'width',
        baseName: 'width',
        type: 'number',
        format: '',
    },
];
exports.default = Watermark;
