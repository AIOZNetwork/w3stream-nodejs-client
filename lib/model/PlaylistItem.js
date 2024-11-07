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
class PlaylistItem {
    static getAttributeTypeMap() {
        return PlaylistItem.attributeTypeMap;
    }
}
PlaylistItem.discriminator = undefined;
PlaylistItem.attributeTypeMap = [
    {
        name: 'createdAt',
        baseName: 'created_at',
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
        name: 'next',
        baseName: 'next',
        type: 'PlaylistItem',
        format: '',
    },
    {
        name: 'nextId',
        baseName: 'next_id',
        type: 'string',
        format: '',
    },
    {
        name: 'playlistId',
        baseName: 'playlist_id',
        type: 'string',
        format: '',
    },
    {
        name: 'previous',
        baseName: 'previous',
        type: 'PlaylistItem',
        format: '',
    },
    {
        name: 'previousId',
        baseName: 'previous_id',
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
        name: 'video',
        baseName: 'video',
        type: 'PlaylistItemVideo',
        format: '',
    },
    {
        name: 'videoId',
        baseName: 'video_id',
        type: 'string',
        format: '',
    },
];
exports.default = PlaylistItem;
