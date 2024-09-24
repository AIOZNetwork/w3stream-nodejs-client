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
const url_1 = require("url");
const ObjectSerializer_1 = __importDefault(require("../ObjectSerializer"));
/**
 * no description
 */
class ApiKeyApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * This endpoint enables you to create a new API key for a specific project.
     * Create API key
     * @param request api key&#39;s data
     */
    async create(request = {}) {
        return this.createWithResponseHeaders(request).then((res) => res.body);
    }
    /**
     * This endpoint enables you to create a new API key for a specific project.
     * Create API key
     * @param request api key&#39;s data
     */
    async createWithResponseHeaders(request = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling create.');
        }
        // Path Params
        const localVarPath = '/api_keys'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
            'application/x-www-form-urlencoded',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(request, 'CreateApiKeyRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'CreateApiKeyResponse', ''),
            };
        });
    }
    /**
     * This endpoint enables you to rename an API key from a specific project.
     * Rename api key
     * @param id api key id
     * @param request new api key name
     */
    async update(id, request = {}) {
        return this.updateWithResponseHeaders(id, request).then((res) => res.body);
    }
    /**
     * This endpoint enables you to rename an API key from a specific project.
     * Rename api key
     * @param id api key id
     * @param request new api key name
     */
    async updateWithResponseHeaders(id, request = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling update.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling update.');
        }
        // Path Params
        const localVarPath = '/api_keys/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
            'application/x-www-form-urlencoded',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(request, 'RenameAPIKeyRequest', ''), contentType);
        queryParams.method = 'PATCH';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
    /**
     * This endpoint enables you to delete an API key from a specific project.
     * Delete API key
     * @param id API key&#39;s ID
     */
    async delete(id) {
        return this.deleteWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * This endpoint enables you to delete an API key from a specific project.
     * Delete API key
     * @param id API key&#39;s ID
     */
    async deleteWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling delete.');
        }
        // Path Params
        const localVarPath = '/api_keys/{id}'
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
     * Retrieve a list of all API keys for the current workspace.
     * Get list API keys
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
     * Retrieve a list of all API keys for the current workspace.
     * Get list API keys
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
        const localVarPath = '/api_keys'.substring(1);
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
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetApiKeysResponse', ''),
            };
        });
    }
}
exports.default = ApiKeyApi;
