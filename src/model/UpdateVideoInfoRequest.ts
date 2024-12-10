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
import Metadata from './Metadata.js';

export default class UpdateVideoInfoRequest {
  /**
   * Description of the video
   */
  'description'?: string;
  /**
   * Video's publish status
   */
  'isPublic'?: boolean;
  /**
   * Video's metadata
   */
  'metadata'?: Array<Metadata>;
  /**
   * Video player 's id
   */
  'playerId'?: string;
  /**
   * Video's tags
   */
  'tags'?: Array<string>;
  /**
   * Title of the video
   */
  'title'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
      format: '',
    },
    {
      name: 'isPublic',
      baseName: 'is_public',
      type: 'boolean',
      format: '',
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'Array<Metadata>',
      format: '',
    },
    {
      name: 'playerId',
      baseName: 'player_id',
      type: 'string',
      format: '',
    },
    {
      name: 'tags',
      baseName: 'tags',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return UpdateVideoInfoRequest.attributeTypeMap;
  }
}
