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
class ResponseError {
    static getAttributeTypeMap() {
        return ResponseError.attributeTypeMap;
    }
}
ResponseError.discriminator = undefined;
ResponseError.attributeTypeMap = [
    {
        name: 'message',
        baseName: 'message',
        type: 'string',
        format: '',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'string',
        format: '',
    },
];
exports.default = ResponseError;
