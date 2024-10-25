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

import { URLSearchParams } from 'url';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import CreateLiveStreamKeyRequest from '../model/CreateLiveStreamKeyRequest';
import CreateLiveStreamKeyResponse from '../model/CreateLiveStreamKeyResponse';
import CreateStreamingRequest from '../model/CreateStreamingRequest';
import CreateStreamingResponse from '../model/CreateStreamingResponse';
import GetLiveStreamKeyResponse from '../model/GetLiveStreamKeyResponse';
import GetLiveStreamKeysListResponse from '../model/GetLiveStreamKeysListResponse';
import GetLiveStreamVideoPublicResponse from '../model/GetLiveStreamVideoPublicResponse';
import GetLiveStreamVideoResponse from '../model/GetLiveStreamVideoResponse';
import GetLiveStreamVideosRequest from '../model/GetLiveStreamVideosRequest';
import GetLiveStreamVideosResponse from '../model/GetLiveStreamVideosResponse';
import GetStreamingResponse from '../model/GetStreamingResponse';
import GetStreamingsResponse from '../model/GetStreamingsResponse';
import ResponseSuccess from '../model/ResponseSuccess';
import UpdateLiveStreamKeyRequest from '../model/UpdateLiveStreamKeyRequest';
import UpdateLiveStreamKeyResponse from '../model/UpdateLiveStreamKeyResponse';
import UpdateLiveStreamVideoRequest from '../model/UpdateLiveStreamVideoRequest';

/**
 * no description
 */
