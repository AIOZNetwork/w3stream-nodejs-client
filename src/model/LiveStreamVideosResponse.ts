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
import LiveStreamVideoResponse from './LiveStreamVideoResponse.js';

export default class LiveStreamVideosResponse {
  'total'?: number;
  'videos'?: Array<LiveStreamVideoResponse>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: '',
    },
    {
      name: 'videos',
      baseName: 'videos',
      type: 'Array<LiveStreamVideoResponse>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return LiveStreamVideosResponse.attributeTypeMap;
  }
}
