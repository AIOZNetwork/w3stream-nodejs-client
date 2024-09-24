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
class Theme {
    static getAttributeTypeMap() {
        return Theme.attributeTypeMap;
    }
}
Theme.discriminator = undefined;
Theme.attributeTypeMap = [
    {
        name: 'controlBarBackgroundColor',
        baseName: 'control_bar_background_color',
        type: 'string',
        format: '',
    },
    {
        name: 'controlBarHeight',
        baseName: 'control_bar_height',
        type: 'string',
        format: '',
    },
    {
        name: 'mainColor',
        baseName: 'main_color',
        type: 'string',
        format: '',
    },
    {
        name: 'menuBackgroundColor',
        baseName: 'menu_background_color',
        type: 'string',
        format: '',
    },
    {
        name: 'menuItemBackgroundHover',
        baseName: 'menu_item_background_hover',
        type: 'string',
        format: '',
    },
    {
        name: 'progressBarCircleSize',
        baseName: 'progress_bar_circle_size',
        type: 'string',
        format: '',
    },
    {
        name: 'progressBarHeight',
        baseName: 'progress_bar_height',
        type: 'string',
        format: '',
    },
    {
        name: 'textColor',
        baseName: 'text_color',
        type: 'string',
        format: '',
    },
    {
        name: 'textTrackBackground',
        baseName: 'text_track_background',
        type: 'string',
        format: '',
    },
    {
        name: 'textTrackColor',
        baseName: 'text_track_color',
        type: 'string',
        format: '',
    },
];
exports.default = Theme;
