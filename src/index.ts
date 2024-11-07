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
import LiveStreamApi from './api/LiveStreamApi';
import PlayersApi from './api/PlayersApi';
import PlaylistApi from './api/PlaylistApi';
import VideoApi from './api/VideoApi';
import VideoChapterApi from './api/VideoChapterApi';
import WatermarkApi from './api/WatermarkApi';
import WebhookApi from './api/WebhookApi';
import { createReadStream, existsSync, statSync } from 'fs';
import UploadProgressEvent from './model/UploadProgressEvent';
import { QueryOptions } from './HttpClient';
import FormData from 'form-data';
import path from 'path';
import crypto from 'crypto';

const PRODUCTION_BASE_URI = 'https://api.w3stream.xyz/api';
const DEFAULT_CHUNK_SIZE = 50 * 1024 * 1024;
const MIN_CHUNK_SIZE = 5 * 1024 * 1024;
const MAX_CHUNK_SIZE = 128 * 1024 * 1024;

class W3StreamClient {
  private httpClient: HttpClient;
  private _apiKey: ApiKeyApi;
  private _liveStream: LiveStreamApi;
  private _players: PlayersApi;
  private _playlist: PlaylistApi;
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
    this._liveStream = new LiveStreamApi(this.httpClient);
    this._players = new PlayersApi(this.httpClient);
    this._playlist = new PlaylistApi(this.httpClient);
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
   * Get an LiveStreamApi instance
   * @return LiveStreamApi
   */
  public get liveStream(): LiveStreamApi {
    return this._liveStream;
  }

  /**
   * Get an PlayersApi instance
   * @return PlayersApi
   */
  public get players(): PlayersApi {
    return this._players;
  }

  /**
   * Get an PlaylistApi instance
   * @return PlaylistApi
   */
  public get playlist(): PlaylistApi {
    return this._playlist;
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

  public async uploadVideo(
    id: string,
    file: string,
    progressListener?: (event: UploadProgressEvent) => void
  ): Promise<void> {
    if (!id || typeof id !== 'string') {
      throw new Error('Invalid id parameter');
    }
    if (!existsSync(file)) {
      throw new Error(`${file} must be a readable source file`);
    }

    const fileStats = statSync(file);
    const length = fileStats.size;
    if (length <= 0) {
      throw new Error(`${file} is empty`);
    }

    const localVarPath = `videos/${encodeURIComponent(id)}/part`;
    const chunkSize = this.httpClient.getChunkSize();
    const filename = path.basename(file);

    const uploadChunk = async (
      start: number,
      end: number,
      chunkNumber: number,
      totalChunks: number
    ): Promise<void> => {
      const chunkFormData = new FormData();
      const fileStream = createReadStream(file, { start, end });

      const hash = crypto.createHash('md5');
      for await (const chunk of fileStream) {
        hash.update(chunk);
      }
      const md5Hash = hash.digest('hex');

      fileStream.destroy();
      const uploadStream = createReadStream(file, { start, end });

      chunkFormData.append('file', uploadStream, filename);
      chunkFormData.append('index', (chunkNumber + 1).toString());
      chunkFormData.append('hash', md5Hash);

      const queryParams: QueryOptions = {
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
            uploadedBytes: Math.min(
              length,
              chunkNumber * chunkSize + progress.loaded
            ),
            totalBytes: length,
          });
        };
      }

      await this.httpClient.call(localVarPath, queryParams);
    };

    if (chunkSize > length) {
      await uploadChunk(0, length - 1, 0, 1);
    } else {
      const chunksCount = Math.ceil(length / chunkSize);
      const uploadPromises: Promise<void>[] = [];
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

    const uploadCompleteLocalVarPath = `videos/${encodeURIComponent(
      id
    )}/complete`;
    await this.httpClient.call(uploadCompleteLocalVarPath, { method: 'GET' });
  }
}

export = W3StreamClient;
