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

export default class UpdateWebhookRequest {
  'encodingFinished'?: boolean;
  'encodingStarted'?: boolean;
  'fileReceived'?: boolean;
  'name'?: string;
  'url'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
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
      name: 'name',
      baseName: 'name',
      type: 'string',
      format: '',
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return UpdateWebhookRequest.attributeTypeMap;
  }
}
