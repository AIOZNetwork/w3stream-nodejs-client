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

export default class VideoAssets {
  'hlsUrl'?: string;
  'iframe'?: string;
  'mp4Url'?: string;
  'playerUrl'?: string;
  'sourceUrl'?: string;
  'thumbnailUrl'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'hlsUrl',
      baseName: 'hls_url',
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
      name: 'mp4Url',
      baseName: 'mp4_url',
      type: 'string',
      format: '',
    },
    {
      name: 'playerUrl',
      baseName: 'player_url',
      type: 'string',
      format: '',
    },
    {
      name: 'sourceUrl',
      baseName: 'source_url',
      type: 'string',
      format: '',
    },
    {
      name: 'thumbnailUrl',
      baseName: 'thumbnail_url',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoAssets.attributeTypeMap;
  }
}
