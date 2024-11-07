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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const url_1 = require("url");
const form_data_1 = __importDefault(require("form-data"));
const ObjectSerializer_1 = __importStar(require("../ObjectSerializer"));
const stream_1 = require("stream");
const HttpClient_1 = require("../HttpClient");
/**
 * no description
 */
class PlaylistApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Delete the thumbnail of a specific playlist for the authenticated user
     * Delete a playlist thumbnail
     * @param id Playlist ID
     */
    async deleteThumbnail(id) {
        return this.deleteThumbnailWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Delete the thumbnail of a specific playlist for the authenticated user
     * Delete a playlist thumbnail
     * @param id Playlist ID
     */
    async deleteThumbnailWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteThumbnail.');
        }
        // Path Params
        const localVarPath = '/playlists/{id}/thumbnail'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'DELETE';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
    /**
     * Add a specific video to a playlist for the authenticated user
     * Add a video to a playlist
     * @param id Playlist ID
     * @param request Video details
     */
    async addItem(id, request = {}) {
        return this.addItemWithResponseHeaders(id, request).then((res) => res.body);
    }
    /**
     * Add a specific video to a playlist for the authenticated user
     * Add a video to a playlist
     * @param id Playlist ID
     * @param request Video details
     */
    async addItemWithResponseHeaders(id, request = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addItem.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addItem.');
        }
        // Path Params
        const localVarPath = '/playlists/{id}/items'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(request, 'AddVideoToPlaylistRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
    /**
     * Create a new playlist for the authenticated user
     * Create a new playlist
     * @param payload Create playlist request
     */
    async createPlaylist(payload = {}) {
        return this.createPlaylistWithResponseHeaders(payload).then((res) => res.body);
    }
    /**
     * Create a new playlist for the authenticated user
     * Create a new playlist
     * @param payload Create playlist request
     */
    async createPlaylistWithResponseHeaders(payload = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (payload === null || payload === undefined) {
            throw new Error('Required parameter payload was null or undefined when calling createPlaylist.');
        }
        // Path Params
        const localVarPath = '/playlists/create'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(payload, 'CreatePlaylistRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'CreatePlaylistResponse', ''),
            };
        });
    }
    /**
     * Remove a specific video from a playlist for the authenticated user
     * Remove a video from a playlist
     * @param id Playlist ID
     * @param itemId Playlist Item ID
     */
    async deleteItem(id, itemId) {
        return this.deleteItemWithResponseHeaders(id, itemId).then((res) => res.body);
    }
    /**
     * Remove a specific video from a playlist for the authenticated user
     * Remove a video from a playlist
     * @param id Playlist ID
     * @param itemId Playlist Item ID
     */
    async deleteItemWithResponseHeaders(id, itemId) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteItem.');
        }
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling deleteItem.');
        }
        // Path Params
        const localVarPath = '/playlists/{id}/items/{item_id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));
        queryParams.method = 'DELETE';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
    /**
     * Delete a specific playlist by its ID for the authenticated user
     * Delete a playlist by ID
     * @param id Playlist ID
     */
    async deletePlaylist(id) {
        return this.deletePlaylistWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Delete a specific playlist by its ID for the authenticated user
     * Delete a playlist by ID
     * @param id Playlist ID
     */
    async deletePlaylistWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deletePlaylist.');
        }
        // Path Params
        const localVarPath = '/playlists/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'DELETE';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
    /**
     * Retrieve a specific playlist by its ID for the current user.
     * Get playlist by ID
     * @param {Object} searchParams
     * @param { string } searchParams.id Playlist ID
     * @param { &#39;created_at&#39; | &#39;title&#39; } searchParams.sortBy Sort field
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy Sort order
     */
    async getPlaylistById(args) {
        return this.getPlaylistByIdWithResponseHeaders(args).then((res) => res.body);
    }
    /**
     * Retrieve a specific playlist by its ID for the current user.
     * Get playlist by ID
     * @param {Object} searchParams
     * @param { string } searchParams.id Playlist ID
     * @param { &#39;created_at&#39; | &#39;title&#39; } searchParams.sortBy Sort field
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy Sort order
     */
    async getPlaylistByIdWithResponseHeaders({ id, sortBy, orderBy, }) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPlaylistById.');
        }
        // Path Params
        const localVarPath = '/playlists/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
        if (sortBy !== undefined) {
            urlSearchParams.append('sort_by', ObjectSerializer_1.default.serialize(sortBy, "'created_at' | 'title'", ''));
        }
        if (orderBy !== undefined) {
            urlSearchParams.append('order_by', ObjectSerializer_1.default.serialize(orderBy, "'asc' | 'desc'", ''));
        }
        queryParams.searchParams = urlSearchParams;
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetPlaylistByIdResponse', ''),
            };
        });
    }
    /**
     * Get a specific playlist public by its ID
     * Get a playlist public
     * @param id Playlist ID
     */
    async getPlaylistInfo(id) {
        return this.getPlaylistInfoWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Get a specific playlist public by its ID
     * Get a playlist public
     * @param id Playlist ID
     */
    async getPlaylistInfoWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPlaylistInfo.');
        }
        // Path Params
        const localVarPath = '/playlists/{id}/player.json'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'PublicPlaylistObject', ''),
            };
        });
    }
    /**
     * Retrieve a list of playlists for the authenticated user
     * Get user's playlists
     * @param payload Get playlist list request
     */
    async getPlaylists(payload = {}) {
        return this.getPlaylistsWithResponseHeaders(payload).then((res) => res.body);
    }
    /**
     * Retrieve a list of playlists for the authenticated user
     * Get user's playlists
     * @param payload Get playlist list request
     */
    async getPlaylistsWithResponseHeaders(payload = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (payload === null || payload === undefined) {
            throw new Error('Required parameter payload was null or undefined when calling getPlaylists.');
        }
        // Path Params
        const localVarPath = '/playlists'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(payload, 'GetPlaylistListRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetPlaylistListResponse', ''),
            };
        });
    }
    /**
     * Change the position of a video in a playlist for the authenticated user.
     * Move a video within a playlist
     * @param id Playlist ID
     * @param payload Move video details
     */
    async moveItems(id, payload = {}) {
        return this.moveItemsWithResponseHeaders(id, payload).then((res) => res.body);
    }
    /**
     * Change the position of a video in a playlist for the authenticated user.
     * Move a video within a playlist
     * @param id Playlist ID
     * @param payload Move video details
     */
    async moveItemsWithResponseHeaders(id, payload = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling moveItems.');
        }
        if (payload === null || payload === undefined) {
            throw new Error('Required parameter payload was null or undefined when calling moveItems.');
        }
        // Path Params
        const localVarPath = '/playlists/{id}/items'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(payload, 'MoveVideoInPlaylistRequest', ''), contentType);
        queryParams.method = 'PUT';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
    /**
     * Update details of a specific playlist for the authenticated user
     * Update a playlist
     * @param id Playlist ID
     * @param file Thumbnail
     * @param name Playlist name
     * @param tags Tags
     * @param metadata Metadata
     */
    async updatePlaylist(id, file, name, tags, metadata) {
        return this.updatePlaylistWithResponseHeaders(id, file, name, tags, metadata).then((res) => res.body);
    }
    /**
     * Update details of a specific playlist for the authenticated user
     * Update a playlist
     * @param id Playlist ID
     * @param file Thumbnail
     * @param name Playlist name
     * @param tags Tags
     * @param metadata Metadata
     */
    async updatePlaylistWithResponseHeaders(id, file, name, tags, metadata) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updatePlaylist.');
        }
        let fileName = 'file';
        let fileBuffer = file;
        if (typeof file === 'string') {
            fileName = path_1.default.basename(file);
            fileBuffer = (0, fs_1.createReadStream)(file);
        }
        if (file instanceof stream_1.Readable) {
            fileBuffer = await (0, HttpClient_1.readableToBuffer)(file);
        }
        // Path Params
        const localVarPath = '/playlists/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'PATCH';
        const formData = new form_data_1.default();
        formData.append(fileName, fileBuffer, fileName);
        if (typeof name !== undefined) {
            formData.append('name', name);
        }
        if (tags) {
            formData.append('tags', tags.join(ObjectSerializer_1.COLLECTION_FORMATS['csv']));
        }
        if (metadata) {
            formData.append('metadata', metadata.join(ObjectSerializer_1.COLLECTION_FORMATS['csv']));
        }
        queryParams.body = formData;
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
}
exports.default = PlaylistApi;
