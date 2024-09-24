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
import ApiKey from './ApiKey.js';

export default class CreateApiKeyData {
  'apiKey'?: ApiKey;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'apiKey',
      baseName: 'api_key',
      type: 'ApiKey',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CreateApiKeyData.attributeTypeMap;
  }
}
