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

export default class GetAllWatermarkData {
  'total'?: number;
  'watermarks'?: Array<Watermark>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: '',
    },
    {
      name: 'watermarks',
      baseName: 'watermarks',
      type: 'Array<Watermark>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetAllWatermarkData.attributeTypeMap;
  }
}
