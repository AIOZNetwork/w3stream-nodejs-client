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
class WatermarkApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Create a new watermark by uploading a JPG or a PNG image.
     * Create a new watermark
     * @param file Watermark image file
     */
    async upload(file) {
        return this.uploadWithResponseHeaders(file).then((res) => res.body);
    }
    /**
     * Create a new watermark by uploading a JPG or a PNG image.
     * Create a new watermark
     * @param file Watermark image file
     */
    async uploadWithResponseHeaders(file) {
        const queryParams = {};
        queryParams.headers = {};
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
        const localVarPath = '/watermarks'.substring(1);
        queryParams.method = 'POST';
        const formData = new form_data_1.default();
        formData.append(fileName, fileBuffer, fileName);
        queryParams.body = formData;
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'CreateWatermarkResponse', ''),
            };
        });
    }
    /**
     * Delete a watermark.
     * Delete a watermark by ID
     * @param id Watermark ID
     */
    async delete(id) {
        return this.deleteWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Delete a watermark.
     * Delete a watermark by ID
     * @param id Watermark ID
     */
    async deleteWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling delete.');
        }
        // Path Params
        const localVarPath = '/watermarks/{id}'
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
     * List all watermarks associated with your workspace.
     * List all watermarks
     * @param {Object} searchParams
     * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    async list(args) {
        return this.listWithResponseHeaders(args).then((res) => res.body);
    }
    /**
     * List all watermarks associated with your workspace.
     * List all watermarks
     * @param {Object} searchParams
     * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    async listWithResponseHeaders({ sortBy, orderBy, offset, limit, }) {
        const queryParams = {};
        queryParams.headers = {};
        // Path Params
        const localVarPath = '/watermarks'.substring(1);
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
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
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetAllWatermarkResponse', ''),
            };
        });
    }
}
exports.default = WatermarkApi;
