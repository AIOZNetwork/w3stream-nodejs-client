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
class Controls {
    static getAttributeTypeMap() {
        return Controls.attributeTypeMap;
    }
}
Controls.discriminator = undefined;
Controls.attributeTypeMap = [
    {
        name: 'enableApi',
        baseName: 'enable_api',
        type: 'boolean',
        format: '',
    },
    {
        name: 'enableControls',
        baseName: 'enable_controls',
        type: 'boolean',
        format: '',
    },
    {
        name: 'forceAutoplay',
        baseName: 'force_autoplay',
        type: 'boolean',
        format: '',
    },
    {
        name: 'forceLoop',
        baseName: 'force_loop',
        type: 'boolean',
        format: '',
    },
    {
        name: 'hideTitle',
        baseName: 'hide_title',
        type: 'boolean',
        format: '',
    },
];
exports.default = Controls;
