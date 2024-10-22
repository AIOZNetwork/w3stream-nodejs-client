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
class GetLiveStreamKeysListData {
    static getAttributeTypeMap() {
        return GetLiveStreamKeysListData.attributeTypeMap;
    }
}
GetLiveStreamKeysListData.discriminator = undefined;
GetLiveStreamKeysListData.attributeTypeMap = [
    {
        name: 'liveStreamKeys',
        baseName: 'live_stream_keys',
        type: 'Array<GetLiveStreamKeyData>',
        format: '',
    },
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
        format: '',
    },
];
exports.default = GetLiveStreamKeysListData;
