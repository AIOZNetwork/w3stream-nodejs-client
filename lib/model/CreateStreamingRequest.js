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
class CreateStreamingRequest {
    static getAttributeTypeMap() {
        return CreateStreamingRequest.attributeTypeMap;
    }
}
CreateStreamingRequest.discriminator = undefined;
CreateStreamingRequest.attributeTypeMap = [
    {
        name: 'qualities',
        baseName: 'qualities',
        type: 'Array<string>',
        format: '',
    },
    {
        name: 'save',
        baseName: 'save',
        type: 'boolean',
        format: '',
    },
    {
        name: 'title',
        baseName: 'title',
        type: 'string',
        format: '',
    },
];
exports.default = CreateStreamingRequest;
