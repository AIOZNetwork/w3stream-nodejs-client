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

import path from 'path';
import { existsSync, statSync, createReadStream } from 'fs';
import { URLSearchParams } from 'url';
import FormData from 'form-data';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import ProgressiveSession from '../model/ProgressiveSession';
import CreateVideoCaptionResponse from '../model/CreateVideoCaptionResponse';
import CreateVideoRequest from '../model/CreateVideoRequest';
import CreateVideoResponse from '../model/CreateVideoResponse';
import GetTranscodeCostResponse from '../model/GetTranscodeCostResponse';
import GetVideoCaptionsResponse from '../model/GetVideoCaptionsResponse';
import GetVideoDetailResponse from '../model/GetVideoDetailResponse';
import GetVideoListRequest from '../model/GetVideoListRequest';
import GetVideoListResponse from '../model/GetVideoListResponse';
import GetVideoPlayerInfoResponse from '../model/GetVideoPlayerInfoResponse';
import ResponseSuccess from '../model/ResponseSuccess';
import SetDefaultCaptionRequest from '../model/SetDefaultCaptionRequest';
import UpdateVideoInfoRequest from '../model/UpdateVideoInfoRequest';
import UploadProgressEvent from '../model/UploadProgressEvent';
import { Readable } from 'stream';
import { readableToBuffer } from '../HttpClient';
import * as crypto from 'crypto';

/**
 * no description
 */
