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
class GetVideoListData {
    static getAttributeTypeMap() {
        return GetVideoListData.attributeTypeMap;
    }
}
GetVideoListData.discriminator = undefined;
GetVideoListData.attributeTypeMap = [
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
        format: '',
    },
    {
        name: 'videos',
        baseName: 'videos',
        type: 'Array<VideoObject>',
        format: '',
    },
];
exports.default = GetVideoListData;
