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
class UpdateLiveStreamVideoRequest {
    static getAttributeTypeMap() {
        return UpdateLiveStreamVideoRequest.attributeTypeMap;
    }
}
UpdateLiveStreamVideoRequest.discriminator = undefined;
UpdateLiveStreamVideoRequest.attributeTypeMap = [
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
exports.default = UpdateLiveStreamVideoRequest;
