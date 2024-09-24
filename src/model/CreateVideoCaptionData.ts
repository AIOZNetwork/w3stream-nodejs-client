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

export default class CreateVideoCaptionData {
  'videoCaption'?: VideoCaption;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'videoCaption',
      baseName: 'video_caption',
      type: 'VideoCaption',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CreateVideoCaptionData.attributeTypeMap;
  }
}
