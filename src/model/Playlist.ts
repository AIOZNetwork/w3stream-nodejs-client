/**
 * @w3stream/nodejs-client
 * VMS Service
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */

import AttributeType from './AttributeType.js';
import PlaylistItem from './PlaylistItem.js';

export default class Playlist {
  'createdAt'?: string;
  'duration'?: number;
  'id'?: string;
  'iframe'?: string;
  'itemCount'?: number;
  'metadata'?: { [key: string]: string };
  'name'?: string;
  'size'?: number;
  'tags'?: string;
  'thumbnailId'?: string;
  'thumbnailUrl'?: string;
  'updatedAt'?: string;
  'userId'?: string;
  'videoItems'?: Array<PlaylistItem>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
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
      type: '{ [key: string]: string; }',
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
      type: 'string',
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

  static getAttributeTypeMap(): Array<AttributeType> {
    return Playlist.attributeTypeMap;
  }
}
