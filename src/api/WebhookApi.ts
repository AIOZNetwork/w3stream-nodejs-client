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
import CreateWebhookRequest from '../model/CreateWebhookRequest';
import CreateWebhookResponse from '../model/CreateWebhookResponse';
import GetUserWebhookResponse from '../model/GetUserWebhookResponse';
import GetWebhooksListResponse from '../model/GetWebhooksListResponse';
import ResponseSuccess from '../model/ResponseSuccess';
import UpdateWebhookRequest from '../model/UpdateWebhookRequest';

/**
 * no description
 */
export default class WebhookApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Webhooks can push notifications to your server, rather than polling w3stream for changes
   * Create webhook
   * @param request Create Webhook input
   */
  public async create(
    request: CreateWebhookRequest = {}
  ): Promise<CreateWebhookResponse> {
    return this.createWithResponseHeaders(request).then((res) => res.body);
  }

  /**
   * Webhooks can push notifications to your server, rather than polling w3stream for changes
   * Create webhook
   * @param request Create Webhook input
   */
  public async createWithResponseHeaders(
    request: CreateWebhookRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: CreateWebhookResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/webhooks'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',

      'application/x-www-form-urlencoded',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'CreateWebhookRequest', ''),
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
          'CreateWebhookResponse',
          ''
        ) as CreateWebhookResponse,
      };
    });
  }

  /**
   * Retrieve webhook details by id.
   * Get user's webhook by id
   * @param id webhook&#39;s id
   */
  public async get(id: string): Promise<GetUserWebhookResponse> {
    return this.getWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Retrieve webhook details by id.
   * Get user's webhook by id
   * @param id webhook&#39;s id
   */
  public async getWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: GetUserWebhookResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/webhooks/{id}'
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
          'GetUserWebhookResponse',
          ''
        ) as GetUserWebhookResponse,
      };
    });
  }

  /**
   * This endpoint will update the indicated webhook.
   * Update event webhook
   * @param id webhook&#39;s id
   * @param request Update Webhook input, events example: video.encoding.quality.completed
   */
  public async update(
    id: string,
    request: UpdateWebhookRequest = {}
  ): Promise<ResponseSuccess> {
    return this.updateWithResponseHeaders(id, request).then((res) => res.body);
  }

  /**
   * This endpoint will update the indicated webhook.
   * Update event webhook
   * @param id webhook&#39;s id
   * @param request Update Webhook input, events example: video.encoding.quality.completed
   */
  public async updateWithResponseHeaders(
    id: string,
    request: UpdateWebhookRequest = {}
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
    const localVarPath = '/webhooks/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',

      'application/x-www-form-urlencoded',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'UpdateWebhookRequest', ''),
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
   * This endpoint will delete the indicated webhook.
   * Delete webhook
   * @param id Webhook ID
   */
  public async delete(id: string): Promise<ResponseSuccess> {
    return this.deleteWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * This endpoint will delete the indicated webhook.
   * Delete webhook
   * @param id Webhook ID
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
    const localVarPath = '/webhooks/{id}'
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
   * This method returns a list of your webhooks (with all their details). 

You can filter what the webhook list that the API returns using the parameters described below.
   * Get list webhooks
   * @param {Object} searchParams
   * @param { string } searchParams.search only support search by name
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   * @param { boolean } searchParams.encodingFinished search by event encoding finished
   * @param { boolean } searchParams.encodingStarted search by event encoding started
   * @param { boolean } searchParams.fileReceived search by event file received
   */
  public async list(
    args: {
      search?: string;
      sortBy?: 'created_at' | 'name';
      orderBy?: 'asc' | 'desc';
      offset?: number;
      limit?: number;
      encodingFinished?: boolean;
      encodingStarted?: boolean;
      fileReceived?: boolean;
    } = {}
  ): Promise<GetWebhooksListResponse> {
    return this.listWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * This method returns a list of your webhooks (with all their details). 

You can filter what the webhook list that the API returns using the parameters described below.
   * Get list webhooks
   * @param {Object} searchParams
   * @param { string } searchParams.search only support search by name
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   * @param { boolean } searchParams.encodingFinished search by event encoding finished
   * @param { boolean } searchParams.encodingStarted search by event encoding started
   * @param { boolean } searchParams.fileReceived search by event file received
   */
  public async listWithResponseHeaders({
    search,
    sortBy,
    orderBy,
    offset,
    limit,
    encodingFinished,
    encodingStarted,
    fileReceived,
  }: {
    search?: string;
    sortBy?: 'created_at' | 'name';
    orderBy?: 'asc' | 'desc';
    offset?: number;
    limit?: number;
    encodingFinished?: boolean;
    encodingStarted?: boolean;
    fileReceived?: boolean;
  } = {}): Promise<{
    headers: ApiResponseHeaders;
    body: GetWebhooksListResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/webhooks'.substring(1);

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
    if (encodingFinished !== undefined) {
      urlSearchParams.append(
        'encoding_finished',
        ObjectSerializer.serialize(encodingFinished, 'boolean', '')
      );
    }
    if (encodingStarted !== undefined) {
      urlSearchParams.append(
        'encoding_started',
        ObjectSerializer.serialize(encodingStarted, 'boolean', '')
      );
    }
    if (fileReceived !== undefined) {
      urlSearchParams.append(
        'file_received',
        ObjectSerializer.serialize(fileReceived, 'boolean', '')
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
          'GetWebhooksListResponse',
          ''
        ) as GetWebhooksListResponse,
      };
    });
  }

  /**
   * This endpoint will check the indicated webhook.
   * Check webhook by id
   * @param id webhook&#39;s id
   */
  public async check(id: string): Promise<ResponseSuccess> {
    return this.checkWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * This endpoint will check the indicated webhook.
   * Check webhook by id
   * @param id webhook&#39;s id
   */
  public async checkWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling check.'
      );
    }
    // Path Params
    const localVarPath = '/webhooks/check/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'POST';

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
