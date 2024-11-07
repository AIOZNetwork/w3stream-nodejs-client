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
class MoveVideoInPlaylistRequest {
    static getAttributeTypeMap() {
        return MoveVideoInPlaylistRequest.attributeTypeMap;
    }
}
MoveVideoInPlaylistRequest.discriminator = undefined;
MoveVideoInPlaylistRequest.attributeTypeMap = [
    {
        name: 'currentId',
        baseName: 'current_id',
        type: 'string',
        format: '',
    },
    {
        name: 'nextId',
        baseName: 'next_id',
        type: 'string',
        format: '',
    },
    {
        name: 'previousId',
        baseName: 'previous_id',
        type: 'string',
        format: '',
    },
];
exports.default = MoveVideoInPlaylistRequest;
