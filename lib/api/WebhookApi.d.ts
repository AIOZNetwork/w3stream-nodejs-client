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
import HttpClient, { ApiResponseHeaders } from '../HttpClient';
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
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Webhooks can push notifications to your server, rather than polling w3stream for changes
     * Create webhook
     * @param request Create Webhook input
     */
    create(request?: CreateWebhookRequest): Promise<CreateWebhookResponse>;
    /**
     * Webhooks can push notifications to your server, rather than polling w3stream for changes
     * Create webhook
     * @param request Create Webhook input
     */
    createWithResponseHeaders(request?: CreateWebhookRequest): Promise<{
        headers: ApiResponseHeaders;
        body: CreateWebhookResponse;
    }>;
    /**
     * Retrieve webhook details by id.
     * Get user's webhook by id
     * @param id webhook&#39;s id
     */
    get(id: string): Promise<GetUserWebhookResponse>;
    /**
     * Retrieve webhook details by id.
     * Get user's webhook by id
     * @param id webhook&#39;s id
     */
    getWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: GetUserWebhookResponse;
    }>;
    /**
     * This endpoint will update the indicated webhook.
     * Update event webhook
     * @param id webhook&#39;s id
     * @param request Update Webhook input, events example: video.encoding.quality.completed
     */
    update(id: string, request?: UpdateWebhookRequest): Promise<ResponseSuccess>;
    /**
     * This endpoint will update the indicated webhook.
     * Update event webhook
     * @param id webhook&#39;s id
     * @param request Update Webhook input, events example: video.encoding.quality.completed
     */
    updateWithResponseHeaders(id: string, request?: UpdateWebhookRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * This method will delete the indicated webhook.
     * Delete webhook
     * @param id Webhook ID
     */
    delete(id: string): Promise<ResponseSuccess>;
    /**
     * This method will delete the indicated webhook.
     * Delete webhook
     * @param id Webhook ID
     */
    deleteWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
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
    list(args?: {
        search?: string;
        sortBy?: 'created_at' | 'name';
        orderBy?: 'asc' | 'desc';
        offset?: number;
        limit?: number;
        encodingFinished?: boolean;
        encodingStarted?: boolean;
        fileReceived?: boolean;
    }): Promise<GetWebhooksListResponse>;
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
    listWithResponseHeaders({ search, sortBy, orderBy, offset, limit, encodingFinished, encodingStarted, fileReceived, }?: {
        search?: string;
        sortBy?: 'created_at' | 'name';
        orderBy?: 'asc' | 'desc';
        offset?: number;
        limit?: number;
        encodingFinished?: boolean;
        encodingStarted?: boolean;
        fileReceived?: boolean;
    }): Promise<{
        headers: ApiResponseHeaders;
        body: GetWebhooksListResponse;
    }>;
    /**
     * This method will check the indicated webhook.
     * Check webhook by id
     * @param id webhook&#39;s id
     */
    check(id: string): Promise<ResponseSuccess>;
    /**
     * This method will check the indicated webhook.
     * Check webhook by id
     * @param id webhook&#39;s id
     */
    checkWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
}
