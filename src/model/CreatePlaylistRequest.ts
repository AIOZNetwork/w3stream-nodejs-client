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

export default class CreatePlaylistRequest {
  'metadata'?: Array<Metadata>;
  'name'?: string;
  'tags'?: Array<string>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'Array<Metadata>',
      format: '',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
      format: '',
    },
    {
      name: 'tags',
      baseName: 'tags',
      type: 'Array<string>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CreatePlaylistRequest.attributeTypeMap;
  }
}
