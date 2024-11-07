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
/**
 * no description
 */
export default class VideoApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Create a video object
     * Create video object
     * @param request video&#39;s info
     */
    create(request?: CreateVideoRequest): Promise<CreateVideoResponse>;
    /**
     * Create a video object
     * Create video object
     * @param request video&#39;s info
     */
    createWithResponseHeaders(request?: CreateVideoRequest): Promise<{
        headers: ApiResponseHeaders;
        body: CreateVideoResponse;
    }>;
    /**
     * update video info
     * @param id video&#39;s id
     * @param input input
     */
    update(id: string, input?: UpdateVideoInfoRequest): Promise<ResponseSuccess>;
    /**
     * update video info
     * @param id video&#39;s id
     * @param input input
     */
    updateWithResponseHeaders(id: string, input?: UpdateVideoInfoRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Delete a video by video ID.
     * Delete video
     * @param id Video ID
     */
    delete(id: string): Promise<ResponseSuccess>;
    /**
     * Delete a video by video ID.
     * Delete video
     * @param id Video ID
     */
    deleteWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Upload video thumbnail
     * @param id video&#39;s id
     * @param file file video to be uploaded
     */
    uploadThumbnail(id: string, file: string | Readable | Buffer): Promise<ResponseSuccess>;
    /**
     * Upload video thumbnail
     * @param id video&#39;s id
     * @param file file video to be uploaded
     */
    uploadThumbnailWithResponseHeaders(id: string, file: string | Readable | Buffer): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Uploads a VTT file and creates a new video caption for the specified video.
     * Create a new video caption
     * @param id Video ID
     * @param lan Language
     * @param file VTT File
     */
    createCaption(id: string, lan: string, file: string | Readable | Buffer): Promise<CreateVideoCaptionResponse>;
    /**
     * Uploads a VTT file and creates a new video caption for the specified video.
     * Create a new video caption
     * @param id Video ID
     * @param lan Language
     * @param file VTT File
     */
    createCaptionWithResponseHeaders(id: string, lan: string, file: string | Readable | Buffer): Promise<{
        headers: ApiResponseHeaders;
        body: CreateVideoCaptionResponse;
    }>;
    /**
     * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
     * Delete a video caption
     * @param id Video ID
     * @param lan Language
     */
    deleteCaption(id: string, lan: string): Promise<ResponseSuccess>;
    /**
     * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
     * Delete a video caption
     * @param id Video ID
     * @param lan Language
     */
    deleteCaptionWithResponseHeaders(id: string, lan: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Retrieves a list of video captions for the specified video.
     * Get video captions
     * @param {Object} searchParams
     * @param { string } searchParams.id Video ID
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    getCaptions(args: {
        id: string;
        offset?: number;
        limit?: number;
    }): Promise<GetVideoCaptionsResponse>;
    /**
     * Retrieves a list of video captions for the specified video.
     * Get video captions
     * @param {Object} searchParams
     * @param { string } searchParams.id Video ID
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    getCaptionsWithResponseHeaders({ id, offset, limit, }: {
        id: string;
        offset?: number;
        limit?: number;
    }): Promise<{
        headers: ApiResponseHeaders;
        body: GetVideoCaptionsResponse;
    }>;
    /**
     * get video transcoding cost
     * get video transcoding cost
     * @param qualities video&#39;s qualities
     * @param duration video&#39;s duration
     */
    getCost(qualities: string, duration: number): Promise<GetTranscodeCostResponse>;
    /**
     * get video transcoding cost
     * get video transcoding cost
     * @param qualities video&#39;s qualities
     * @param duration video&#39;s duration
     */
    getCostWithResponseHeaders(qualities: string, duration: number): Promise<{
        headers: ApiResponseHeaders;
        body: GetTranscodeCostResponse;
    }>;
    /**
     * Retrieve the video details by video id.
     * get video detail
     * @param id video&#39;s id
     */
    getDetail(id: string): Promise<GetVideoDetailResponse>;
    /**
     * Retrieve the video details by video id.
     * get video detail
     * @param id video&#39;s id
     */
    getDetailWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: GetVideoDetailResponse;
    }>;
    /**
     * Retrieve a list of videos for the authenticated user.
     * Get user videos list
     * @param request video&#39;s info
     */
    getVideoList(request?: GetVideoListRequest): Promise<GetVideoListResponse>;
    /**
     * Retrieve a list of videos for the authenticated user.
     * Get user videos list
     * @param request video&#39;s info
     */
    getVideoListWithResponseHeaders(request?: GetVideoListRequest): Promise<{
        headers: ApiResponseHeaders;
        body: GetVideoListResponse;
    }>;
    /**
     * Get video player info
     * Get video player info
     * @param {Object} searchParams
     * @param { string } searchParams.id Video ID
     * @param { string } searchParams.token Token
     */
    getVideoPlayerInfo(args: {
        id: string;
        token?: string;
    }): Promise<GetVideoPlayerInfoResponse>;
    /**
     * Get video player info
     * Get video player info
     * @param {Object} searchParams
     * @param { string } searchParams.id Video ID
     * @param { string } searchParams.token Token
     */
    getVideoPlayerInfoWithResponseHeaders({ id, token, }: {
        id: string;
        token?: string;
    }): Promise<{
        headers: ApiResponseHeaders;
        body: GetVideoPlayerInfoResponse;
    }>;
    /**
     * Sets the default caption for the specified video and language.
     * Set default video caption
     * @param id Video ID
     * @param lan Language
     * @param isDefault Set Default Caption Request
     */
    setCaption(id: string, lan: string, isDefault?: SetDefaultCaptionRequest): Promise<ResponseSuccess>;
    /**
     * Sets the default caption for the specified video and language.
     * Set default video caption
     * @param id Video ID
     * @param lan Language
     * @param isDefault Set Default Caption Request
     */
    setCaptionWithResponseHeaders(id: string, lan: string, isDefault?: SetDefaultCaptionRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Upload part of video
     * This will create a progressive upload session.
     * @param id video&#39;s id
     * @param hash Md5 hash of part
     * @param index Index of the part
     */
    createUploadPartProgressiveSession(id: string, hash?: string, index?: string): ProgressiveSession<ResponseSuccess>;
    /**
     * Upload part of video
     * Upload part of video
     * @param id video&#39;s id
     * @param file File video to be uploaded
     * @param hash Md5 hash of part
     * @param index Index of the part
     */
    uploadPart(id: string, file: string, hash?: string, index?: string, progressListener?: (event: UploadProgressEvent) => void): Promise<ResponseSuccess>;
    /**
     * Upload part of video
     * Upload part of video
     * @param id video&#39;s id
     * @param file File video to be uploaded
     * @param hash Md5 hash of part
     * @param index Index of the part
     */
    uploadPartWithResponseHeaders(id: string, file: string, hash?: string, index?: string, progressListener?: (event: UploadProgressEvent) => void): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Get upload video when complete.
     * Get upload video when complete
     * @param id video&#39;s id
     */
    uploadVideoComplete(id: string): Promise<ResponseSuccess>;
    /**
     * Get upload video when complete.
     * Get upload video when complete
     * @param id video&#39;s id
     */
    uploadVideoCompleteWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
}
