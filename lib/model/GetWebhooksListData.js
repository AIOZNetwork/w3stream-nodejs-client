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
class GetWebhooksListData {
    static getAttributeTypeMap() {
        return GetWebhooksListData.attributeTypeMap;
    }
}
GetWebhooksListData.discriminator = undefined;
GetWebhooksListData.attributeTypeMap = [
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
        format: '',
    },
    {
        name: 'webhooks',
        baseName: 'webhooks',
        type: 'Array<Webhook>',
        format: '',
    },
];
exports.default = GetWebhooksListData;
