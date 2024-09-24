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
const ObjectSerializer_1 = __importDefault(require("../ObjectSerializer"));
const stream_1 = require("stream");
const HttpClient_1 = require("../HttpClient");
const crypto = __importStar(require("crypto"));
/**
 * no description
 */
class VideoApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Create a video object
     * Create video object
     * @param request video&#39;s info
     */
    async create(request = {}) {
        return this.createWithResponseHeaders(request).then((res) => res.body);
    }
    /**
     * Create a video object
     * Create video object
     * @param request video&#39;s info
     */
    async createWithResponseHeaders(request = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling create.');
        }
        // Path Params
        const localVarPath = '/videos/create'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
            'application/x-www-form-urlencoded',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(request, 'CreateVideoRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'CreateVideoResponse', ''),
            };
        });
    }
    /**
     * update video info
     * @param id video&#39;s id
     * @param input input
     */
    async update(id, input = {}) {
        return this.updateWithResponseHeaders(id, input).then((res) => res.body);
    }
    /**
     * update video info
     * @param id video&#39;s id
     * @param input input
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
        const localVarPath = '/videos/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(input, 'UpdateVideoInfoRequest', ''), contentType);
        queryParams.method = 'PATCH';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
    /**
     * Delete a video by video ID.
     * Delete video
     * @param id Video ID
     */
    async delete(id) {
        return this.deleteWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Delete a video by video ID.
     * Delete video
     * @param id Video ID
     */
    async deleteWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling delete.');
        }
        // Path Params
        const localVarPath = '/videos/{id}'
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
     * Upload video thumbnail
     * @param id video&#39;s id
     * @param file file video to be uploaded
     */
    async uploadThumbnail(id, file) {
        return this.uploadThumbnailWithResponseHeaders(id, file).then((res) => res.body);
    }
    /**
     * Upload video thumbnail
     * @param id video&#39;s id
     * @param file file video to be uploaded
     */
    async uploadThumbnailWithResponseHeaders(id, file) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling uploadThumbnail.');
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
        const localVarPath = '/videos/{id}/thumbnail'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'POST';
        const formData = new form_data_1.default();
        formData.append(fileName, fileBuffer, fileName);
        queryParams.body = formData;
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
    /**
     * Uploads a VTT file and creates a new video caption for the specified video.
     * Create a new video caption
     * @param id Video ID
     * @param lan Language
     * @param file VTT File
     */
    async createCaption(id, lan, file) {
        return this.createCaptionWithResponseHeaders(id, lan, file).then((res) => res.body);
    }
    /**
     * Uploads a VTT file and creates a new video caption for the specified video.
     * Create a new video caption
     * @param id Video ID
     * @param lan Language
     * @param file VTT File
     */
    async createCaptionWithResponseHeaders(id, lan, file) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling createCaption.');
        }
        if (lan === null || lan === undefined) {
            throw new Error('Required parameter lan was null or undefined when calling createCaption.');
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
        const localVarPath = '/videos/{id}/caption/{lan}'
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
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'CreateVideoCaptionResponse', ''),
            };
        });
    }
    /**
     * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
     * Delete a video caption
     * @param id Video ID
     * @param lan Language
     */
    async deleteCaption(id, lan) {
        return this.deleteCaptionWithResponseHeaders(id, lan).then((res) => res.body);
    }
    /**
     * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
     * Delete a video caption
     * @param id Video ID
     * @param lan Language
     */
    async deleteCaptionWithResponseHeaders(id, lan) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteCaption.');
        }
        if (lan === null || lan === undefined) {
            throw new Error('Required parameter lan was null or undefined when calling deleteCaption.');
        }
        // Path Params
        const localVarPath = '/videos/{id}/caption/{lan}'
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
    /**
     * Retrieves a list of video captions for the specified video.
     * Get video captions
     * @param {Object} searchParams
     * @param { string } searchParams.id Video ID
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    async getCaptions(args) {
        return this.getCaptionsWithResponseHeaders(args).then((res) => res.body);
    }
    /**
     * Retrieves a list of video captions for the specified video.
     * Get video captions
     * @param {Object} searchParams
     * @param { string } searchParams.id Video ID
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    async getCaptionsWithResponseHeaders({ id, offset, limit, }) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCaptions.');
        }
        // Path Params
        const localVarPath = '/videos/{id}/captions'
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
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetVideoCaptionsResponse', ''),
            };
        });
    }
    /**
     * get video transcoding cost
     * get video transcoding cost
     * @param qualities video&#39;s qualities
     * @param duration video&#39;s duration
     */
    async getCost(qualities, duration) {
        return this.getCostWithResponseHeaders(qualities, duration).then((res) => res.body);
    }
    /**
     * get video transcoding cost
     * get video transcoding cost
     * @param qualities video&#39;s qualities
     * @param duration video&#39;s duration
     */
    async getCostWithResponseHeaders(qualities, duration) {
        const queryParams = {};
        queryParams.headers = {};
        if (qualities === null || qualities === undefined) {
            throw new Error('Required parameter qualities was null or undefined when calling getCost.');
        }
        if (duration === null || duration === undefined) {
            throw new Error('Required parameter duration was null or undefined when calling getCost.');
        }
        // Path Params
        const localVarPath = '/videos/cost'.substring(1);
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
        if (qualities !== undefined) {
            urlSearchParams.append('qualities', ObjectSerializer_1.default.serialize(qualities, 'string', ''));
        }
        if (duration !== undefined) {
            urlSearchParams.append('duration', ObjectSerializer_1.default.serialize(duration, 'number', ''));
        }
        queryParams.searchParams = urlSearchParams;
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetTranscodeCostResponse', ''),
            };
        });
    }
    /**
     * Retrieve the video details by video id.
     * get video detail
     * @param id video&#39;s id
     */
    async getDetail(id) {
        return this.getDetailWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Retrieve the video details by video id.
     * get video detail
     * @param id video&#39;s id
     */
    async getDetailWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDetail.');
        }
        // Path Params
        const localVarPath = '/videos/{id}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetVideoDetailResponse', ''),
            };
        });
    }
    /**
     * Retrieve a list of videos for the authenticated user.
     * Get user videos list
     * @param request video&#39;s info
     */
    async getVideoList(request = {}) {
        return this.getVideoListWithResponseHeaders(request).then((res) => res.body);
    }
    /**
     * Retrieve a list of videos for the authenticated user.
     * Get user videos list
     * @param request video&#39;s info
     */
    async getVideoListWithResponseHeaders(request = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getVideoList.');
        }
        // Path Params
        const localVarPath = '/videos'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(request, 'GetVideoListRequest', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'GetVideoListResponse', ''),
            };
        });
    }
    /**
     * Sets the default caption for the specified video and language.
     * Set default video caption
     * @param id Video ID
     * @param lan Language
     * @param isDefault Set Default Caption Request
     */
    async setCaption(id, lan, isDefault = {}) {
        return this.setCaptionWithResponseHeaders(id, lan, isDefault).then((res) => res.body);
    }
    /**
     * Sets the default caption for the specified video and language.
     * Set default video caption
     * @param id Video ID
     * @param lan Language
     * @param isDefault Set Default Caption Request
     */
    async setCaptionWithResponseHeaders(id, lan, isDefault = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling setCaption.');
        }
        if (lan === null || lan === undefined) {
            throw new Error('Required parameter lan was null or undefined when calling setCaption.');
        }
        if (isDefault === null || isDefault === undefined) {
            throw new Error('Required parameter isDefault was null or undefined when calling setCaption.');
        }
        // Path Params
        const localVarPath = '/videos/{id}/caption/{lan}'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'lan' + '}', encodeURIComponent(String(lan)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
            'application/x-www-form-urlencoded',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(isDefault, 'SetDefaultCaptionRequest', ''), contentType);
        queryParams.method = 'PATCH';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
    /**
     * Upload part of video
     * This will create a progressive upload session.
     * @param id video&#39;s id
     * @param hash Md5 hash of part
     * @param index Index of the part
     */
    createUploadPartProgressiveSession(id, hash, index) {
        class UploadPartProgressiveSession {
            constructor(httpClient) {
                this.currentPart = 1;
                this.httpClient = httpClient;
            }
            uploadPart(file, progressListener) {
                return this.upload(file, false, progressListener).then((res) => res.body);
            }
            uploadPartWithResponseHeaders(file, progressListener) {
                return this.upload(file, false, progressListener);
            }
            uploadLastPart(file, progressListener) {
                return this.upload(file, true, progressListener).then((res) => res.body);
            }
            uploadLastPartWithResponseHeaders(file, progressListener) {
                return this.upload(file, true, progressListener);
            }
            async upload(file, isLast, progressListener) {
                const queryParams = {};
                queryParams.headers = {};
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling uploadPart.');
                }
                if (!(0, fs_1.existsSync)(file)) {
                    throw new Error(`${file} must be a readable source file`);
                }
                const length = (0, fs_1.statSync)(file).size;
                if (length <= 0) {
                    throw new Error(`${file} is empty`);
                }
                // Path Params
                const localVarPath = '/videos/{id}/part'
                    .substring(1)
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                queryParams.method = 'POST';
                const formData = new form_data_1.default();
                const filename = path_1.default.basename(file);
                formData.append(filename, (0, fs_1.createReadStream)(file), filename);
                queryParams.body = formData;
                queryParams.headers['Content-Range'] = `part ${this.currentPart}/${isLast ? this.currentPart : '*'}`;
                if (progressListener) {
                    queryParams.onUploadProgress = (progress) => {
                        progressListener({
                            chunksCount: 1,
                            currentChunk: 0,
                            currentChunkUploadedBytes: progress.loaded,
                            currentChunkTotalBytes: progress.total || 0,
                            uploadedBytes: progress.loaded,
                            totalBytes: progress.total || 0,
                        });
                    };
                }
                const response = await this.httpClient.call(localVarPath, queryParams);
                this.currentPart++;
                const responseBody = ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', '');
                return {
                    body: responseBody,
                    headers: response.headers,
                };
            }
        }
        return new UploadPartProgressiveSession(this.httpClient);
    }
    /**
     * Upload part of video
     * Upload part of video
     * @param id video&#39;s id
     * @param file File video to be uploaded
     * @param hash Md5 hash of part
     * @param index Index of the part
     */
    async uploadPart(id, file, hash, index, progressListener) {
        return this.uploadPartWithResponseHeaders(id, file, hash, index, progressListener).then((res) => res.body);
    }
    /**
     * Upload part of video
     * Upload part of video
     * @param id video&#39;s id
     * @param file File video to be uploaded
     * @param hash Md5 hash of part
     * @param index Index of the part
     */
    async uploadPartWithResponseHeaders(id, file, hash, index, progressListener) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling uploadPart.');
        }
        if (!(0, fs_1.existsSync)(file)) {
            throw new Error(`${file} must be a readable source file`);
        }
        const length = (0, fs_1.statSync)(file).size;
        if (length <= 0) {
            throw new Error(`${file} is empty`);
        }
        // Path Params
        const localVarPath = '/videos/{id}/part'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'POST';
        const formData = new form_data_1.default();
        const chunkSize = this.httpClient.getChunkSize();
        // Upload in a single request when file is small enough
        if (chunkSize > length) {
            const filename = path_1.default.basename(file);
            const fileStream = (0, fs_1.createReadStream)(file);
            const hash = crypto.createHash('md5');
            fileStream.pipe(hash);
            const md5Hash = await new Promise((resolve, reject) => {
                hash.on('readable', () => {
                    const data = hash.read();
                    if (data) {
                        resolve(data.toString('hex'));
                    }
                });
                hash.on('error', reject);
            });
            formData.append('file', (0, fs_1.createReadStream)(file), filename);
            formData.append('index', '1');
            formData.append('hash', md5Hash);
            queryParams.body = formData;
            queryParams.headers['Content-Range'] = `bytes 0-${length - 1}/${length}`;
            if (progressListener) {
                queryParams.onUploadProgress = (progress) => {
                    progressListener({
                        chunksCount: 1,
                        currentChunk: 0,
                        currentChunkUploadedBytes: progress.loaded,
                        currentChunkTotalBytes: progress.total || 0,
                        uploadedBytes: progress.loaded,
                        totalBytes: progress.total || 0,
                    });
                };
            }
            const call = this.httpClient.call(localVarPath, queryParams);
            return call.then((response) => {
                return {
                    headers: response.headers,
                    body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
                };
            });
        }
        let uploadChunkSize = chunkSize;
        let stream;
        let chunkNumber = 0;
        const partsCount = Math.ceil(length / chunkSize);
        let offset = 0;
        const uploadRequests = [];
        for (let part = 1; part <= partsCount; part++) {
            uploadChunkSize = chunkSize;
            // BUT,if we are on the last chunk to be uploaded, the uploaded chunk must be
            // reduced to match the remaining bytes in the file
            if (offset + uploadChunkSize > length) {
                uploadChunkSize = length - offset;
            }
            const filename = path_1.default.basename(file);
            const chunkFormData = new form_data_1.default({ maxDataSize: 100 * 1024 * 1024 });
            stream = (0, fs_1.createReadStream)(file, {
                start: offset,
                end: uploadChunkSize + offset - 1,
            });
            const hash = crypto.createHash('md5');
            stream.pipe(hash);
            const md5Hash = await new Promise((resolve, reject) => {
                hash.on('readable', () => {
                    const data = hash.read();
                    if (data) {
                        resolve(data.toString('hex'));
                    }
                });
                hash.on('error', reject);
            });
            queryParams.body = chunkFormData;
            chunkFormData.append('hash', md5Hash);
            chunkFormData.append('index', part.toString());
            const streamForUpload = (0, fs_1.createReadStream)(file, {
                start: offset,
                end: uploadChunkSize + offset - 1,
            });
            const rangeStart = offset;
            const rangeEnd = offset + uploadChunkSize - 1;
            chunkFormData.append('file', streamForUpload, filename);
            queryParams.body = chunkFormData;
            queryParams.headers['Content-Range'] = `bytes ${rangeStart}-${rangeEnd}/${length}`;
            if (progressListener) {
                queryParams.onUploadProgress = (progress) => {
                    progressListener({
                        chunksCount: Math.ceil(length / chunkSize),
                        currentChunk: chunkNumber,
                        currentChunkUploadedBytes: progress.loaded,
                        currentChunkTotalBytes: progress.total || 0,
                        uploadedBytes: Math.min(length, chunkNumber * chunkSize + progress.loaded),
                        totalBytes: length,
                    });
                };
            }
            const uploadPromise = this.httpClient
                .call(localVarPath, queryParams)
                .then((response) => {
                return {
                    headers: response.headers,
                    body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
                };
            });
            uploadRequests.push(uploadPromise);
            chunkNumber++;
            offset += chunkSize;
        }
        const responses = await Promise.all(uploadRequests);
        return responses[responses.length - 1];
        if (typeof hash !== undefined) {
            formData.append('hash', hash);
        }
        if (typeof index !== undefined) {
            formData.append('index', index);
        }
    }
    /**
     * Get upload video when complete.
     * Get upload video when complete
     * @param id video&#39;s id
     */
    async uploadVideoComplete(id) {
        return this.uploadVideoCompleteWithResponseHeaders(id).then((res) => res.body);
    }
    /**
     * Get upload video when complete.
     * Get upload video when complete
     * @param id video&#39;s id
     */
    async uploadVideoCompleteWithResponseHeaders(id) {
        const queryParams = {};
        queryParams.headers = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling uploadVideoComplete.');
        }
        // Path Params
        const localVarPath = '/videos/{id}/complete'
            .substring(1)
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        queryParams.method = 'GET';
        return this.httpClient.call(localVarPath, queryParams).then((response) => {
            return {
                headers: response.headers,
                body: ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ResponseSuccess', ''),
            };
        });
    }
}
exports.default = VideoApi;
