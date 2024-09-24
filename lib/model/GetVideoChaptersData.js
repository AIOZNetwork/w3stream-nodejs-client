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
class GetVideoChaptersData {
    static getAttributeTypeMap() {
        return GetVideoChaptersData.attributeTypeMap;
    }
}
GetVideoChaptersData.discriminator = undefined;
GetVideoChaptersData.attributeTypeMap = [
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
        format: '',
    },
    {
        name: 'videoChapters',
        baseName: 'video_chapters',
        type: 'Array<VideoChapter>',
        format: '',
    },
];
exports.default = GetVideoChaptersData;
