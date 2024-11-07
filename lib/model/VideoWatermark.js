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
class VideoWatermark {
    static getAttributeTypeMap() {
        return VideoWatermark.attributeTypeMap;
    }
}
VideoWatermark.discriminator = undefined;
VideoWatermark.attributeTypeMap = [
    {
        name: 'bottom',
        baseName: 'bottom',
        type: 'string',
        format: '',
    },
    {
        name: 'createdAt',
        baseName: 'created_at',
        type: 'string',
        format: '',
    },
    {
        name: 'height',
        baseName: 'height',
        type: 'string',
        format: '',
    },
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
        format: '',
    },
    {
        name: 'left',
        baseName: 'left',
        type: 'string',
        format: '',
    },
    {
        name: 'opacity',
        baseName: 'opacity',
        type: 'string',
        format: '',
    },
    {
        name: 'right',
        baseName: 'right',
        type: 'string',
        format: '',
    },
    {
        name: 'top',
        baseName: 'top',
        type: 'string',
        format: '',
    },
    {
        name: 'updatedAt',
        baseName: 'updated_at',
        type: 'string',
        format: '',
    },
    {
        name: 'videoId',
        baseName: 'video_id',
        type: 'string',
        format: '',
    },
    {
        name: 'watermark',
        baseName: 'watermark',
        type: 'Watermark',
        format: '',
    },
    {
        name: 'watermarkId',
        baseName: 'watermark_id',
        type: 'string',
        format: '',
    },
    {
        name: 'width',
        baseName: 'width',
        type: 'string',
        format: '',
    },
];
exports.default = VideoWatermark;
