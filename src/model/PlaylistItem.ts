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
import PlaylistItemVideo from './PlaylistItemVideo.js';

export default class PlaylistItem {
  'createdAt'?: string;
  'id'?: string;
  'next'?: PlaylistItem;
  'nextId'?: string;
  'playlistId'?: string;
  'previous'?: PlaylistItem;
  'previousId'?: string;
  'updatedAt'?: string;
  'video'?: PlaylistItemVideo;
  'videoId'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
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

  static getAttributeTypeMap(): Array<AttributeType> {
    return PlaylistItem.attributeTypeMap;
  }
}
