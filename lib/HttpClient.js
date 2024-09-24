"use strict";
/**
 * @w3stream/nodejs-client
 * w3stream is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.
 *
 * The version of the OpenAPI document: 1
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
exports.readableToBuffer = readableToBuffer;
const axios_1 = __importStar(require("axios"));
const W3StreamError_1 = __importDefault(require("./W3StreamError"));
const js_base64_1 = require("js-base64");
const stream_1 = require("stream");
class HttpClient {
    constructor(params) {
        this.publicKey = params.publicKey;
        this.secretKey = params.secretKey;
        this.bearerToken = params.bearerToken;
        this.baseUri = params.baseUri;
        this.chunkSize = params.chunkSize;
        this.headers = new axios_1.AxiosHeaders({
            Accept: 'application/json, */*;q=0.8',
            'AV-Origin-Client': 'nodejs:2.6.0',
            Authorization: this.bearerToken
                ? `Bearer ${this.bearerToken}`
                : this.secretKey
                    ? `Basic ${(0, js_base64_1.encode)(`${this.publicKey}:${this.secretKey}`)}`
                    : '',
            'w3stream-public-key': this.publicKey || '',
            'w3stream-secret-key': this.secretKey || '',
            ...(params.applicationName && params.applicationVersion
                ? {
                    'AV-Origin-App': `${params.applicationName}:${params.applicationVersion}`,
                }
                : {}),
            ...(params.sdkName && params.sdkVersion
                ? {
                    'AV-Origin-Sdk': `${params.sdkName}:${params.sdkVersion}`,
                }
                : {}),
        });
    }
    getChunkSize() {
        return this.chunkSize;
    }
    async call(path, options) {
        if (!options.method)
            throw new Error('Method is required');
        try {
            const axiosRes = await axios_1.default.request({
                url: `${this.baseUri}/${path}${options.searchParams ? `?${options.searchParams.toString()}` : ''}`,
                headers: this.headers.concat(options.headers || {}),
                method: options.method,
                onUploadProgress: options.onUploadProgress,
                data: options.body,
            });
            return {
                headers: axiosRes.headers,
                body: JSON.stringify(axiosRes.data),
            };
        }
        catch (error) {
            const axiosError = error;
            throw new W3StreamError_1.default(axiosError.response?.status || 0, axiosError.response?.data);
        }
    }
}
exports.default = HttpClient;
async function readableToBuffer(readable) {
    const writableStream = new stream_1.Stream.Writable({
        defaultEncoding: 'utf-8',
    });
    const data = [];
    writableStream._write = (chunk, encoding, next) => {
        data.push(Buffer.from(chunk, encoding));
        next();
    };
    return new Promise((resolve, reject) => {
        stream_1.Stream.pipeline(readable, writableStream, async (err) => {
            if (err) {
                reject(err);
            }
            const buffer = Buffer.concat(data);
            resolve(buffer);
        });
    });
}
