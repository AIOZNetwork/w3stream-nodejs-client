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
import Asset from './Asset.js';
import Controls from './Controls.js';
import Theme from './Theme.js';

export default class PlayerTheme {
  'asset'?: Asset;
  'controls'?: Controls;
  'createdAt'?: string;
  'id'?: string;
  'isDefault'?: boolean;
  'name'?: string;
  'theme'?: Theme;
  'userId'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'asset',
      baseName: 'asset',
      type: 'Asset',
      format: '',
    },
    {
      name: 'controls',
      baseName: 'controls',
      type: 'Controls',
      format: '',
    },
    {
      name: 'createdAt',
      baseName: 'created_at',
      type: 'string',
      format: '',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
      format: '',
    },
    {
      name: 'isDefault',
      baseName: 'is_default',
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
      name: 'theme',
      baseName: 'theme',
      type: 'Theme',
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
    return PlayerTheme.attributeTypeMap;
  }
}