export default class VideoApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Create a video object
   * Create video object
   * @param request video&#39;s info
   */
  public async create(
    request: CreateVideoRequest = {}
  ): Promise<CreateVideoResponse> {
    return this.createWithResponseHeaders(request).then((res) => res.body);
  }

  /**
   * Create a video object
   * Create video object
   * @param request video&#39;s info
   */
  public async createWithResponseHeaders(
    request: CreateVideoRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: CreateVideoResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/videos/create'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',

      'application/x-www-form-urlencoded',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'CreateVideoRequest', ''),
      contentType
    );

    queryParams.method = 'POST';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'CreateVideoResponse',
          ''
        ) as CreateVideoResponse,
      };
    });
  }

  /**
   * update video info
   * @param id video&#39;s id
   * @param input input
   */
  public async update(
    id: string,
    input: UpdateVideoInfoRequest = {}
  ): Promise<ResponseSuccess> {
    return this.updateWithResponseHeaders(id, input).then((res) => res.body);
  }

  /**
   * update video info
   * @param id video&#39;s id
   * @param input input
   */
  public async updateWithResponseHeaders(
    id: string,
    input: UpdateVideoInfoRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling update.'
      );
    }
    if (input === null || input === undefined) {
      throw new Error(
        'Required parameter input was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(input, 'UpdateVideoInfoRequest', ''),
      contentType
    );

    queryParams.method = 'PATCH';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Delete a video by video ID.
   * Delete video
   * @param id Video ID
   */
  public async delete(id: string): Promise<ResponseSuccess> {
    return this.deleteWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Delete a video by video ID.
   * Delete video
   * @param id Video ID
   */
  public async deleteWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling delete.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'DELETE';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Upload video thumbnail
   * @param id video&#39;s id
   * @param file file video to be uploaded
   */
  public async uploadThumbnail(
    id: string,
    file: string | Readable | Buffer
  ): Promise<ResponseSuccess> {
    return this.uploadThumbnailWithResponseHeaders(id, file).then(
      (res) => res.body
    );
  }

  /**
   * Upload video thumbnail
   * @param id video&#39;s id
   * @param file file video to be uploaded
   */
  public async uploadThumbnailWithResponseHeaders(
    id: string,
    file: string | Readable | Buffer
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling uploadThumbnail.'
      );
    }
    let fileName = 'file';
    let fileBuffer = file;
    if (typeof file === 'string') {
      fileName = path.basename(file);
      fileBuffer = createReadStream(file);
    }
    if (file instanceof Readable) {
      fileBuffer = await readableToBuffer(file);
    }

    // Path Params
    const localVarPath = '/videos/{id}/thumbnail'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'POST';

    const formData = new FormData();

    formData.append(fileName, fileBuffer, fileName);

    queryParams.body = formData;
    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
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
  public async createCaption(
    id: string,
    lan: string,
    file: string | Readable | Buffer
  ): Promise<CreateVideoCaptionResponse> {
    return this.createCaptionWithResponseHeaders(id, lan, file).then(
      (res) => res.body
    );
  }

  /**
   * Uploads a VTT file and creates a new video caption for the specified video.
   * Create a new video caption
   * @param id Video ID
   * @param lan Language
   * @param file VTT File
   */
  public async createCaptionWithResponseHeaders(
    id: string,
    lan: string,
    file: string | Readable | Buffer
  ): Promise<{
    headers: ApiResponseHeaders;
    body: CreateVideoCaptionResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling createCaption.'
      );
    }
    if (lan === null || lan === undefined) {
      throw new Error(
        'Required parameter lan was null or undefined when calling createCaption.'
      );
    }
    let fileName = 'file';
    let fileBuffer = file;
    if (typeof file === 'string') {
      fileName = path.basename(file);
      fileBuffer = createReadStream(file);
    }
    if (file instanceof Readable) {
      fileBuffer = await readableToBuffer(file);
    }

    // Path Params
    const localVarPath = '/videos/{id}/captions/{lan}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'lan' + '}', encodeURIComponent(String(lan)));

    queryParams.method = 'POST';

    const formData = new FormData();

    formData.append(fileName, fileBuffer, fileName);

    queryParams.body = formData;
    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'CreateVideoCaptionResponse',
          ''
        ) as CreateVideoCaptionResponse,
      };
    });
  }

  /**
   * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
   * Delete a video caption
   * @param id Video ID
   * @param lan Language
   */
  public async deleteCaption(
    id: string,
    lan: string
  ): Promise<ResponseSuccess> {
    return this.deleteCaptionWithResponseHeaders(id, lan).then(
      (res) => res.body
    );
  }

  /**
   * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
   * Delete a video caption
   * @param id Video ID
   * @param lan Language
   */
  public async deleteCaptionWithResponseHeaders(
    id: string,
    lan: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteCaption.'
      );
    }
    if (lan === null || lan === undefined) {
      throw new Error(
        'Required parameter lan was null or undefined when calling deleteCaption.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{id}/captions/{lan}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'lan' + '}', encodeURIComponent(String(lan)));

    queryParams.method = 'DELETE';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
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
  public async getCaptions(args: {
    id: string;
    offset?: number;
    limit?: number;
  }): Promise<GetVideoCaptionsResponse> {
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
  public async getCaptionsWithResponseHeaders({
    id,
    offset,
    limit,
  }: {
    id: string;
    offset?: number;
    limit?: number;
  }): Promise<{ headers: ApiResponseHeaders; body: GetVideoCaptionsResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getCaptions.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{id}/captions'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (offset !== undefined) {
      urlSearchParams.append(
        'offset',
        ObjectSerializer.serialize(offset, 'number', '')
      );
    }
    if (limit !== undefined) {
      urlSearchParams.append(
        'limit',
        ObjectSerializer.serialize(limit, 'number', '')
      );
    }

    queryParams.searchParams = urlSearchParams;

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetVideoCaptionsResponse',
          ''
        ) as GetVideoCaptionsResponse,
      };
    });
  }

  /**
   * get video transcoding cost
   * get video transcoding cost
   * @param qualities video&#39;s qualities
   * @param duration video&#39;s duration
   */
  public async getCost(
    qualities: string,
    duration: number
  ): Promise<GetTranscodeCostResponse> {
    return this.getCostWithResponseHeaders(qualities, duration).then(
      (res) => res.body
    );
  }

  /**
   * get video transcoding cost
   * get video transcoding cost
   * @param qualities video&#39;s qualities
   * @param duration video&#39;s duration
   */
  public async getCostWithResponseHeaders(
    qualities: string,
    duration: number
  ): Promise<{ headers: ApiResponseHeaders; body: GetTranscodeCostResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (qualities === null || qualities === undefined) {
      throw new Error(
        'Required parameter qualities was null or undefined when calling getCost.'
      );
    }
    if (duration === null || duration === undefined) {
      throw new Error(
        'Required parameter duration was null or undefined when calling getCost.'
      );
    }
    // Path Params
    const localVarPath = '/videos/cost'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (qualities !== undefined) {
      urlSearchParams.append(
        'qualities',
        ObjectSerializer.serialize(qualities, 'string', '')
      );
    }
    if (duration !== undefined) {
      urlSearchParams.append(
        'duration',
        ObjectSerializer.serialize(duration, 'number', '')
      );
    }

    queryParams.searchParams = urlSearchParams;

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetTranscodeCostResponse',
          ''
        ) as GetTranscodeCostResponse,
      };
    });
  }

  /**
   * Retrieve the video details by video id.
   * get video detail
   * @param id video&#39;s id
   */
  public async getDetail(id: string): Promise<GetVideoDetailResponse> {
    return this.getDetailWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Retrieve the video details by video id.
   * get video detail
   * @param id video&#39;s id
   */
  public async getDetailWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: GetVideoDetailResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getDetail.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetVideoDetailResponse',
          ''
        ) as GetVideoDetailResponse,
      };
    });
  }

  /**
   * Retrieve a list of videos for the authenticated user.
   * Get user videos list
   * @param request video&#39;s info
   */
  public async getVideoList(
    request: GetVideoListRequest = {}
  ): Promise<GetVideoListResponse> {
    return this.getVideoListWithResponseHeaders(request).then(
      (res) => res.body
    );
  }

  /**
   * Retrieve a list of videos for the authenticated user.
   * Get user videos list
   * @param request video&#39;s info
   */
  public async getVideoListWithResponseHeaders(
    request: GetVideoListRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: GetVideoListResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling getVideoList.'
      );
    }
    // Path Params
    const localVarPath = '/videos'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'GetVideoListRequest', ''),
      contentType
    );

    queryParams.method = 'POST';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetVideoListResponse',
          ''
        ) as GetVideoListResponse,
      };
    });
  }

  /**
   * Get video player info
   * Get video player info
   * @param {Object} searchParams
   * @param { string } searchParams.id Video ID
   * @param { string } searchParams.token Token
   */
  public async getVideoPlayerInfo(args: {
    id: string;
    token?: string;
  }): Promise<GetVideoPlayerInfoResponse> {
    return this.getVideoPlayerInfoWithResponseHeaders(args).then(
      (res) => res.body
    );
  }

  /**
   * Get video player info
   * Get video player info
   * @param {Object} searchParams
   * @param { string } searchParams.id Video ID
   * @param { string } searchParams.token Token
   */
  public async getVideoPlayerInfoWithResponseHeaders({
    id,
    token,
  }: {
    id: string;
    token?: string;
  }): Promise<{
    headers: ApiResponseHeaders;
    body: GetVideoPlayerInfoResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getVideoPlayerInfo.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{id}/player.json'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (token !== undefined) {
      urlSearchParams.append(
        'token',
        ObjectSerializer.serialize(token, 'string', '')
      );
    }

    queryParams.searchParams = urlSearchParams;

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetVideoPlayerInfoResponse',
          ''
        ) as GetVideoPlayerInfoResponse,
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
  public async setCaption(
    id: string,
    lan: string,
    isDefault: SetDefaultCaptionRequest = {}
  ): Promise<ResponseSuccess> {
    return this.setCaptionWithResponseHeaders(id, lan, isDefault).then(
      (res) => res.body
    );
  }

  /**
   * Sets the default caption for the specified video and language.
   * Set default video caption
   * @param id Video ID
   * @param lan Language
   * @param isDefault Set Default Caption Request
   */
  public async setCaptionWithResponseHeaders(
    id: string,
    lan: string,
    isDefault: SetDefaultCaptionRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling setCaption.'
      );
    }
    if (lan === null || lan === undefined) {
      throw new Error(
        'Required parameter lan was null or undefined when calling setCaption.'
      );
    }
    if (isDefault === null || isDefault === undefined) {
      throw new Error(
        'Required parameter isDefault was null or undefined when calling setCaption.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{id}/captions/{lan}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'lan' + '}', encodeURIComponent(String(lan)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',

      'application/x-www-form-urlencoded',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(isDefault, 'SetDefaultCaptionRequest', ''),
      contentType
    );

    queryParams.method = 'PATCH';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
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
  public createUploadPartProgressiveSession(
    id: string,
    hash?: string,
    index?: string
  ): ProgressiveSession<ResponseSuccess> {
    class UploadPartProgressiveSession<Type> {
      private httpClient: HttpClient;
      private currentPart = 1;

      constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
      }

      uploadPart(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, false, progressListener).then(
          (res) => res.body
        );
      }

      uploadPartWithResponseHeaders(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, false, progressListener);
      }

      uploadLastPart(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, true, progressListener).then(
          (res) => res.body
        );
      }

      uploadLastPartWithResponseHeaders(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, true, progressListener);
      }

      async upload(
        file: string,
        isLast: boolean,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        const queryParams: QueryOptions = {};
        queryParams.headers = {};

        if (id === null || id === undefined) {
          throw new Error(
            'Required parameter id was null or undefined when calling uploadPart.'
          );
        }

        if (!existsSync(file)) {
          throw new Error(`${file} must be a readable source file`);
        }

        const length = statSync(file).size;
        if (length <= 0) {
          throw new Error(`${file} is empty`);
        }
        // Path Params
        const localVarPath = '/videos/{id}/part'
          .substring(1)
          .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        queryParams.method = 'POST';

        const formData = new FormData();

        const filename = path.basename(file);
        formData.append(filename, createReadStream(file), filename);
        queryParams.body = formData;
        queryParams.headers['Content-Range'] = `part ${this.currentPart}/${
          isLast ? this.currentPart : '*'
        }`;

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
        const responseBody = ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as Type;

        return {
          body: responseBody,
          headers: response.headers,
        };
      }
    }

    return new UploadPartProgressiveSession<ResponseSuccess>(this.httpClient);
  }

  /**
   * Upload part of video
   * Upload part of video
   * @param id video&#39;s id
   * @param file File video to be uploaded
   * @param hash Md5 hash of part
   * @param index Index of the part
   */
  public async uploadPart(
    id: string,
    file: string,
    hash?: string,
    index?: string,
    progressListener?: (event: UploadProgressEvent) => void
  ): Promise<ResponseSuccess> {
    return this.uploadPartWithResponseHeaders(
      id,
      file,
      hash,
      index,
      progressListener
    ).then((res) => res.body);
  }

  /**
   * Upload part of video
   * Upload part of video
   * @param id video&#39;s id
   * @param file File video to be uploaded
   * @param hash Md5 hash of part
   * @param index Index of the part
   */
  public async uploadPartWithResponseHeaders(
    id: string,
    file: string,
    hash?: string,
    index?: string,
    progressListener?: (event: UploadProgressEvent) => void
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling uploadPart.'
      );
    }
    if (!existsSync(file)) {
      throw new Error(`${file} must be a readable source file`);
    }

    const length = statSync(file).size;
    if (length <= 0) {
      throw new Error(`${file} is empty`);
    }
    // Path Params
    const localVarPath = '/videos/{id}/part'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'POST';

    const formData = new FormData();

    const chunkSize = this.httpClient.getChunkSize();
    // Upload in a single request when file is small enough
    if (chunkSize > length) {
      const filename = path.basename(file);
      const fileStream = createReadStream(file);
      const hash = crypto.createHash('md5');
      fileStream.pipe(hash);
      const md5Hash = await new Promise<string>((resolve, reject) => {
        hash.on('readable', () => {
          const data = hash.read();
          if (data) {
            resolve(data.toString('hex'));
          }
        });
        hash.on('error', reject);
      });
      formData.append('file', createReadStream(file), filename);
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
          body: ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'ResponseSuccess',
            ''
          ) as ResponseSuccess,
        };
      });
    }
    let uploadChunkSize = chunkSize;
    let stream;
    let chunkNumber = 0;
    const partsCount = Math.ceil(length / chunkSize);
    let offset = 0;
    const uploadRequests: Promise<any>[] = [];

    for (let part = 1; part <= partsCount; part++) {
      uploadChunkSize = chunkSize;
      // BUT,if we are on the last chunk to be uploaded, the uploaded chunk must be
      // reduced to match the remaining bytes in the file
      if (offset + uploadChunkSize > length) {
        uploadChunkSize = length - offset;
      }

      const filename = path.basename(file);
      const chunkFormData = new FormData({ maxDataSize: 100 * 1024 * 1024 });
      stream = createReadStream(file, {
        start: offset,
        end: uploadChunkSize + offset - 1,
      });
      const hash = crypto.createHash('md5');
      stream.pipe(hash);
      const md5Hash = await new Promise<string>((resolve, reject) => {
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
      const streamForUpload = createReadStream(file, {
        start: offset,
        end: uploadChunkSize + offset - 1,
      });
      const rangeStart = offset;
      const rangeEnd = offset + uploadChunkSize - 1;
      chunkFormData.append('file', streamForUpload, filename);
      queryParams.body = chunkFormData;
      queryParams.headers[
        'Content-Range'
      ] = `bytes ${rangeStart}-${rangeEnd}/${length}`;

      if (progressListener) {
        queryParams.onUploadProgress = (progress) => {
          progressListener({
            chunksCount: Math.ceil(length / chunkSize),
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
      const uploadPromise = this.httpClient
        .call(localVarPath, queryParams)
        .then((response) => {
          return {
            headers: response.headers,
            body: ObjectSerializer.deserialize(
              ObjectSerializer.parse(
                response.body,
                response.headers['content-type']
              ),
              'ResponseSuccess',
              ''
            ) as ResponseSuccess,
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
  public async uploadVideoComplete(id: string): Promise<ResponseSuccess> {
    return this.uploadVideoCompleteWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Get upload video when complete.
   * Get upload video when complete
   * @param id video&#39;s id
   */
  public async uploadVideoCompleteWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling uploadVideoComplete.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{id}/complete'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }
}
