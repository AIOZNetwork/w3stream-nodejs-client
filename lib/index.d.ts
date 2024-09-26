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
import ApiKeyApi from './api/ApiKeyApi';
import PlayersApi from './api/PlayersApi';
import VideoApi from './api/VideoApi';
import VideoChapterApi from './api/VideoChapterApi';
import WatermarkApi from './api/WatermarkApi';
import WebhookApi from './api/WebhookApi';
import UploadProgressEvent from './model/UploadProgressEvent';
declare class W3StreamClient {
    private httpClient;
    private _apiKey;
    private _players;
    private _video;
    private _videoChapter;
    private _watermark;
    private _webhook;
    constructor(params: {
        publicKey?: string;
        secretKey?: string;
        bearerToken?: string;
        baseUri?: string;
        chunkSize?: number;
        applicationName?: string;
        applicationVersion?: string;
        sdkName?: string;
        sdkVersion?: string;
    });
    /**
     * Get an ApiKeyApi instance
     * @return ApiKeyApi
     */
    get apiKey(): ApiKeyApi;
    /**
     * Get an PlayersApi instance
     * @return PlayersApi
     */
    get players(): PlayersApi;
    /**
     * Get an VideoApi instance
     * @return VideoApi
     */
    get video(): VideoApi;
    /**
     * Get an VideoChapterApi instance
     * @return VideoChapterApi
     */
    get videoChapter(): VideoChapterApi;
    /**
     * Get an WatermarkApi instance
     * @return WatermarkApi
     */
    get watermark(): WatermarkApi;
    /**
     * Get an WebhookApi instance
     * @return WebhookApi
     */
    get webhook(): WebhookApi;
    private validateOrigin;
    uploadVideo(id: string, file: string, progressListener?: (event: UploadProgressEvent) => void): Promise<void>;
}
export = W3StreamClient;
