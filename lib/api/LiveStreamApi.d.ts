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
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Create live stream key
     * Create live stream key
     * @param input CreateLiveStreamKeyRequest
     */
    createLiveStreamKey(input?: CreateLiveStreamKeyRequest): Promise<CreateLiveStreamKeyResponse>;
    /**
     * Create live stream key
     * Create live stream key
     * @param input CreateLiveStreamKeyRequest
     */
    createLiveStreamKeyWithResponseHeaders(input?: CreateLiveStreamKeyRequest): Promise<{
        headers: ApiResponseHeaders;
        body: CreateLiveStreamKeyResponse;
    }>;
    /**
     * Creates a new live stream video with the provided details
     * Create a new live stream video
     * @param id Live stream key ID
     * @param input CreateStreamingRequest
     */
    createStreaming(id: string, input?: CreateStreamingRequest): Promise<CreateStreamingResponse>;
    /**
     * Creates a new live stream video with the provided details
     * Create a new live stream video
     * @param id Live stream key ID
     * @param input CreateStreamingRequest
     */
    createStreamingWithResponseHeaders(id: string, input?: CreateStreamingRequest): Promise<{
        headers: ApiResponseHeaders;
        body: CreateStreamingResponse;
    }>;
    /**
     * Delete a live stream key by ID
     * Delete live stream key
     * @param id Live stream key ID
     */
    deleteLiveStreamKey(id: string): Promise<ResponseSuccess>;
    /**
     * Delete a live stream key by ID
     * Delete live stream key
     * @param id Live stream key ID
     */
    deleteLiveStreamKeyWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Delete a live stream video by ID
     * Delete live stream video
     * @param id Live stream video ID
     */
    deleteLiveStreamVideo(id: string): Promise<ResponseSuccess>;
    /**
     * Delete a live stream video by ID
     * Delete live stream video
     * @param id Live stream video ID
     */
    deleteLiveStreamVideoWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Get live stream key
     * Get live stream key
     * @param id ID
     */
    getLiveStreamKey(id: string): Promise<GetLiveStreamKeyResponse>;
    /**
     * Get live stream key
     * Get live stream key
     * @param id ID
     */
    getLiveStreamKeyWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: GetLiveStreamKeyResponse;
    }>;
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
    getLiveStreamKeys(args?: {
        search?: string;
        sortBy?: 'created_at' | 'name';
        orderBy?: 'asc' | 'desc';
        offset?: number;
        limit?: number;
    }): Promise<GetLiveStreamKeysListResponse>;
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
    getLiveStreamKeysWithResponseHeaders({ search, sortBy, orderBy, offset, limit, }?: {
        search?: string;
        sortBy?: 'created_at' | 'name';
        orderBy?: 'asc' | 'desc';
        offset?: number;
        limit?: number;
    }): Promise<{
        headers: ApiResponseHeaders;
        body: GetLiveStreamKeysListResponse;
    }>;
    /**
     * Get live stream video public for a specific live stream key
     * Get live stream video public
     * @param id Live stream key ID
     */
    getLiveStreamPlayerInfo(id: string): Promise<GetLiveStreamVideoPublicResponse>;
    /**
     * Get live stream video public for a specific live stream key
     * Get live stream video public
     * @param id Live stream key ID
     */
    getLiveStreamPlayerInfoWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: GetLiveStreamVideoPublicResponse;
    }>;
    /**
     * Get a specific live stream video by ID
     * Get live stream video
     * @param id Live stream video ID
     */
    getLiveStreamVideo(id: string): Promise<GetLiveStreamVideoResponse>;
    /**
     * Get a specific live stream video by ID
     * Get live stream video
     * @param id Live stream video ID
     */
    getLiveStreamVideoWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: GetLiveStreamVideoResponse;
    }>;
    /**
     * Get live stream videos for a specific live stream key
     * Get live stream videos
     * @param id Live stream key ID
     * @param data data
     */
    getLiveStreamVideos(id: string, data?: GetLiveStreamVideosRequest): Promise<GetLiveStreamVideosResponse>;
    /**
     * Get live stream videos for a specific live stream key
     * Get live stream videos
     * @param id Live stream key ID
     * @param data data
     */
    getLiveStreamVideosWithResponseHeaders(id: string, data?: GetLiveStreamVideosRequest): Promise<{
        headers: ApiResponseHeaders;
        body: GetLiveStreamVideosResponse;
    }>;
    /**
     * Get live stream video streaming for a specific live stream key
     * Get live stream video streaming
     * @param id Live stream key ID
     * @param streamId Stream ID
     */
    getStreaming(id: string, streamId: string): Promise<GetStreamingResponse>;
    /**
     * Get live stream video streaming for a specific live stream key
     * Get live stream video streaming
     * @param id Live stream key ID
     * @param streamId Stream ID
     */
    getStreamingWithResponseHeaders(id: string, streamId: string): Promise<{
        headers: ApiResponseHeaders;
        body: GetStreamingResponse;
    }>;
    /**
     * Get live stream video streamings for a specific live stream key
     * Get live stream video streamings
     * @param id Live stream key ID
     */
    getStreamings(id: string): Promise<GetStreamingsResponse>;
    /**
     * Get live stream video streamings for a specific live stream key
     * Get live stream video streamings
     * @param id Live stream key ID
     */
    getStreamingsWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: GetStreamingsResponse;
    }>;
    /**
     * Update a live stream key by ID
     * Update live stream key
     * @param id Live stream key ID
     * @param input UpdateLiveStreamKeyRequest
     */
    updateLiveStreamKey(id: string, input?: UpdateLiveStreamKeyRequest): Promise<UpdateLiveStreamKeyResponse>;
    /**
     * Update a live stream key by ID
     * Update live stream key
     * @param id Live stream key ID
     * @param input UpdateLiveStreamKeyRequest
     */
    updateLiveStreamKeyWithResponseHeaders(id: string, input?: UpdateLiveStreamKeyRequest): Promise<{
        headers: ApiResponseHeaders;
        body: UpdateLiveStreamKeyResponse;
    }>;
    /**
     * Update live stream video. You can only update while live streaming.
     * Update live stream video
     * @param id Live stream key ID
     * @param data data
     */
    updateLiveStreamVideo(id: string, data?: UpdateLiveStreamVideoRequest): Promise<ResponseSuccess>;
    /**
     * Update live stream video. You can only update while live streaming.
     * Update live stream video
     * @param id Live stream key ID
     * @param data data
     */
    updateLiveStreamVideoWithResponseHeaders(id: string, data?: UpdateLiveStreamVideoRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
}
