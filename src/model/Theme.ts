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

export default class Theme {
  'controlBarBackgroundColor'?: string;
  'controlBarHeight'?: string;
  'mainColor'?: string;
  'menuBackgroundColor'?: string;
  'menuItemBackgroundHover'?: string;
  'progressBarCircleSize'?: string;
  'progressBarHeight'?: string;
  'textColor'?: string;
  'textTrackBackground'?: string;
  'textTrackColor'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'controlBarBackgroundColor',
      baseName: 'control_bar_background_color',
      type: 'string',
      format: '',
    },
    {
      name: 'controlBarHeight',
      baseName: 'control_bar_height',
      type: 'string',
      format: '',
    },
    {
      name: 'mainColor',
      baseName: 'main_color',
      type: 'string',
      format: '',
    },
    {
      name: 'menuBackgroundColor',
      baseName: 'menu_background_color',
      type: 'string',
      format: '',
    },
    {
      name: 'menuItemBackgroundHover',
      baseName: 'menu_item_background_hover',
      type: 'string',
      format: '',
    },
    {
      name: 'progressBarCircleSize',
      baseName: 'progress_bar_circle_size',
      type: 'string',
      format: '',
    },
    {
      name: 'progressBarHeight',
      baseName: 'progress_bar_height',
      type: 'string',
      format: '',
    },
    {
      name: 'textColor',
      baseName: 'text_color',
      type: 'string',
      format: '',
    },
    {
      name: 'textTrackBackground',
      baseName: 'text_track_background',
      type: 'string',
      format: '',
    },
    {
      name: 'textTrackColor',
      baseName: 'text_track_color',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return Theme.attributeTypeMap;
  }
}
