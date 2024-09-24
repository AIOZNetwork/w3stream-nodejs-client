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
import Metadata from './Metadata.js';
export default class UpdateVideoInfoRequest {
    /**
     * Description of the video
     */
    'description'?: string;
    /**
     * Video's publish status
     */
    'isPublic'?: boolean;
    /**
     * Video's metadata
     */
    'metadata'?: Array<Metadata>;
    /**
     * Video player 's id
     */
    'playerId'?: string;
    /**
     * Video's tags
     */
    'tags'?: Array<string>;
    /**
     * Title of the video
     */
    'title'?: string;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
