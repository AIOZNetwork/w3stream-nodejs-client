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
class GetPlaylistByIdData {
    static getAttributeTypeMap() {
        return GetPlaylistByIdData.attributeTypeMap;
    }
}
GetPlaylistByIdData.discriminator = undefined;
GetPlaylistByIdData.attributeTypeMap = [
    {
        name: 'playlist',
        baseName: 'playlist',
        type: 'Playlist',
        format: '',
    },
];
exports.default = GetPlaylistByIdData;
