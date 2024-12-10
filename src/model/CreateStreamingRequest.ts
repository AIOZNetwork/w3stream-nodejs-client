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

export default class CreateStreamingRequest {
  /**
   * Qualities of the video (default: 1080p, 720p,  360p, allow:2160p, 1440p, 1080p, 720p,  360p, 240p, 144p)
   */
  'qualities'?: Array<string>;
  'save'?: boolean;
  'title'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'qualities',
      baseName: 'qualities',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'save',
      baseName: 'save',
      type: 'boolean',
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
    return CreateStreamingRequest.attributeTypeMap;
  }
}
