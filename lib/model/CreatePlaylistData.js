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
class CreatePlaylistData {
    static getAttributeTypeMap() {
        return CreatePlaylistData.attributeTypeMap;
    }
}
CreatePlaylistData.discriminator = undefined;
CreatePlaylistData.attributeTypeMap = [
    {
        name: 'playlist',
        baseName: 'playlist',
        type: 'Playlist',
        format: '',
    },
];
exports.default = CreatePlaylistData;
