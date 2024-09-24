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
import Controls from './Controls.js';
import Theme from './Theme.js';

export default class CreatePlayerThemeRequest {
  'controls'?: Controls;
  'name'?: string;
  'theme'?: Theme;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'controls',
      baseName: 'controls',
      type: 'Controls',
      format: '',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
      format: '',
    },
    {
      name: 'theme',
      baseName: 'theme',
      type: 'Theme',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CreatePlayerThemeRequest.attributeTypeMap;
  }
}
