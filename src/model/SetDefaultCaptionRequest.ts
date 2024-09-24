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

export default class SetDefaultCaptionRequest {
  'isDefault'?: boolean;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'isDefault',
      baseName: 'is_default',
      type: 'boolean',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return SetDefaultCaptionRequest.attributeTypeMap;
  }
}
