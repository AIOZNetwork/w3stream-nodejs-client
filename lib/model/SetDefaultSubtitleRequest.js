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
class SetDefaultSubtitleRequest {
    static getAttributeTypeMap() {
        return SetDefaultSubtitleRequest.attributeTypeMap;
    }
}
SetDefaultSubtitleRequest.discriminator = undefined;
SetDefaultSubtitleRequest.attributeTypeMap = [
    {
        name: 'isDefault',
        baseName: 'is_default',
        type: 'boolean',
        format: '',
    },
];
exports.default = SetDefaultSubtitleRequest;
