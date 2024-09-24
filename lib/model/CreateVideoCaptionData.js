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
class CreateVideoCaptionData {
    static getAttributeTypeMap() {
        return CreateVideoCaptionData.attributeTypeMap;
    }
}
CreateVideoCaptionData.discriminator = undefined;
CreateVideoCaptionData.attributeTypeMap = [
    {
        name: 'videoCaption',
        baseName: 'video_caption',
        type: 'VideoCaption',
        format: '',
    },
];
exports.default = CreateVideoCaptionData;
