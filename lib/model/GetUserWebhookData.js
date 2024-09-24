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
class GetUserWebhookData {
    static getAttributeTypeMap() {
        return GetUserWebhookData.attributeTypeMap;
    }
}
GetUserWebhookData.discriminator = undefined;
GetUserWebhookData.attributeTypeMap = [
    {
        name: 'webhook',
        baseName: 'webhook',
        type: 'Webhook',
        format: '',
    },
];
exports.default = GetUserWebhookData;
