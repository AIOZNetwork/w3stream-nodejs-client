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
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
