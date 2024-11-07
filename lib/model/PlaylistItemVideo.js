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
class PlaylistItemVideo {
    static getAttributeTypeMap() {
        return PlaylistItemVideo.attributeTypeMap;
    }
}
PlaylistItemVideo.discriminator = undefined;
PlaylistItemVideo.attributeTypeMap = [
    {
        name: 'duration',
        baseName: 'duration',
        type: 'number',
        format: '',
    },
    {
        name: 'hlsUrl',
        baseName: 'hls_url',
        type: 'string',
        format: '',
    },
    {
        name: 'qualities',
        baseName: 'qualities',
        type: 'string',
        format: '',
    },
    {
        name: 'thumbnailUrl',
        baseName: 'thumbnail_url',
        type: 'string',
        format: '',
    },
    {
        name: 'title',
        baseName: 'title',
        type: 'string',
        format: '',
    },
];
exports.default = PlaylistItemVideo;
