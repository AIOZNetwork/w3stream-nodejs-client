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
class QualityObject {
    static getAttributeTypeMap() {
        return QualityObject.attributeTypeMap;
    }
}
QualityObject.discriminator = undefined;
QualityObject.attributeTypeMap = [
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'string',
        format: '',
    },
    {
        name: 'type',
        baseName: 'type',
        type: 'string',
        format: '',
    },
];
exports.default = QualityObject;
