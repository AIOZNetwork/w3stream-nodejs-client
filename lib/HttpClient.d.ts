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
import { AxiosProgressEvent } from 'axios';
import { Readable } from 'stream';
export type QueryOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: any;
    headers?: Record<string, string>;
    searchParams?: URLSearchParams;
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};
export type ApiResponseHeaders = {
    server: string;
    'content-type': string;
    'transfer-encoding': string;
    connection: string;
    'cache-control': string;
    date: string;
    'x-ratelimit-remaining': string;
    'x-ratelimit-retry-after': string;
    'x-ratelimit-limit': string;
    'x-server': string;
    'access-control-allow-origin': string;
    'timing-allow-origin': string;
};
export default class HttpClient {
    private publicKey?;
    private secretKey?;
    private bearerToken?;
    private baseUri;
    private headers;
    private chunkSize;
    constructor(params: {
        publicKey?: string;
        secretKey?: string;
        bearerToken?: string;
        baseUri: string;
        chunkSize: number;
        applicationName?: string;
        applicationVersion?: string;
        sdkName?: string;
        sdkVersion?: string;
    });
    getChunkSize(): number;
    call(path: string, options: QueryOptions): Promise<{
        headers: any;
        body: string;
    }>;
}
export declare function readableToBuffer(readable: Readable): Promise<Buffer>;
