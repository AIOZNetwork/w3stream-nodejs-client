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
import GetLiveStreamKeyData from './GetLiveStreamKeyData.js';

export default class GetLiveStreamKeysListData {
  'liveStreamKeys'?: Array<GetLiveStreamKeyData>;
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'liveStreamKeys',
      baseName: 'live_stream_keys',
      type: 'Array<GetLiveStreamKeyData>',
      format: '',
    },
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetLiveStreamKeysListData.attributeTypeMap;
  }
}
