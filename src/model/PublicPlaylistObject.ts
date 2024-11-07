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
import Playlist from './Playlist.js';

export default class PublicPlaylistObject {
  'playerTheme'?: PlayerTheme;
  'playlist'?: Playlist;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'playerTheme',
      baseName: 'player_theme',
      type: 'PlayerTheme',
      format: '',
    },
    {
      name: 'playlist',
      baseName: 'playlist',
      type: 'Playlist',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return PublicPlaylistObject.attributeTypeMap;
  }
}
