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
class GetPlaylistListData {
    static getAttributeTypeMap() {
        return GetPlaylistListData.attributeTypeMap;
    }
}
GetPlaylistListData.discriminator = undefined;
GetPlaylistListData.attributeTypeMap = [
    {
        name: 'playlists',
        baseName: 'playlists',
        type: 'Array<Playlist>',
        format: '',
    },
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
        format: '',
    },
];
exports.default = GetPlaylistListData;
