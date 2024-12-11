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

export default class ApiKey {
  'createdAt'?: string;
  'expiredAt'?: string;
  'id'?: string;
  'lastUsedAt'?: string;
  'name'?: string;
  'publicKey'?: string;
  'secret'?: string;
  'truncatedSecret'?: string;
  'ttl'?: string;
  'type'?: string;
  'updatedAt'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'createdAt',
      baseName: 'created_at',
      type: 'string',
      format: '',
    },
    {
      name: 'expiredAt',
      baseName: 'expired_at',
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
      name: 'lastUsedAt',
      baseName: 'last_used_at',
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
      name: 'publicKey',
      baseName: 'public_key',
      type: 'string',
      format: '',
    },
    {
      name: 'secret',
      baseName: 'secret',
      type: 'string',
      format: '',
    },
    {
      name: 'truncatedSecret',
      baseName: 'truncated_secret',
      type: 'string',
      format: '',
    },
    {
      name: 'ttl',
      baseName: 'ttl',
      type: 'string',
      format: '',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
      format: '',
    },
    {
      name: 'updatedAt',
      baseName: 'updated_at',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return ApiKey.attributeTypeMap;
  }
}
