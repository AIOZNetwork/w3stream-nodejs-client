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

export default class Webhook {
  'createdAt'?: string;
  'encodingFinished'?: boolean;
  'encodingStarted'?: boolean;
  'fileReceived'?: boolean;
  'id'?: string;
  'lastTriggeredAt'?: string;
  'name'?: string;
  'updatedAt'?: string;
  'url'?: string;
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
      name: 'encodingFinished',
      baseName: 'encoding_finished',
      type: 'boolean',
      format: '',
    },
    {
      name: 'encodingStarted',
      baseName: 'encoding_started',
      type: 'boolean',
      format: '',
    },
    {
      name: 'fileReceived',
      baseName: 'file_received',
      type: 'boolean',
      format: '',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
      format: '',
    },
    {
      name: 'lastTriggeredAt',
      baseName: 'last_triggered_at',
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
      name: 'updatedAt',
      baseName: 'updated_at',
      type: 'string',
      format: '',
    },
    {
      name: 'url',
      baseName: 'url',
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
    return Webhook.attributeTypeMap;
  }
}
