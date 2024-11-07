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
const HttpClient_1 = __importDefault(require("./HttpClient"));
const ApiKeyApi_1 = __importDefault(require("./api/ApiKeyApi"));
const LiveStreamApi_1 = __importDefault(require("./api/LiveStreamApi"));
const PlayersApi_1 = __importDefault(require("./api/PlayersApi"));
const PlaylistApi_1 = __importDefault(require("./api/PlaylistApi"));
const VideoApi_1 = __importDefault(require("./api/VideoApi"));
const VideoChapterApi_1 = __importDefault(require("./api/VideoChapterApi"));
const WatermarkApi_1 = __importDefault(require("./api/WatermarkApi"));
const WebhookApi_1 = __importDefault(require("./api/WebhookApi"));
const fs_1 = require("fs");
const form_data_1 = __importDefault(require("form-data"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
const PRODUCTION_BASE_URI = 'https://api.w3stream.xyz/api';
const DEFAULT_CHUNK_SIZE = 50 * 1024 * 1024;
const MIN_CHUNK_SIZE = 5 * 1024 * 1024;
const MAX_CHUNK_SIZE = 128 * 1024 * 1024;
class W3StreamClient {
    constructor(params) {
        if (params.chunkSize &&
            (params.chunkSize < MIN_CHUNK_SIZE || params.chunkSize > MAX_CHUNK_SIZE)) {
            throw new Error('Invalid chunk size value. Must be greater than ' +
                MIN_CHUNK_SIZE +
                ' bytes and lower than ' +
                MAX_CHUNK_SIZE +
                ' bytes.');
        }
        this.validateOrigin('application', params.applicationName, params.applicationVersion);
        this.validateOrigin('sdk', params.sdkName, params.sdkVersion);
        this.httpClient = new HttpClient_1.default({
            ...params,
            baseUri: params.baseUri || PRODUCTION_BASE_URI,
            chunkSize: params.chunkSize || DEFAULT_CHUNK_SIZE,
        });
        this._apiKey = new ApiKeyApi_1.default(this.httpClient);
        this._liveStream = new LiveStreamApi_1.default(this.httpClient);
        this._players = new PlayersApi_1.default(this.httpClient);
        this._playlist = new PlaylistApi_1.default(this.httpClient);
        this._video = new VideoApi_1.default(this.httpClient);
        this._videoChapter = new VideoChapterApi_1.default(this.httpClient);
        this._watermark = new WatermarkApi_1.default(this.httpClient);
        this._webhook = new WebhookApi_1.default(this.httpClient);
    }
    /**
     * Get an ApiKeyApi instance
     * @return ApiKeyApi
     */
    get apiKey() {
        return this._apiKey;
    }
    /**
     * Get an LiveStreamApi instance
     * @return LiveStreamApi
     */
    get liveStream() {
        return this._liveStream;
    }
    /**
     * Get an PlayersApi instance
     * @return PlayersApi
     */
    get players() {
        return this._players;
    }
    /**
     * Get an PlaylistApi instance
     * @return PlaylistApi
     */
    get playlist() {
        return this._playlist;
    }
    /**
     * Get an VideoApi instance
     * @return VideoApi
     */
    get video() {
        return this._video;
    }
    /**
     * Get an VideoChapterApi instance
     * @return VideoChapterApi
     */
    get videoChapter() {
        return this._videoChapter;
    }
    /**
     * Get an WatermarkApi instance
     * @return WatermarkApi
     */
    get watermark() {
        return this._watermark;
    }
    /**
     * Get an WebhookApi instance
     * @return WebhookApi
     */
    get webhook() {
        return this._webhook;
    }
    validateOrigin(type, name, version) {
        if (name && !version) {
            throw new Error(`${type} version is mandatory when ${type} name is set.'`);
        }
        else if (!name && version) {
            throw new Error(`${type} name is mandatory when ${type} version is set.'`);
        }
        else if (name && version) {
            if (!/^[\w-]{1,50}$/.test(name)) {
                throw new Error(`Invalid ${type} name value. Allowed characters: A-Z, a-z, 0-9, '-', '_'. Max length: 50.`);
            }
            if (!/^\d{1,3}(\.\d{1,3}(\.\d{1,3})?)?$/.test(version)) {
                throw new Error(`Invalid ${type} version value. The version should match the xxx[.yyy][.zzz] pattern.`);
            }
        }
    }
    async uploadVideo(id, file, progressListener) {
        if (!id || typeof id !== 'string') {
            throw new Error('Invalid id parameter');
        }
        if (!(0, fs_1.existsSync)(file)) {
            throw new Error(`${file} must be a readable source file`);
        }
        const fileStats = (0, fs_1.statSync)(file);
        const length = fileStats.size;
        if (length <= 0) {
            throw new Error(`${file} is empty`);
        }
        const localVarPath = `videos/${encodeURIComponent(id)}/part`;
        const chunkSize = this.httpClient.getChunkSize();
        const filename = path_1.default.basename(file);
        const uploadChunk = async (start, end, chunkNumber, totalChunks) => {
            const chunkFormData = new form_data_1.default();
            const fileStream = (0, fs_1.createReadStream)(file, { start, end });
            const hash = crypto_1.default.createHash('md5');
            for await (const chunk of fileStream) {
                hash.update(chunk);
            }
            const md5Hash = hash.digest('hex');
            fileStream.destroy();
            const uploadStream = (0, fs_1.createReadStream)(file, { start, end });
            chunkFormData.append('file', uploadStream, filename);
            chunkFormData.append('index', (chunkNumber + 1).toString());
            chunkFormData.append('hash', md5Hash);
            const queryParams = {
                method: 'POST',
                body: chunkFormData,
                headers: {
                    'Content-Range': `bytes ${start}-${end}/${length}`,
                },
            };
            if (progressListener) {
                queryParams.onUploadProgress = (progress) => {
                    progressListener({
                        chunksCount: totalChunks,
                        currentChunk: chunkNumber,
                        currentChunkUploadedBytes: progress.loaded,
                        currentChunkTotalBytes: progress.total || 0,
                        uploadedBytes: Math.min(length, chunkNumber * chunkSize + progress.loaded),
                        totalBytes: length,
                    });
                };
            }
            await this.httpClient.call(localVarPath, queryParams);
        };
        if (chunkSize > length) {
            await uploadChunk(0, length - 1, 0, 1);
        }
        else {
            const chunksCount = Math.ceil(length / chunkSize);
            const uploadPromises = [];
            for (let chunkNumber = 0; chunkNumber < chunksCount; chunkNumber++) {
                const start = chunkNumber * chunkSize;
                const end = Math.min(start + chunkSize - 1, length - 1);
                uploadPromises.push(uploadChunk(start, end, chunkNumber, chunksCount));
                if (uploadPromises.length >= 5 || chunkNumber === chunksCount - 1) {
                    await Promise.all(uploadPromises);
                    uploadPromises.length = 0;
                }
            }
        }
        const uploadCompleteLocalVarPath = `videos/${encodeURIComponent(id)}/complete`;
        await this.httpClient.call(uploadCompleteLocalVarPath, { method: 'GET' });
    }
}
module.exports = W3StreamClient;
