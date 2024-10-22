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
import PlayerTheme from './PlayerTheme.js';
import QualityObject from './QualityObject.js';
import VideoAssets from './VideoAssets.js';
import VideoCaption from './VideoCaption.js';
import VideoChapter from './VideoChapter.js';
export default class VideoObject {
    'assets'?: VideoAssets;
    'captions'?: Array<VideoCaption>;
    'chapters'?: Array<VideoChapter>;
    'createdAt'?: string;
    'description'?: string;
    'duration'?: number;
    'id'?: string;
    'isMp4'?: boolean;
    'isPublic'?: boolean;
    'metadata'?: Array<Metadata>;
    'playerTheme'?: PlayerTheme;
    'playerThemeId'?: string;
    'qualities'?: Array<QualityObject>;
    'size'?: number;
    'status'?: string;
    'tags'?: Array<string>;
    'title'?: string;
    'updatedAt'?: string;
    'userId'?: string;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
