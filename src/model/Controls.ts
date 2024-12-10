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

export default class Controls {
  'enableApi'?: boolean;
  'enableControls'?: boolean;
  'forceAutoplay'?: boolean;
  'forceLoop'?: boolean;
  'hideTitle'?: boolean;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'enableApi',
      baseName: 'enable_api',
      type: 'boolean',
      format: '',
    },
    {
      name: 'enableControls',
      baseName: 'enable_controls',
      type: 'boolean',
      format: '',
    },
    {
      name: 'forceAutoplay',
      baseName: 'force_autoplay',
      type: 'boolean',
      format: '',
    },
    {
      name: 'forceLoop',
      baseName: 'force_loop',
      type: 'boolean',
      format: '',
    },
    {
      name: 'hideTitle',
      baseName: 'hide_title',
      type: 'boolean',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return Controls.attributeTypeMap;
  }
}
