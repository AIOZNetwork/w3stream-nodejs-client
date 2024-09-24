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
import CreateApiKeyRequest from '../model/CreateApiKeyRequest';
import CreateApiKeyResponse from '../model/CreateApiKeyResponse';
import GetApiKeysResponse from '../model/GetApiKeysResponse';
import RenameAPIKeyRequest from '../model/RenameAPIKeyRequest';
import ResponseSuccess from '../model/ResponseSuccess';
/**
 * no description
 */
export default class ApiKeyApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * This endpoint enables you to create a new API key for a specific project.
     * Create API key
     * @param request api key&#39;s data
     */
    create(request?: CreateApiKeyRequest): Promise<CreateApiKeyResponse>;
    /**
     * This endpoint enables you to create a new API key for a specific project.
     * Create API key
     * @param request api key&#39;s data
     */
    createWithResponseHeaders(request?: CreateApiKeyRequest): Promise<{
        headers: ApiResponseHeaders;
        body: CreateApiKeyResponse;
    }>;
    /**
     * This endpoint enables you to rename an API key from a specific project.
     * Rename api key
     * @param id api key id
     * @param request new api key name
     */
    update(id: string, request?: RenameAPIKeyRequest): Promise<ResponseSuccess>;
    /**
     * This endpoint enables you to rename an API key from a specific project.
     * Rename api key
     * @param id api key id
     * @param request new api key name
     */
    updateWithResponseHeaders(id: string, request?: RenameAPIKeyRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * This endpoint enables you to delete an API key from a specific project.
     * Delete API key
     * @param id API key&#39;s ID
     */
    delete(id: string): Promise<ResponseSuccess>;
    /**
     * This endpoint enables you to delete an API key from a specific project.
     * Delete API key
     * @param id API key&#39;s ID
     */
    deleteWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
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
    list(args?: {
        search?: string;
        sortBy?: 'created_at' | 'name';
        orderBy?: 'asc' | 'desc';
        offset?: number;
        limit?: number;
    }): Promise<GetApiKeysResponse>;
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
    listWithResponseHeaders({ search, sortBy, orderBy, offset, limit, }?: {
        search?: string;
        sortBy?: 'created_at' | 'name';
        orderBy?: 'asc' | 'desc';
        offset?: number;
        limit?: number;
    }): Promise<{
        headers: ApiResponseHeaders;
        body: GetApiKeysResponse;
    }>;
}
