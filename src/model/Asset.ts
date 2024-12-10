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

export default class Asset {
  'logo'?: string;
  'logoImageLink'?: string;
  'logoLink'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'logo',
      baseName: 'logo',
      type: 'string',
      format: '',
    },
    {
      name: 'logoImageLink',
      baseName: 'logo_image_link',
      type: 'string',
      format: '',
    },
    {
      name: 'logoLink',
      baseName: 'logo_link',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return Asset.attributeTypeMap;
  }
}
