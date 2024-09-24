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
class UpdateWebhookRequest {
    static getAttributeTypeMap() {
        return UpdateWebhookRequest.attributeTypeMap;
    }
}
UpdateWebhookRequest.discriminator = undefined;
UpdateWebhookRequest.attributeTypeMap = [
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
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: 'url',
        baseName: 'url',
        type: 'string',
        format: '',
    },
];
exports.default = UpdateWebhookRequest;
