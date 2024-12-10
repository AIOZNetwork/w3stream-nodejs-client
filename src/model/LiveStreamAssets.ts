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

export default class LiveStreamAssets {
  'hlsUrl'?: string;
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
      name: 'thumbnailUrl',
      baseName: 'thumbnail_url',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return LiveStreamAssets.attributeTypeMap;
  }
}
