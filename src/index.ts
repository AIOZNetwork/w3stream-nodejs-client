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

import HttpClient from './HttpClient';

import ApiKeyApi from './api/ApiKeyApi';
import PlayersApi from './api/PlayersApi';
import VideoApi from './api/VideoApi';
import VideoChapterApi from './api/VideoChapterApi';
import WatermarkApi from './api/WatermarkApi';
import WebhookApi from './api/WebhookApi';

const PRODUCTION_BASE_URI = 'https://api.w3stream.xyz/api';
const DEFAULT_CHUNK_SIZE = 50 * 1024 * 1024;
const MIN_CHUNK_SIZE = 5 * 1024 * 1024;
const MAX_CHUNK_SIZE = 128 * 1024 * 1024;

class W3StreamClient {
  private httpClient: HttpClient;
  private _apiKey: ApiKeyApi;
  private _players: PlayersApi;
  private _video: VideoApi;
  private _videoChapter: VideoChapterApi;
  private _watermark: WatermarkApi;
  private _webhook: WebhookApi;

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
  }) {
    if (
      params.chunkSize &&
      (params.chunkSize < MIN_CHUNK_SIZE || params.chunkSize > MAX_CHUNK_SIZE)
    ) {
      throw new Error(
        'Invalid chunk size value. Must be greater than ' +
          MIN_CHUNK_SIZE +
          ' bytes and lower than ' +
          MAX_CHUNK_SIZE +
          ' bytes.'
      );
    }

    this.validateOrigin(
      'application',
      params.applicationName,
      params.applicationVersion
    );

    this.validateOrigin('sdk', params.sdkName, params.sdkVersion);

    this.httpClient = new HttpClient({
      ...params,
      baseUri: params.baseUri || PRODUCTION_BASE_URI,
      chunkSize: params.chunkSize || DEFAULT_CHUNK_SIZE,
    });

    this._apiKey = new ApiKeyApi(this.httpClient);
    this._players = new PlayersApi(this.httpClient);
    this._video = new VideoApi(this.httpClient);
    this._videoChapter = new VideoChapterApi(this.httpClient);
    this._watermark = new WatermarkApi(this.httpClient);
    this._webhook = new WebhookApi(this.httpClient);
  }

  /**
   * Get an ApiKeyApi instance
   * @return ApiKeyApi
   */
  public get apiKey(): ApiKeyApi {
    return this._apiKey;
  }

  /**
   * Get an PlayersApi instance
   * @return PlayersApi
   */
  public get players(): PlayersApi {
    return this._players;
  }

  /**
   * Get an VideoApi instance
   * @return VideoApi
   */
  public get video(): VideoApi {
    return this._video;
  }

  /**
   * Get an VideoChapterApi instance
   * @return VideoChapterApi
   */
  public get videoChapter(): VideoChapterApi {
    return this._videoChapter;
  }

  /**
   * Get an WatermarkApi instance
   * @return WatermarkApi
   */
  public get watermark(): WatermarkApi {
    return this._watermark;
  }

  /**
   * Get an WebhookApi instance
   * @return WebhookApi
   */
  public get webhook(): WebhookApi {
    return this._webhook;
  }

  private validateOrigin(type: string, name?: string, version?: string) {
    if (name && !version) {
      throw new Error(
        `${type} version is mandatory when ${type} name is set.'`
      );
    } else if (!name && version) {
      throw new Error(
        `${type} name is mandatory when ${type} version is set.'`
      );
    } else if (name && version) {
      if (!/^[\w-]{1,50}$/.test(name)) {
        throw new Error(
          `Invalid ${type} name value. Allowed characters: A-Z, a-z, 0-9, '-', '_'. Max length: 50.`
        );
      }

      if (!/^\d{1,3}(\.\d{1,3}(\.\d{1,3})?)?$/.test(version)) {
        throw new Error(
          `Invalid ${type} version value. The version should match the xxx[.yyy][.zzz] pattern.`
        );
      }
    }
  }
}

export = W3StreamClient;
