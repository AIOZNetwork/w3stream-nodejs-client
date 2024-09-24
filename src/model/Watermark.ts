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

export default class Watermark {
  'createdAt'?: string;
  'height'?: number;
  'id'?: string;
  'updatedAt'?: string;
  'userId'?: string;
  'watermarkName'?: string;
  'width'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'createdAt',
      baseName: 'created_at',
      type: 'string',
      format: '',
    },
    {
      name: 'height',
      baseName: 'height',
      type: 'number',
      format: '',
    },
    {
      name: 'id',
      baseName: 'id',
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
      name: 'userId',
      baseName: 'user_id',
      type: 'string',
      format: '',
    },
    {
      name: 'watermarkName',
      baseName: 'watermark_name',
      type: 'string',
      format: '',
    },
    {
      name: 'width',
      baseName: 'width',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return Watermark.attributeTypeMap;
  }
}
