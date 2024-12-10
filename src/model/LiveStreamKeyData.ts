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

export default class LiveStreamKeyData {
  'createdAt'?: string;
  'id'?: string;
  'name'?: string;
  'rtmpUrl'?: string;
  'save'?: boolean;
  'streamKey'?: string;
  'updatedAt'?: string;
  'userId'?: string;

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
      name: 'name',
      baseName: 'name',
      type: 'string',
      format: '',
    },
    {
      name: 'rtmpUrl',
      baseName: 'rtmp_url',
      type: 'string',
      format: '',
    },
    {
      name: 'save',
      baseName: 'save',
      type: 'boolean',
      format: '',
    },
    {
      name: 'streamKey',
      baseName: 'stream_key',
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
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return LiveStreamKeyData.attributeTypeMap;
  }
}
