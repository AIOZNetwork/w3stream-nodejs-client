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
class LiveStreamAssets {
    static getAttributeTypeMap() {
        return LiveStreamAssets.attributeTypeMap;
    }
}
LiveStreamAssets.discriminator = undefined;
LiveStreamAssets.attributeTypeMap = [
    {
        name: 'hlsUrl',
        baseName: 'hls_url',
        type: 'string',
        format: '',
    },
    {
        name: 'iframe',
        baseName: 'iframe',
        type: 'string',
        format: '',
    },
    {
        name: 'playerUrl',
        baseName: 'player_url',
        type: 'string',
        format: '',
    },
    {
        name: 'thumbnailUrl',
        baseName: 'thumbnail_url',
        type: 'string',
        format: '',
    },
];
exports.default = LiveStreamAssets;
