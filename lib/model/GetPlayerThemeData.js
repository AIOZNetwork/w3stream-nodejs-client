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
class GetPlayerThemeData {
    static getAttributeTypeMap() {
        return GetPlayerThemeData.attributeTypeMap;
    }
}
GetPlayerThemeData.discriminator = undefined;
GetPlayerThemeData.attributeTypeMap = [
    {
        name: 'playerThemes',
        baseName: 'player_themes',
        type: 'Array<PlayerTheme>',
        format: '',
    },
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
        format: '',
    },
];
exports.default = GetPlayerThemeData;
