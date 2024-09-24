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
class CreateVideoRequest {
    static getAttributeTypeMap() {
        return CreateVideoRequest.attributeTypeMap;
    }
}
CreateVideoRequest.discriminator = undefined;
CreateVideoRequest.attributeTypeMap = [
    {
        name: 'description',
        baseName: 'description',
        type: 'string',
        format: '',
    },
    {
        name: 'isPublic',
        baseName: 'is_public',
        type: 'boolean',
        format: '',
    },
    {
        name: 'metadata',
        baseName: 'metadata',
        type: 'Array<Metadata>',
        format: '',
    },
    {
        name: 'qualities',
        baseName: 'qualities',
        type: 'Array<string>',
        format: '',
    },
    {
        name: 'tags',
        baseName: 'tags',
        type: 'Array<string>',
        format: '',
    },
    {
        name: 'title',
        baseName: 'title',
        type: 'string',
        format: '',
    },
    {
        name: 'watermark',
        baseName: 'watermark',
        type: 'VideoWatermark',
        format: '',
    },
];
exports.default = CreateVideoRequest;
