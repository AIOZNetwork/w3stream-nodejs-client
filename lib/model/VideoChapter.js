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
class VideoChapter {
    static getAttributeTypeMap() {
        return VideoChapter.attributeTypeMap;
    }
}
VideoChapter.discriminator = undefined;
VideoChapter.attributeTypeMap = [
    {
        name: 'language',
        baseName: 'language',
        type: 'string',
        format: '',
    },
    {
        name: 'url',
        baseName: 'url',
        type: 'string',
        format: '',
    },
];
exports.default = VideoChapter;
