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
class CreatePlayerThemesData {
    static getAttributeTypeMap() {
        return CreatePlayerThemesData.attributeTypeMap;
    }
}
CreatePlayerThemesData.discriminator = undefined;
CreatePlayerThemesData.attributeTypeMap = [
    {
        name: 'playerTheme',
        baseName: 'player_theme',
        type: 'PlayerTheme',
        format: '',
    },
];
exports.default = CreatePlayerThemesData;
