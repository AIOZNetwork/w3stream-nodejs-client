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
class AddVideoToPlaylistRequest {
    static getAttributeTypeMap() {
        return AddVideoToPlaylistRequest.attributeTypeMap;
    }
}
AddVideoToPlaylistRequest.discriminator = undefined;
AddVideoToPlaylistRequest.attributeTypeMap = [
    {
        name: 'videoId',
        baseName: 'video_id',
        type: 'string',
        format: '',
    },
];
exports.default = AddVideoToPlaylistRequest;
