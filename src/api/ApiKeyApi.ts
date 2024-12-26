/**
 * @w3stream/nodejs-client
 * VMS Service
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
import CreateApiKeyRequest from '../model/CreateApiKeyRequest';
import CreateApiKeyResponse from '../model/CreateApiKeyResponse';
import GetApiKeysResponse from '../model/GetApiKeysResponse';
import RenameAPIKeyRequest from '../model/RenameAPIKeyRequest';
import ResponseSuccess from '../model/ResponseSuccess';

/**
 * no description
 */
export default class ApiKeyApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * This endpoint enables you to create a new API key for a specific project.
   * Create API key
   * @param request api key&#39;s data
   */
  public async create(
    request: CreateApiKeyRequest = {}
  ): Promise<CreateApiKeyResponse> {
    return this.createWithResponseHeaders(request).then((res) => res.body);
  }

  /**
   * This endpoint enables you to create a new API key for a specific project.
   * Create API key
   * @param request api key&#39;s data
   */
  public async createWithResponseHeaders(
    request: CreateApiKeyRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: CreateApiKeyResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/api_keys'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',

      'application/x-www-form-urlencoded',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'CreateApiKeyRequest', ''),
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
          'CreateApiKeyResponse',
          ''
        ) as CreateApiKeyResponse,
      };
    });
  }

  /**
   * This endpoint enables you to rename an API key from a specific project.
   * Rename API key
   * @param id api key id
   * @param request new api key name
   */
  public async update(
    id: string,
    request: RenameAPIKeyRequest = {}
  ): Promise<ResponseSuccess> {
    return this.updateWithResponseHeaders(id, request).then((res) => res.body);
  }

  /**
   * This endpoint enables you to rename an API key from a specific project.
   * Rename API key
   * @param id api key id
   * @param request new api key name
   */
  public async updateWithResponseHeaders(
    id: string,
    request: RenameAPIKeyRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling update.'
      );
    }
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/api_keys/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',

      'application/x-www-form-urlencoded',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'RenameAPIKeyRequest', ''),
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
   * This endpoint enables you to delete an API key from a specific project.
   * Delete API key
   * @param id API key&#39;s ID
   */
  public async delete(id: string): Promise<ResponseSuccess> {
    return this.deleteWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * This endpoint enables you to delete an API key from a specific project.
   * Delete API key
   * @param id API key&#39;s ID
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
    const localVarPath = '/api_keys/{id}'
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
   * Retrieve a list of all API keys for the current workspace.
   * Get list API keys
   * @param {Object} searchParams
   * @param { string } searchParams.search only support search by name
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async list(
    args: {
      search?: string;
      sortBy?: 'created_at' | 'name';
      orderBy?: 'asc' | 'desc';
      offset?: number;
      limit?: number;
    } = {}
  ): Promise<GetApiKeysResponse> {
    return this.listWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * Retrieve a list of all API keys for the current workspace.
   * Get list API keys
   * @param {Object} searchParams
   * @param { string } searchParams.search only support search by name
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async listWithResponseHeaders({
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
  } = {}): Promise<{ headers: ApiResponseHeaders; body: GetApiKeysResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/api_keys'.substring(1);

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
          'GetApiKeysResponse',
          ''
        ) as GetApiKeysResponse,
      };
    });
  }
}
