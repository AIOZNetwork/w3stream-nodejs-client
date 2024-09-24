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
class CreateVideoChapterData {
    static getAttributeTypeMap() {
        return CreateVideoChapterData.attributeTypeMap;
    }
}
CreateVideoChapterData.discriminator = undefined;
CreateVideoChapterData.attributeTypeMap = [
    {
        name: 'videoChapter',
        baseName: 'video_chapter',
        type: 'VideoChapter',
        format: '',
    },
];
exports.default = CreateVideoChapterData;
