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

export default class MoveVideoInPlaylistRequest {
  /**
   * CurrentId is the UUID of the playlist item (video) to be moved
   */
  'currentId'?: string;
  /**
   * NextId is the UUID of the playlist item that should come after the moved item
   */
  'nextId'?: string;
  /**
   * PreviousId is the UUID of the playlist item that should come before the moved item
   */
  'previousId'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'currentId',
      baseName: 'current_id',
      type: 'string',
      format: '',
    },
    {
      name: 'nextId',
      baseName: 'next_id',
      type: 'string',
      format: '',
    },
    {
      name: 'previousId',
      baseName: 'previous_id',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return MoveVideoInPlaylistRequest.attributeTypeMap;
  }
}
