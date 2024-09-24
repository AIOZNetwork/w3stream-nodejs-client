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

export default class GetTranscodeCostData {
  'isEnough'?: boolean;
  'price'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'isEnough',
      baseName: 'is_enough',
      type: 'boolean',
      format: '',
    },
    {
      name: 'price',
      baseName: 'price',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetTranscodeCostData.attributeTypeMap;
  }
}
