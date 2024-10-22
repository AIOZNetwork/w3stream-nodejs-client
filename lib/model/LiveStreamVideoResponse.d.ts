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
import LiveStreamAssets from './LiveStreamAssets.js';
import VideoObject from './VideoObject.js';
export default class LiveStreamVideoResponse {
    'assets'?: LiveStreamAssets;
    'createdAt'?: string;
    'duration'?: number;
    'id'?: string;
    'liveStreamKeyId'?: string;
    'qualities'?: Array<string>;
    'save'?: boolean;
    'status'?: string;
    'title'?: string;
    'updatedAt'?: string;
    'userId'?: string;
    'video'?: VideoObject;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
