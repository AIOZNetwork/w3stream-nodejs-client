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
import Asset from './Asset.js';
import Controls from './Controls.js';
import Theme from './Theme.js';
export default class UpdatePlayerThemeRequest {
    'asset'?: Asset;
    'controls'?: Controls;
    'isDefault'?: boolean;
    'name'?: string;
    'theme'?: Theme;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
