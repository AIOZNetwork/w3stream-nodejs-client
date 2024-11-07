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

import AttributeType from './AttributeType.js';
import Metadata from './Metadata.js';
import PlayerTheme from './PlayerTheme.js';
import QualityObject from './QualityObject.js';
import VideoAssets from './VideoAssets.js';
import VideoCaption from './VideoCaption.js';
import VideoChapter from './VideoChapter.js';

export default class Video {
  'assets'?: VideoAssets;
  'captions'?: Array<VideoCaption>;
  'chapters'?: Array<VideoChapter>;
  'createdAt'?: string;
  'description'?: string;
  'duration'?: number;
  'id'?: string;
  'isMp4'?: boolean;
  'isPublic'?: boolean;
  'metadata'?: Array<Metadata>;
  'playerTheme'?: PlayerTheme;
  'playerThemeId'?: string;
  'qualities'?: Array<QualityObject>;
  'size'?: number;
  'status'?: string;
  'tags'?: Array<string>;
  'title'?: string;
  'updatedAt'?: string;
  'userId'?: string;
  'view'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
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

  static getAttributeTypeMap(): Array<AttributeType> {
    return Video.attributeTypeMap;
  }
}
