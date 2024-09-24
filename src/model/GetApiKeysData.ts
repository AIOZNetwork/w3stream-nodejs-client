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

export default class GetApiKeysData {
  'apiKeys'?: Array<ApiKey>;
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'apiKeys',
      baseName: 'api_keys',
      type: 'Array<ApiKey>',
      format: '',
    },
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetApiKeysData.attributeTypeMap;
  }
}
