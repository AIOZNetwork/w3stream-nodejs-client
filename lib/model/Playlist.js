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
class Playlist {
    static getAttributeTypeMap() {
        return Playlist.attributeTypeMap;
    }
}
Playlist.discriminator = undefined;
Playlist.attributeTypeMap = [
    {
        name: 'createdAt',
        baseName: 'created_at',
        type: 'string',
        format: '',
    },
    {
        name: 'duration',
        baseName: 'duration',
        type: 'number',
        format: '',
    },
    {
        name: 'id',
        baseName: 'id',
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
        name: 'itemCount',
        baseName: 'item_count',
        type: 'number',
        format: '',
    },
    {
        name: 'metadata',
        baseName: 'metadata',
        type: 'Array<{ [key: string]: string; }>',
        format: '',
    },
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: 'size',
        baseName: 'size',
        type: 'number',
        format: '',
    },
    {
        name: 'tags',
        baseName: 'tags',
        type: 'Array<string>',
        format: '',
    },
    {
        name: 'thumbnailId',
        baseName: 'thumbnail_id',
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
        name: 'updatedAt',
        baseName: 'updated_at',
        type: 'string',
        format: '',
    },
    {
        name: 'userId',
        baseName: 'user_id',
        type: 'string',
        format: '',
    },
    {
        name: 'videoItems',
        baseName: 'video_items',
        type: 'Array<PlaylistItem>',
        format: '',
    },
];
exports.default = Playlist;
