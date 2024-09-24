"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerTheme {
    static getAttributeTypeMap() {
        return PlayerTheme.attributeTypeMap;
    }
}
PlayerTheme.discriminator = undefined;
PlayerTheme.attributeTypeMap = [
    {
        name: 'asset',
        baseName: 'asset',
        type: 'Asset',
        format: '',
    },
    {
        name: 'controls',
        baseName: 'controls',
        type: 'Controls',
        format: '',
    },
    {
        name: 'createdAt',
        baseName: 'created_at',
        type: 'string',
        format: '',
    },
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
        format: '',
    },
    {
        name: 'isDefault',
        baseName: 'is_default',
        type: 'boolean',
        format: '',
    },
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: 'theme',
        baseName: 'theme',
        type: 'Theme',
        format: '',
    },
    {
        name: 'userId',
        baseName: 'user_id',
        type: 'string',
        format: '',
    },
];
exports.default = PlayerTheme;
