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
import VideoCaption from './VideoCaption.js';

export default class GetVideoCaptionsData {
  'total'?: number;
  'videoCaptions'?: Array<VideoCaption>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: '',
    },
    {
      name: 'videoCaptions',
      baseName: 'video_captions',
      type: 'Array<VideoCaption>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetVideoCaptionsData.attributeTypeMap;
  }
}
