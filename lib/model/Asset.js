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
class Asset {
    static getAttributeTypeMap() {
        return Asset.attributeTypeMap;
    }
}
Asset.discriminator = undefined;
Asset.attributeTypeMap = [
    {
        name: 'logo',
        baseName: 'logo',
        type: 'string',
        format: '',
    },
    {
        name: 'logoImageLink',
        baseName: 'logo_image_link',
        type: 'string',
        format: '',
    },
    {
        name: 'logoLink',
        baseName: 'logo_link',
        type: 'string',
        format: '',
    },
];
exports.default = Asset;