export default class LiveStreamApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Create live stream key
   * Create live stream key
   * @param input CreateLiveStreamKeyRequest
   */
  public async createLiveStreamKey(
    input: CreateLiveStreamKeyRequest = {}
  ): Promise<CreateLiveStreamKeyResponse> {
    return this.createLiveStreamKeyWithResponseHeaders(input).then(
      (res) => res.body
    );
  }

  /**
   * Create live stream key
   * Create live stream key
   * @param input CreateLiveStreamKeyRequest
   */
  public async createLiveStreamKeyWithResponseHeaders(
    input: CreateLiveStreamKeyRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: CreateLiveStreamKeyResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (input === null || input === undefined) {
      throw new Error(
        'Required parameter input was null or undefined when calling createLiveStreamKey.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(input, 'CreateLiveStreamKeyRequest', ''),
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
          'CreateLiveStreamKeyResponse',
          ''
        ) as CreateLiveStreamKeyResponse,
      };
    });
  }

  /**
   * Creates a new live stream video with the provided details
   * Create a new live stream video
   * @param id Live stream key ID
   * @param input CreateStreamingRequest
   */
  public async createStreaming(
    id: string,
    input: CreateStreamingRequest = {}
  ): Promise<CreateStreamingResponse> {
    return this.createStreamingWithResponseHeaders(id, input).then(
      (res) => res.body
    );
  }

  /**
   * Creates a new live stream video with the provided details
   * Create a new live stream video
   * @param id Live stream key ID
   * @param input CreateStreamingRequest
   */
  public async createStreamingWithResponseHeaders(
    id: string,
    input: CreateStreamingRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: CreateStreamingResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling createStreaming.'
      );
    }
    if (input === null || input === undefined) {
      throw new Error(
        'Required parameter input was null or undefined when calling createStreaming.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/streamings'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(input, 'CreateStreamingRequest', ''),
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
          'CreateStreamingResponse',
          ''
        ) as CreateStreamingResponse,
      };
    });
  }

  /**
   * Delete a live stream key by ID
   * Delete live stream key
   * @param id Live stream key ID
   */
  public async deleteLiveStreamKey(id: string): Promise<ResponseSuccess> {
    return this.deleteLiveStreamKeyWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Delete a live stream key by ID
   * Delete live stream key
   * @param id Live stream key ID
   */
  public async deleteLiveStreamKeyWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteLiveStreamKey.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}'
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
   * Delete a live stream video by ID
   * Delete live stream video
   * @param id Live stream video ID
   */
  public async deleteLiveStreamVideo(id: string): Promise<ResponseSuccess> {
    return this.deleteLiveStreamVideoWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Delete a live stream video by ID
   * Delete live stream video
   * @param id Live stream video ID
   */
  public async deleteLiveStreamVideoWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteLiveStreamVideo.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/videos'
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
   * Get live stream key
   * Get live stream key
   * @param id ID
   */
  public async getLiveStreamKey(id: string): Promise<GetLiveStreamKeyResponse> {
    return this.getLiveStreamKeyWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Get live stream key
   * Get live stream key
   * @param id ID
   */
  public async getLiveStreamKeyWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: GetLiveStreamKeyResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getLiveStreamKey.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}'
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
          'GetLiveStreamKeyResponse',
          ''
        ) as GetLiveStreamKeyResponse,
      };
    });
  }

  /**
   * Get live stream key list
   * Get live stream key list
   * @param {Object} searchParams
   * @param { string } searchParams.search only support search by name
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0.
   * @param { number } searchParams.limit results per page.
   */
  public async getLiveStreamKeys(
    args: {
      search?: string;
      sortBy?: 'created_at' | 'name';
      orderBy?: 'asc' | 'desc';
      offset?: number;
      limit?: number;
    } = {}
  ): Promise<GetLiveStreamKeysListResponse> {
    return this.getLiveStreamKeysWithResponseHeaders(args).then(
      (res) => res.body
    );
  }

  /**
   * Get live stream key list
   * Get live stream key list
   * @param {Object} searchParams
   * @param { string } searchParams.search only support search by name
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0.
   * @param { number } searchParams.limit results per page.
   */
  public async getLiveStreamKeysWithResponseHeaders({
    search,
    sortBy,
    orderBy,
    offset,
    limit,
  }: {
    search?: string;
    sortBy?: 'created_at' | 'name';
    orderBy?: 'asc' | 'desc';
    offset?: number;
    limit?: number;
  } = {}): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamKeysListResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/live_streams'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (search !== undefined) {
      urlSearchParams.append(
        'search',
        ObjectSerializer.serialize(search, 'string', '')
      );
    }
    if (sortBy !== undefined) {
      urlSearchParams.append(
        'sort_by',
        ObjectSerializer.serialize(sortBy, "'created_at' | 'name'", '')
      );
    }
    if (orderBy !== undefined) {
      urlSearchParams.append(
        'order_by',
        ObjectSerializer.serialize(orderBy, "'asc' | 'desc'", '')
      );
    }
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
          'GetLiveStreamKeysListResponse',
          ''
        ) as GetLiveStreamKeysListResponse,
      };
    });
  }

  /**
   * Get live stream video public for a specific live stream key
   * Get live stream video public
   * @param id Live stream key ID
   */
  public async getLiveStreamPlayerInfo(
    id: string
  ): Promise<GetLiveStreamVideoPublicResponse> {
    return this.getLiveStreamPlayerInfoWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Get live stream video public for a specific live stream key
   * Get live stream video public
   * @param id Live stream key ID
   */
  public async getLiveStreamPlayerInfoWithResponseHeaders(id: string): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamVideoPublicResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getLiveStreamPlayerInfo.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/player/{id}/videos'
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
          'GetLiveStreamVideoPublicResponse',
          ''
        ) as GetLiveStreamVideoPublicResponse,
      };
    });
  }

  /**
   * Get a specific live stream video by ID
   * Get live stream video
   * @param id Live stream video ID
   */
  public async getLiveStreamVideo(
    id: string
  ): Promise<GetLiveStreamVideoResponse> {
    return this.getLiveStreamVideoWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Get a specific live stream video by ID
   * Get live stream video
   * @param id Live stream video ID
   */
  public async getLiveStreamVideoWithResponseHeaders(id: string): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamVideoResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getLiveStreamVideo.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/videos'
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
          'GetLiveStreamVideoResponse',
          ''
        ) as GetLiveStreamVideoResponse,
      };
    });
  }

  /**
   * Get live stream videos for a specific live stream key
   * Get live stream videos
   * @param id Live stream key ID
   * @param data data
   */
  public async getLiveStreamVideos(
    id: string,
    data: GetLiveStreamVideosRequest = {}
  ): Promise<GetLiveStreamVideosResponse> {
    return this.getLiveStreamVideosWithResponseHeaders(id, data).then(
      (res) => res.body
    );
  }

  /**
   * Get live stream videos for a specific live stream key
   * Get live stream videos
   * @param id Live stream key ID
   * @param data data
   */
  public async getLiveStreamVideosWithResponseHeaders(
    id: string,
    data: GetLiveStreamVideosRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamVideosResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getLiveStreamVideos.'
      );
    }
    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling getLiveStreamVideos.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/videos'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(data, 'GetLiveStreamVideosRequest', ''),
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
          'GetLiveStreamVideosResponse',
          ''
        ) as GetLiveStreamVideosResponse,
      };
    });
  }

  /**
   * Get live stream video streaming for a specific live stream key
   * Get live stream video streaming
   * @param id Live stream key ID
   * @param streamId Stream ID
   */
  public async getStreaming(
    id: string,
    streamId: string
  ): Promise<GetStreamingResponse> {
    return this.getStreamingWithResponseHeaders(id, streamId).then(
      (res) => res.body
    );
  }

  /**
   * Get live stream video streaming for a specific live stream key
   * Get live stream video streaming
   * @param id Live stream key ID
   * @param streamId Stream ID
   */
  public async getStreamingWithResponseHeaders(
    id: string,
    streamId: string
  ): Promise<{ headers: ApiResponseHeaders; body: GetStreamingResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getStreaming.'
      );
    }
    if (streamId === null || streamId === undefined) {
      throw new Error(
        'Required parameter streamId was null or undefined when calling getStreaming.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/streamings/{stream_id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'stream_id' + '}', encodeURIComponent(String(streamId)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetStreamingResponse',
          ''
        ) as GetStreamingResponse,
      };
    });
  }

  /**
   * Get live stream video streamings for a specific live stream key
   * Get live stream video streamings
   * @param id Live stream key ID
   */
  public async getStreamings(id: string): Promise<GetStreamingsResponse> {
    return this.getStreamingsWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Get live stream video streamings for a specific live stream key
   * Get live stream video streamings
   * @param id Live stream key ID
   */
  public async getStreamingsWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: GetStreamingsResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getStreamings.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/streamings'
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
          'GetStreamingsResponse',
          ''
        ) as GetStreamingsResponse,
      };
    });
  }

  /**
   * Update a live stream key by ID
   * Update live stream key
   * @param id Live stream key ID
   * @param input UpdateLiveStreamKeyRequest
   */
  public async updateLiveStreamKey(
    id: string,
    input: UpdateLiveStreamKeyRequest = {}
  ): Promise<UpdateLiveStreamKeyResponse> {
    return this.updateLiveStreamKeyWithResponseHeaders(id, input).then(
      (res) => res.body
    );
  }

  /**
   * Update a live stream key by ID
   * Update live stream key
   * @param id Live stream key ID
   * @param input UpdateLiveStreamKeyRequest
   */
  public async updateLiveStreamKeyWithResponseHeaders(
    id: string,
    input: UpdateLiveStreamKeyRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: UpdateLiveStreamKeyResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updateLiveStreamKey.'
      );
    }
    if (input === null || input === undefined) {
      throw new Error(
        'Required parameter input was null or undefined when calling updateLiveStreamKey.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(input, 'UpdateLiveStreamKeyRequest', ''),
      contentType
    );

    queryParams.method = 'PUT';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'UpdateLiveStreamKeyResponse',
          ''
        ) as UpdateLiveStreamKeyResponse,
      };
    });
  }

  /**
   * Update live stream video. You can only update while live streaming.
   * Update live stream video
   * @param id Live stream key ID
   * @param data data
   */
  public async updateLiveStreamVideo(
    id: string,
    data: UpdateLiveStreamVideoRequest = {}
  ): Promise<ResponseSuccess> {
    return this.updateLiveStreamVideoWithResponseHeaders(id, data).then(
      (res) => res.body
    );
  }

  /**
   * Update live stream video. You can only update while live streaming.
   * Update live stream video
   * @param id Live stream key ID
   * @param data data
   */
  public async updateLiveStreamVideoWithResponseHeaders(
    id: string,
    data: UpdateLiveStreamVideoRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updateLiveStreamVideo.'
      );
    }
    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling updateLiveStreamVideo.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/streamings'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(data, 'UpdateLiveStreamVideoRequest', ''),
      contentType
    );

    queryParams.method = 'PUT';

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
