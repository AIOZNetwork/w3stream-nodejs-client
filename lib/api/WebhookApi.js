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
class WebhookApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Webhooks can push notifications to your server, rather than polling w3stream for changes
     * Create webhook
     * @param request Create Webhook input
     */
    async create(request = {}) {
        return this.createWithResponseHeaders(request).then((res) => res.body);
    }
    /**
     * Webhooks can push notifications to your server, rather than polling w3stream for changes
     * Create webhook
     * @param request Create Webhook input
     */
    async createWithResponseHeaders(request = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling create.');
        }
        // Path Params
        const localVarPath = '/webhooks'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
            'application/x-www-form-urlencoded',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(request, 'CreateWebhookRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'CreateWebhookResponse', ''),
            };
        });
    }
    /**
     * Retrieve webhook details by id.
     * Get user's webhook by id
     * @param id webhook&#39;s id
     */
    async get(id) {
        return this.getWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Retrieve webhook details by id.
     * Get user's webhook by id
     * @param id webhook&#39;s id
     */
    async getWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        // Path Params
        const localVarPath = '/webhooks/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetUserWebhookResponse', ''),
            };
        });
    }
    /**
     * This endpoint will update the indicated webhook.
     * Update event webhook
     * @param id webhook&#39;s id
     * @param request Update Webhook input, events example: video.encoding.quality.completed
     */
    async update(id, request = {}) {
        return this.updateWithResponseHeaders(id, request).then((res) => res.body);
    }
    /**
     * This endpoint will update the indicated webhook.
     * Update event webhook
     * @param id webhook&#39;s id
     * @param request Update Webhook input, events example: video.encoding.quality.completed
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
        const localVarPath = '/webhooks/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
            'application/x-www-form-urlencoded',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(request, 'UpdateWebhookRequest', ''), contentType);
        queryParams.method = 'PATCH';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
    /**
     * This method will delete the indicated webhook.
     * Delete webhook
     * @param id Webhook ID
     */
    async delete(id) {
        return this.deleteWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * This method will delete the indicated webhook.
     * Delete webhook
     * @param id Webhook ID
     */
    async deleteWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling delete.');
        }
        // Path Params
        const localVarPath = '/webhooks/{id}'
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
     * This method returns a list of your webhooks (with all their details).
  
  You can filter what the webhook list that the API returns using the parameters described below.
     * Get list webhooks
     * @param {Object} searchParams
     * @param { string } searchParams.search only support search by name
     * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     * @param { boolean } searchParams.encodingFinished search by event encoding finished
     * @param { boolean } searchParams.encodingStarted search by event encoding started
     * @param { boolean } searchParams.fileReceived search by event file received
     */
    async list(args = {}) {
        return this.listWithResponseHeaders(args).then((res) => res.body);
    }
    /**
     * This method returns a list of your webhooks (with all their details).
  
  You can filter what the webhook list that the API returns using the parameters described below.
     * Get list webhooks
     * @param {Object} searchParams
     * @param { string } searchParams.search only support search by name
     * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     * @param { boolean } searchParams.encodingFinished search by event encoding finished
     * @param { boolean } searchParams.encodingStarted search by event encoding started
     * @param { boolean } searchParams.fileReceived search by event file received
     */
    async listWithResponseHeaders({ search, sortBy, orderBy, offset, limit, encodingFinished, encodingStarted, fileReceived, } = {}) {
        const queryParams = {};
        queryParams.headers = {};
        // Path Params
        const localVarPath = '/webhooks'.substring(1);
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
        if (encodingFinished !== undefined) {
            urlSearchParams.append('encoding_finished', ObjectSerializer_1.default.serialize(encodingFinished, 'boolean', ''));
        }
        if (encodingStarted !== undefined) {
            urlSearchParams.append('encoding_started', ObjectSerializer_1.default.serialize(encodingStarted, 'boolean', ''));
        }
        if (fileReceived !== undefined) {
            urlSearchParams.append('file_received', ObjectSerializer_1.default.serialize(fileReceived, 'boolean', ''));
        }
        queryParams.searchParams = urlSearchParams;
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetWebhooksListResponse', ''),
            };
        });
    }
    /**
     * This method will check the indicated webhook.
     * Check webhook by id
     * @param id webhook&#39;s id
     */
    async check(id) {
        return this.checkWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * This method will check the indicated webhook.
     * Check webhook by id
     * @param id webhook&#39;s id
     */
    async checkWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling check.');
        }
        // Path Params
        const localVarPath = '/webhooks/check/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
}
exports.default = WebhookApi;
