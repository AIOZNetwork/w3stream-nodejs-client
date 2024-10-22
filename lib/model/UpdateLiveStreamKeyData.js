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
class UpdateLiveStreamKeyData {
    static getAttributeTypeMap() {
        return UpdateLiveStreamKeyData.attributeTypeMap;
    }
}
UpdateLiveStreamKeyData.discriminator = undefined;
UpdateLiveStreamKeyData.attributeTypeMap = [
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
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: 'rtmpUrl',
        baseName: 'rtmp_url',
        type: 'string',
        format: '',
    },
    {
        name: 'save',
        baseName: 'save',
        type: 'boolean',
        format: '',
    },
    {
        name: 'streamKey',
        baseName: 'stream_key',
        type: 'string',
        format: '',
    },
    {
        name: 'updatedAt',
        baseName: 'updated_at',
        type: 'string',
        format: '',
    },
    {
        name: 'userId',
        baseName: 'user_id',
        type: 'string',
        format: '',
    },
];
exports.default = UpdateLiveStreamKeyData;
