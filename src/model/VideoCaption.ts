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

export default class VideoCaption {
  'isDefault'?: boolean;
  'language'?: string;
  'url'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'isDefault',
      baseName: 'is_default',
      type: 'boolean',
      format: '',
    },
    {
      name: 'language',
      baseName: 'language',
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
    return VideoCaption.attributeTypeMap;
  }
}
