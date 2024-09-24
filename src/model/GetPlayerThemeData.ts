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
import PlayerTheme from './PlayerTheme.js';

export default class GetPlayerThemeData {
  'playerThemes'?: Array<PlayerTheme>;
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'playerThemes',
      baseName: 'player_themes',
      type: 'Array<PlayerTheme>',
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
    return GetPlayerThemeData.attributeTypeMap;
  }
}
