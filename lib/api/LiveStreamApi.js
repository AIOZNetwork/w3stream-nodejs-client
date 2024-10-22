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
class LiveStreamApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Create live stream key
     * Create live stream key
     * @param input CreateLiveStreamKeyRequest
     */
    async createLiveStreamKey(input = {}) {
        return this.createLiveStreamKeyWithResponseHeaders(input).then((res) => res.body);
    }
    /**
     * Create live stream key
     * Create live stream key
     * @param input CreateLiveStreamKeyRequest
     */
    async createLiveStreamKeyWithResponseHeaders(input = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling createLiveStreamKey.');
        }
        // Path Params
        const localVarPath = '/live_streams'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(input, 'CreateLiveStreamKeyRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'CreateLiveStreamKeyResponse', ''),
            };
        });
    }
    /**
     * Creates a new live stream video with the provided details
     * Create a new live stream video
     * @param id Live stream key ID
     * @param input CreateStreamingRequest
     */
    async createStreaming(id, input = {}) {
        return this.createStreamingWithResponseHeaders(id, input).then((res) => res.body);
    }
    /**
     * Creates a new live stream video with the provided details
     * Create a new live stream video
     * @param id Live stream key ID
     * @param input CreateStreamingRequest
     */
    async createStreamingWithResponseHeaders(id, input = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling createStreaming.');
        }
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling createStreaming.');
        }
        // Path Params
        const localVarPath = '/live_streams/{id}/streamings'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(input, 'CreateStreamingRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'CreateStreamingResponse', ''),
            };
        });
    }
    /**
     * Delete a live stream key by ID
     * Delete live stream key
     * @param id Live stream key ID
     */
    async deleteLiveStreamKey(id) {
        return this.deleteLiveStreamKeyWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Delete a live stream key by ID
     * Delete live stream key
     * @param id Live stream key ID
     */
    async deleteLiveStreamKeyWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteLiveStreamKey.');
        }
        // Path Params
        const localVarPath = '/live_streams/{id}'
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
     * Delete a live stream video by ID
     * Delete live stream video
     * @param id Live stream video ID
     */
    async deleteLiveStreamVideo(id) {
        return this.deleteLiveStreamVideoWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Delete a live stream video by ID
     * Delete live stream video
     * @param id Live stream video ID
     */
    async deleteLiveStreamVideoWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteLiveStreamVideo.');
        }
        // Path Params
        const localVarPath = '/live_streams/{id}/videos'
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
     * Get live stream key
     * Get live stream key
     * @param id ID
     */
    async getLiveStreamKey(id) {
        return this.getLiveStreamKeyWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Get live stream key
     * Get live stream key
     * @param id ID
     */
    async getLiveStreamKeyWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLiveStreamKey.');
        }
        // Path Params
        const localVarPath = '/live_streams/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetLiveStreamKeyResponse', ''),
            };
        });
    }
    /**
     * Get live stream key list
     * Get live stream key list
     * @param {Object} searchParams
     * @param { string } searchParams.search only support search by name
     * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0.
     * @param { number } searchParams.limit results per page.
     */
    async getLiveStreamKeys(args = {}) {
        return this.getLiveStreamKeysWithResponseHeaders(args).then((res) => res.body);
    }
    /**
     * Get live stream key list
     * Get live stream key list
     * @param {Object} searchParams
     * @param { string } searchParams.search only support search by name
     * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0.
     * @param { number } searchParams.limit results per page.
     */
    async getLiveStreamKeysWithResponseHeaders({ search, sortBy, orderBy, offset, limit, } = {}) {
        const queryParams = {};
        queryParams.headers = {};
        // Path Params
        const localVarPath = '/live_streams'.substring(1);
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
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetLiveStreamKeysListResponse', ''),
            };
        });
    }
    /**
     * Get a specific live stream video by ID
     * Get live stream video
     * @param id Live stream video ID
     */
    async getLiveStreamVideo(id) {
        return this.getLiveStreamVideoWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Get a specific live stream video by ID
     * Get live stream video
     * @param id Live stream video ID
     */
    async getLiveStreamVideoWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLiveStreamVideo.');
        }
        // Path Params
        const localVarPath = '/live_streams/{id}/videos'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetLiveStreamVideoResponse', ''),
            };
        });
    }
    /**
     * Get live stream video public for a specific live stream key
     * Get live stream video public
     * @param id Live stream key ID
     */
    async getLiveStreamVideoPublic(id) {
        return this.getLiveStreamVideoPublicWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Get live stream video public for a specific live stream key
     * Get live stream video public
     * @param id Live stream key ID
     */
    async getLiveStreamVideoPublicWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLiveStreamVideoPublic.');
        }
        // Path Params
        const localVarPath = '/live_streams/player/{id}/videos'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetLiveStreamVideoPublicResponse', ''),
            };
        });
    }
    /**
     * Get live stream videos for a specific live stream key
     * Get live stream videos
     * @param id Live stream key ID
     * @param data data
     */
    async getLiveStreamVideos(id, data = {}) {
        return this.getLiveStreamVideosWithResponseHeaders(id, data).then((res) => res.body);
    }
    /**
     * Get live stream videos for a specific live stream key
     * Get live stream videos
     * @param id Live stream key ID
     * @param data data
     */
    async getLiveStreamVideosWithResponseHeaders(id, data = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLiveStreamVideos.');
        }
        if (data === null || data === undefined) {
            throw new Error('Required parameter data was null or undefined when calling getLiveStreamVideos.');
        }
        // Path Params
        const localVarPath = '/live_streams/{id}/videos'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(data, 'GetLiveStreamVideosRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetLiveStreamVideosResponse', ''),
            };
        });
    }
    /**
     * Get live stream video streaming for a specific live stream key
     * Get live stream video streaming
     * @param id Live stream key ID
     * @param streamId Stream ID
     */
    async getStreaming(id, streamId) {
        return this.getStreamingWithResponseHeaders(id, streamId).then((res) => res.body);
    }
    /**
     * Get live stream video streaming for a specific live stream key
     * Get live stream video streaming
     * @param id Live stream key ID
     * @param streamId Stream ID
     */
    async getStreamingWithResponseHeaders(id, streamId) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getStreaming.');
        }
        if (streamId === null || streamId === undefined) {
            throw new Error('Required parameter streamId was null or undefined when calling getStreaming.');
        }
        // Path Params
        const localVarPath = '/live_streams/{id}/streamings/{stream_id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'stream_id' + '}', encodeURIComponent(String(streamId)));
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetStreamingResponse', ''),
            };
        });
    }
    /**
     * Get live stream video streamings for a specific live stream key
     * Get live stream video streamings
     * @param id Live stream key ID
     */
    async getStreamings(id) {
        return this.getStreamingsWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Get live stream video streamings for a specific live stream key
     * Get live stream video streamings
     * @param id Live stream key ID
     */
    async getStreamingsWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getStreamings.');
        }
        // Path Params
        const localVarPath = '/live_streams/{id}/streamings'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetStreamingsResponse', ''),
            };
        });
    }
    /**
     * Update a live stream key by ID
     * Update live stream key
     * @param id Live stream key ID
     * @param input UpdateLiveStreamKeyRequest
     */
    async updateLiveStreamKey(id, input = {}) {
        return this.updateLiveStreamKeyWithResponseHeaders(id, input).then((res) => res.body);
    }
    /**
     * Update a live stream key by ID
     * Update live stream key
     * @param id Live stream key ID
     * @param input UpdateLiveStreamKeyRequest
     */
    async updateLiveStreamKeyWithResponseHeaders(id, input = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateLiveStreamKey.');
        }
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling updateLiveStreamKey.');
        }
        // Path Params
        const localVarPath = '/live_streams/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(input, 'UpdateLiveStreamKeyRequest', ''), contentType);
        queryParams.method = 'PUT';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'UpdateLiveStreamKeyResponse', ''),
            };
        });
    }
    /**
     * Update live stream video. You can only update while live streaming.
     * Update live stream video
     * @param id Live stream key ID
     * @param data data
     */
    async updateLiveStreamVideo(id, data = {}) {
        return this.updateLiveStreamVideoWithResponseHeaders(id, data).then((res) => res.body);
    }
    /**
     * Update live stream video. You can only update while live streaming.
     * Update live stream video
     * @param id Live stream key ID
     * @param data data
     */
    async updateLiveStreamVideoWithResponseHeaders(id, data = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateLiveStreamVideo.');
        }
        if (data === null || data === undefined) {
            throw new Error('Required parameter data was null or undefined when calling updateLiveStreamVideo.');
        }
        // Path Params
        const localVarPath = '/live_streams/{id}/streamings'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(data, 'UpdateLiveStreamVideoRequest', ''), contentType);
        queryParams.method = 'PUT';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
}
exports.default = LiveStreamApi;
