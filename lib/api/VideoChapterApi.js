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
class VideoChapterApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Create a VTT file to add chapters to your video. Chapters help break the video into sections.
     * Create a video chapter
     * @param id Video ID
     * @param lan Language
     * @param file VTT File
     */
    async create(id, lan, file) {
        return this.createWithResponseHeaders(id, lan, file).then((res) => res.body);
    }
    /**
     * Create a VTT file to add chapters to your video. Chapters help break the video into sections.
     * Create a video chapter
     * @param id Video ID
     * @param lan Language
     * @param file VTT File
     */
    async createWithResponseHeaders(id, lan, file) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling create.');
        }
        if (lan === null || lan === undefined) {
            throw new Error('Required parameter lan was null or undefined when calling create.');
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
        const localVarPath = '/videos/{id}/chapters/{lan}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'lan' + '}', encodeURIComponent(String(lan)));
        queryParams.method = 'POST';
        const formData = new form_data_1.default();
        formData.append(fileName, fileBuffer, fileName);
        queryParams.body = formData;
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'CreateVideoChapterResponse', ''),
            };
        });
    }
    /**
     * Get a chapter for by video id in a specific language.
     * Get video chapters
     * @param {Object} searchParams
     * @param { string } searchParams.id Video ID
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    async get(args) {
        return this.getWithResponseHeaders(args).then((res) => res.body);
    }
    /**
     * Get a chapter for by video id in a specific language.
     * Get video chapters
     * @param {Object} searchParams
     * @param { string } searchParams.id Video ID
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    async getWithResponseHeaders({ id, offset, limit, }) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling get.');
        }
        // Path Params
        const localVarPath = '/videos/{id}/chapters'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
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
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetVideoChaptersResponse', ''),
            };
        });
    }
    /**
     * Delete a chapter in a specific language by providing the video ID for the video you want to delete the chapter from and the language the chapter is in.
     * Delete a video chapter
     * @param id Video ID
     * @param lan Language
     */
    async delete(id, lan) {
        return this.deleteWithResponseHeaders(id, lan).then((res) => res.body);
    }
    /**
     * Delete a chapter in a specific language by providing the video ID for the video you want to delete the chapter from and the language the chapter is in.
     * Delete a video chapter
     * @param id Video ID
     * @param lan Language
     */
    async deleteWithResponseHeaders(id, lan) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling delete.');
        }
        if (lan === null || lan === undefined) {
            throw new Error('Required parameter lan was null or undefined when calling delete.');
        }
        // Path Params
        const localVarPath = '/videos/{id}/chapters/{lan}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'lan' + '}', encodeURIComponent(String(lan)));
        queryParams.method = 'DELETE';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
}
exports.default = VideoChapterApi;
