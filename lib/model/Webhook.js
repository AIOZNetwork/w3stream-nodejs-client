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
class Webhook {
    static getAttributeTypeMap() {
        return Webhook.attributeTypeMap;
    }
}
Webhook.discriminator = undefined;
Webhook.attributeTypeMap = [
    {
        name: 'createdAt',
        baseName: 'created_at',
        type: 'string',
        format: '',
    },
    {
        name: 'encodingFinished',
        baseName: 'encoding_finished',
        type: 'boolean',
        format: '',
    },
    {
        name: 'encodingStarted',
        baseName: 'encoding_started',
        type: 'boolean',
        format: '',
    },
    {
        name: 'fileReceived',
        baseName: 'file_received',
        type: 'boolean',
        format: '',
    },
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
        format: '',
    },
    {
        name: 'lastTriggeredAt',
        baseName: 'last_triggered_at',
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
        name: 'updatedAt',
        baseName: 'updated_at',
        type: 'string',
        format: '',
    },
    {
        name: 'url',
        baseName: 'url',
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
exports.default = Webhook;
