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
import Watermark from './Watermark.js';

export default class VideoWatermark {
  'bottom'?: string;
  'createdAt'?: string;
  'height'?: string;
  'id'?: string;
  'left'?: string;
  'opacity'?: string;
  'right'?: string;
  'top'?: string;
  'updatedAt'?: string;
  'videoId'?: string;
  'watermark'?: Watermark;
  'watermarkId'?: string;
  'width'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'bottom',
      baseName: 'bottom',
      type: 'string',
      format: '',
    },
    {
      name: 'createdAt',
      baseName: 'created_at',
      type: 'string',
      format: '',
    },
    {
      name: 'height',
      baseName: 'height',
      type: 'string',
      format: '',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
      format: '',
    },
    {
      name: 'left',
      baseName: 'left',
      type: 'string',
      format: '',
    },
    {
      name: 'opacity',
      baseName: 'opacity',
      type: 'string',
      format: '',
    },
    {
      name: 'right',
      baseName: 'right',
      type: 'string',
      format: '',
    },
    {
      name: 'top',
      baseName: 'top',
      type: 'string',
      format: '',
    },
    {
      name: 'updatedAt',
      baseName: 'updated_at',
      type: 'string',
      format: '',
    },
    {
      name: 'videoId',
      baseName: 'video_id',
      type: 'string',
      format: '',
    },
    {
      name: 'watermark',
      baseName: 'watermark',
      type: 'Watermark',
      format: '',
    },
    {
      name: 'watermarkId',
      baseName: 'watermark_id',
      type: 'string',
      format: '',
    },
    {
      name: 'width',
      baseName: 'width',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoWatermark.attributeTypeMap;
  }
}
