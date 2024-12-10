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
import Webhook from './Webhook.js';

export default class GetUserWebhookData {
  'webhook'?: Webhook;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'webhook',
      baseName: 'webhook',
      type: 'Webhook',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetUserWebhookData.attributeTypeMap;
  }
}
