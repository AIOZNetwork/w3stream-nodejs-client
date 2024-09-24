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
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
