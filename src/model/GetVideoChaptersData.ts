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
import VideoChapter from './VideoChapter.js';

export default class GetVideoChaptersData {
  'total'?: number;
  'videoChapters'?: Array<VideoChapter>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: '',
    },
    {
      name: 'videoChapters',
      baseName: 'video_chapters',
      type: 'Array<VideoChapter>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetVideoChaptersData.attributeTypeMap;
  }
}
