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

export default class GetLiveStreamVideosRequest {
  'limit'?: number;
  'liveStreamKeyId'?: string;
  'offset'?: number;
  'orderBy'?: string;
  'search'?: string;
  'sortBy'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'limit',
      baseName: 'limit',
      type: 'number',
      format: '',
    },
    {
      name: 'liveStreamKeyId',
      baseName: 'live_stream_key_id',
      type: 'string',
      format: '',
    },
    {
      name: 'offset',
      baseName: 'offset',
      type: 'number',
      format: '',
    },
    {
      name: 'orderBy',
      baseName: 'order_by',
      type: 'string',
      format: '',
    },
    {
      name: 'search',
      baseName: 'search',
      type: 'string',
      format: '',
    },
    {
      name: 'sortBy',
      baseName: 'sort_by',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetLiveStreamVideosRequest.attributeTypeMap;
  }
}
