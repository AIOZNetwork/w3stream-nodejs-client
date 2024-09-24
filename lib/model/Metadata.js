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
class Metadata {
    static getAttributeTypeMap() {
        return Metadata.attributeTypeMap;
    }
}
Metadata.discriminator = undefined;
Metadata.attributeTypeMap = [
    {
        name: 'key',
        baseName: 'key',
        type: 'string',
        format: '',
    },
    {
        name: 'value',
        baseName: 'value',
        type: 'string',
        format: '',
    },
];
exports.default = Metadata;
