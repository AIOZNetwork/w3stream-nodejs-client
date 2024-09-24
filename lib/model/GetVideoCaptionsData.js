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
class GetVideoCaptionsData {
    static getAttributeTypeMap() {
        return GetVideoCaptionsData.attributeTypeMap;
    }
}
GetVideoCaptionsData.discriminator = undefined;
GetVideoCaptionsData.attributeTypeMap = [
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
        format: '',
    },
    {
        name: 'videoCaptions',
        baseName: 'video_captions',
        type: 'Array<VideoCaption>',
        format: '',
    },
];
exports.default = GetVideoCaptionsData;
