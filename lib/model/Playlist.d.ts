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
import PlaylistItem from './PlaylistItem.js';
export default class Playlist {
    'createdAt'?: string;
    'duration'?: number;
    'id'?: string;
    'iframe'?: string;
    'itemCount'?: number;
    'metadata'?: Array<{
        [key: string]: string;
    }>;
    'name'?: string;
    'size'?: number;
    'tags'?: Array<string>;
    'thumbnailId'?: string;
    'thumbnailUrl'?: string;
    'updatedAt'?: string;
    'userId'?: string;
    'videoItems'?: Array<PlaylistItem>;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
