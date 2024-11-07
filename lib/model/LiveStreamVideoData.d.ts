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
import Video from './Video.js';
export default class LiveStreamVideoData {
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
    'video'?: Video;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
