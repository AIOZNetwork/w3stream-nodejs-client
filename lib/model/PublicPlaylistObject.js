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
class PublicPlaylistObject {
    static getAttributeTypeMap() {
        return PublicPlaylistObject.attributeTypeMap;
    }
}
PublicPlaylistObject.discriminator = undefined;
PublicPlaylistObject.attributeTypeMap = [
    {
        name: 'playerTheme',
        baseName: 'player_theme',
        type: 'PlayerTheme',
        format: '',
    },
    {
        name: 'playlist',
        baseName: 'playlist',
        type: 'Playlist',
        format: '',
    },
];
exports.default = PublicPlaylistObject;
