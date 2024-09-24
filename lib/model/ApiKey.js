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
class ApiKey {
    static getAttributeTypeMap() {
        return ApiKey.attributeTypeMap;
    }
}
ApiKey.discriminator = undefined;
ApiKey.attributeTypeMap = [
    {
        name: 'createdAt',
        baseName: 'created_at',
        type: 'string',
        format: '',
    },
    {
        name: 'expiredAt',
        baseName: 'expired_at',
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
        name: 'lastUsedAt',
        baseName: 'last_used_at',
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
        name: 'publicKey',
        baseName: 'public_key',
        type: 'string',
        format: '',
    },
    {
        name: 'secret',
        baseName: 'secret',
        type: 'string',
        format: '',
    },
    {
        name: 'truncatedSecret',
        baseName: 'truncated_secret',
        type: 'string',
        format: '',
    },
    {
        name: 'ttl',
        baseName: 'ttl',
        type: 'string',
        format: '',
    },
    {
        name: 'type',
        baseName: 'type',
        type: 'string',
        format: '',
    },
    {
        name: 'updatedAt',
        baseName: 'updated_at',
        type: 'string',
        format: '',
    },
];
exports.default = ApiKey;
