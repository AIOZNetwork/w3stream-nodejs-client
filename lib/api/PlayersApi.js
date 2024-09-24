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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const url_1 = require("url");
const form_data_1 = __importDefault(require("form-data"));
const ObjectSerializer_1 = __importDefault(require("../ObjectSerializer"));
const stream_1 = require("stream");
const HttpClient_1 = require("../HttpClient");
/**
 * no description
 */
class PlayersApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Create a player for your video, and customize it.
     * Create a player theme
     * @param request Player theme input
     */
    async create(request = {}) {
        return this.createWithResponseHeaders(request).then((res) => res.body);
    }
    /**
     * Create a player for your video, and customize it.
     * Create a player theme
     * @param request Player theme input
     */
    async createWithResponseHeaders(request = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling create.');
        }
        // Path Params
        const localVarPath = '/players'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(request, 'CreatePlayerThemeRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'CreatePlayerThemesResponse', ''),
            };
        });
    }
    /**
     * Retrieve a player theme by its ID, as well as details about it.
     * Get a player theme by ID
     * @param id Player theme ID
     */
    async get(id) {
        return this.getWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Retrieve a player theme by its ID, as well as details about it.
     * Get a player theme by ID
     * @param id Player theme ID
     */
    async getWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        // Path Params
        const localVarPath = '/players/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetPlayerThemeByIdResponse', ''),
            };
        });
    }
    /**
     * Use a player ID to update specific details for a player.
     * Update a player theme by ID
     * @param id Player theme ID
     * @param input Player theme input
     */
    async update(id, input = {}) {
        return this.updateWithResponseHeaders(id, input).then((res) => res.body);
    }
    /**
     * Use a player ID to update specific details for a player.
     * Update a player theme by ID
     * @param id Player theme ID
     * @param input Player theme input
     */
    async updateWithResponseHeaders(id, input = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling update.');
        }
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling update.');
        }
        // Path Params
        const localVarPath = '/players/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(input, 'UpdatePlayerThemeRequest', ''), contentType);
        queryParams.method = 'PATCH';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'UpdatePlayerThemeResponse', ''),
            };
        });
    }
    /**
     * Delete a player if you no longer need it. You can delete any player that you have the player ID for.
     * Delete a player theme by ID
     * @param id Player theme ID
     */
    async delete(id) {
        return this.deleteWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Delete a player if you no longer need it. You can delete any player that you have the player ID for.
     * Delete a player theme by ID
     * @param id Player theme ID
     */
    async deleteWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling delete.');
        }
        // Path Params
        const localVarPath = '/players/{id}'
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
     * Retrieve a list of all the player themes you created, as well as details about each one.
     * List all player themes
     * @param {Object} searchParams
     * @param { string } searchParams.search only support search by name
     * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    async list(args = {}) {
        return this.listWithResponseHeaders(args).then((res) => res.body);
    }
    /**
     * Retrieve a list of all the player themes you created, as well as details about each one.
     * List all player themes
     * @param {Object} searchParams
     * @param { string } searchParams.search only support search by name
     * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    async listWithResponseHeaders({ search, sortBy, orderBy, offset, limit, } = {}) {
        const queryParams = {};
        queryParams.headers = {};
        // Path Params
        const localVarPath = '/players'.substring(1);
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
        if (search !== undefined) {
            urlSearchParams.append('search', ObjectSerializer_1.default.serialize(search, 'string', ''));
        }
        if (sortBy !== undefined) {
            urlSearchParams.append('sort_by', ObjectSerializer_1.default.serialize(sortBy, "'created_at' | 'name'", ''));
        }
        if (orderBy !== undefined) {
            urlSearchParams.append('order_by', ObjectSerializer_1.default.serialize(orderBy, "'asc' | 'desc'", ''));
        }
        if (offset !== undefined) {
            urlSearchParams.append('offset', ObjectSerializer_1.default.serialize(offset, 'number', ''));
        }
        if (limit !== undefined) {
            urlSearchParams.append('limit', ObjectSerializer_1.default.serialize(limit, 'number', ''));
        }
        queryParams.searchParams = urlSearchParams;
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetPlayerThemeResponse', ''),
            };
        });
    }
    /**
     * Upload a logo for a player theme by its ID.
     * Upload a logo for a player theme by ID
     * @param id Player theme ID
     * @param file The uploaded file (JPG or PNG)
     * @param link The link to the logo (optional if a file is provided)
     */
    async uploadLogo(id, file, link) {
        return this.uploadLogoWithResponseHeaders(id, file, link).then((res) => res.body);
    }
    /**
     * Upload a logo for a player theme by its ID.
     * Upload a logo for a player theme by ID
     * @param id Player theme ID
     * @param file The uploaded file (JPG or PNG)
     * @param link The link to the logo (optional if a file is provided)
     */
    async uploadLogoWithResponseHeaders(id, file, link) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling uploadLogo.');
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
        if (link === null || link === undefined) {
            throw new Error('Required parameter link was null or undefined when calling uploadLogo.');
        }
        // Path Params
        const localVarPath = '/players/{id}/logo'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'POST';
        const formData = new form_data_1.default();
        formData.append(fileName, fileBuffer, fileName);
        if (typeof link !== undefined) {
            formData.append('link', link);
        }
        queryParams.body = formData;
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'UploadLogoByIdResponse', ''),
            };
        });
    }
    /**
     * Delete the logo associated to a player.
     * Delete a logo for a player theme by ID
     * @param id Player theme ID
     */
    async deleteLogo(id) {
        return this.deleteLogoWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Delete the logo associated to a player.
     * Delete a logo for a player theme by ID
     * @param id Player theme ID
     */
    async deleteLogoWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteLogo.');
        }
        // Path Params
        const localVarPath = '/players/{id}/logo'
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
     * Add a player theme to a video by Id.
     * Add a player theme to a video
     * @param request Add player theme to video request
     */
    async addPlayer(request = {}) {
        return this.addPlayerWithResponseHeaders(request).then((res) => res.body);
    }
    /**
     * Add a player theme to a video by Id.
     * Add a player theme to a video
     * @param request Add player theme to video request
     */
    async addPlayerWithResponseHeaders(request = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addPlayer.');
        }
        // Path Params
        const localVarPath = '/players/add-player'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(request, 'AddPlayerThemesToVideoRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
    /**
     * Remove a player theme from a video by Id.
     * Remove a player theme from a video
     * @param request Remove player theme from video request
     */
    async removePlayer(request = {}) {
        return this.removePlayerWithResponseHeaders(request).then((res) => res.body);
    }
    /**
     * Remove a player theme from a video by Id.
     * Remove a player theme from a video
     * @param request Remove player theme from video request
     */
    async removePlayerWithResponseHeaders(request = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling removePlayer.');
        }
        // Path Params
        const localVarPath = '/players/remove-player'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(request, 'RemovePlayerThemesFromVideoRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
}
exports.default = PlayersApi;
