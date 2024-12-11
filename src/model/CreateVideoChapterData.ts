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
import VideoChapter from './VideoChapter.js';

export default class CreateVideoChapterData {
  'videoChapter'?: VideoChapter;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'videoChapter',
      baseName: 'video_chapter',
      type: 'VideoChapter',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CreateVideoChapterData.attributeTypeMap;
  }
}
