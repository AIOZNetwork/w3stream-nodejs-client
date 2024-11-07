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
class Video {
    static getAttributeTypeMap() {
        return Video.attributeTypeMap;
    }
}
Video.discriminator = undefined;
Video.attributeTypeMap = [
    {
        name: 'assets',
        baseName: 'assets',
        type: 'VideoAssets',
        format: '',
    },
    {
        name: 'captions',
        baseName: 'captions',
        type: 'Array<VideoCaption>',
        format: '',
    },
    {
        name: 'chapters',
        baseName: 'chapters',
        type: 'Array<VideoChapter>',
        format: '',
    },
    {
        name: 'createdAt',
        baseName: 'created_at',
        type: 'string',
        format: '',
    },
    {
        name: 'description',
        baseName: 'description',
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
        name: 'isMp4',
        baseName: 'is_mp4',
        type: 'boolean',
        format: '',
    },
    {
        name: 'isPublic',
        baseName: 'is_public',
        type: 'boolean',
        format: '',
    },
    {
        name: 'metadata',
        baseName: 'metadata',
        type: 'Array<Metadata>',
        format: '',
    },
    {
        name: 'playerTheme',
        baseName: 'player_theme',
        type: 'PlayerTheme',
        format: '',
    },
    {
        name: 'playerThemeId',
        baseName: 'player_theme_id',
        type: 'string',
        format: '',
    },
    {
        name: 'qualities',
        baseName: 'qualities',
        type: 'Array<QualityObject>',
        format: '',
    },
    {
        name: 'size',
        baseName: 'size',
        type: 'number',
        format: '',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'string',
        format: '',
    },
    {
        name: 'tags',
        baseName: 'tags',
        type: 'Array<string>',
        format: '',
    },
    {
        name: 'title',
        baseName: 'title',
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
        name: 'view',
        baseName: 'view',
        type: 'number',
        format: '',
    },
];
exports.default = Video;
