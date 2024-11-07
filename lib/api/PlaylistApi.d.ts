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
import AddVideoToPlaylistRequest from '../model/AddVideoToPlaylistRequest';
import CreatePlaylistRequest from '../model/CreatePlaylistRequest';
import CreatePlaylistResponse from '../model/CreatePlaylistResponse';
import GetPlaylistByIdResponse from '../model/GetPlaylistByIdResponse';
import GetPlaylistListRequest from '../model/GetPlaylistListRequest';
import GetPlaylistListResponse from '../model/GetPlaylistListResponse';
import MoveVideoInPlaylistRequest from '../model/MoveVideoInPlaylistRequest';
import PublicPlaylistObject from '../model/PublicPlaylistObject';
import ResponseSuccess from '../model/ResponseSuccess';
import { Readable } from 'stream';
/**
 * no description
 */
export default class PlaylistApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Delete the thumbnail of a specific playlist for the authenticated user
     * Delete a playlist thumbnail
     * @param id Playlist ID
     */
    deleteThumbnail(id: string): Promise<ResponseSuccess>;
    /**
     * Delete the thumbnail of a specific playlist for the authenticated user
     * Delete a playlist thumbnail
     * @param id Playlist ID
     */
    deleteThumbnailWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Add a specific video to a playlist for the authenticated user
     * Add a video to a playlist
     * @param id Playlist ID
     * @param request Video details
     */
    addItem(id: string, request?: AddVideoToPlaylistRequest): Promise<ResponseSuccess>;
    /**
     * Add a specific video to a playlist for the authenticated user
     * Add a video to a playlist
     * @param id Playlist ID
     * @param request Video details
     */
    addItemWithResponseHeaders(id: string, request?: AddVideoToPlaylistRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Create a new playlist for the authenticated user
     * Create a new playlist
     * @param payload Create playlist request
     */
    createPlaylist(payload?: CreatePlaylistRequest): Promise<CreatePlaylistResponse>;
    /**
     * Create a new playlist for the authenticated user
     * Create a new playlist
     * @param payload Create playlist request
     */
    createPlaylistWithResponseHeaders(payload?: CreatePlaylistRequest): Promise<{
        headers: ApiResponseHeaders;
        body: CreatePlaylistResponse;
    }>;
    /**
     * Remove a specific video from a playlist for the authenticated user
     * Remove a video from a playlist
     * @param id Playlist ID
     * @param itemId Playlist Item ID
     */
    deleteItem(id: string, itemId: string): Promise<ResponseSuccess>;
    /**
     * Remove a specific video from a playlist for the authenticated user
     * Remove a video from a playlist
     * @param id Playlist ID
     * @param itemId Playlist Item ID
     */
    deleteItemWithResponseHeaders(id: string, itemId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Delete a specific playlist by its ID for the authenticated user
     * Delete a playlist by ID
     * @param id Playlist ID
     */
    deletePlaylist(id: string): Promise<ResponseSuccess>;
    /**
     * Delete a specific playlist by its ID for the authenticated user
     * Delete a playlist by ID
     * @param id Playlist ID
     */
    deletePlaylistWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Retrieve a specific playlist by its ID for the current user.
     * Get playlist by ID
     * @param {Object} searchParams
     * @param { string } searchParams.id Playlist ID
     * @param { &#39;created_at&#39; | &#39;title&#39; } searchParams.sortBy Sort field
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy Sort order
     */
    getPlaylistById(args: {
        id: string;
        sortBy?: 'created_at' | 'title';
        orderBy?: 'asc' | 'desc';
    }): Promise<GetPlaylistByIdResponse>;
    /**
     * Retrieve a specific playlist by its ID for the current user.
     * Get playlist by ID
     * @param {Object} searchParams
     * @param { string } searchParams.id Playlist ID
     * @param { &#39;created_at&#39; | &#39;title&#39; } searchParams.sortBy Sort field
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy Sort order
     */
    getPlaylistByIdWithResponseHeaders({ id, sortBy, orderBy, }: {
        id: string;
        sortBy?: 'created_at' | 'title';
        orderBy?: 'asc' | 'desc';
    }): Promise<{
        headers: ApiResponseHeaders;
        body: GetPlaylistByIdResponse;
    }>;
    /**
     * Get a specific playlist public by its ID
     * Get a playlist public
     * @param id Playlist ID
     */
    getPlaylistInfo(id: string): Promise<PublicPlaylistObject>;
    /**
     * Get a specific playlist public by its ID
     * Get a playlist public
     * @param id Playlist ID
     */
    getPlaylistInfoWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: PublicPlaylistObject;
    }>;
    /**
     * Retrieve a list of playlists for the authenticated user
     * Get user's playlists
     * @param payload Get playlist list request
     */
    getPlaylists(payload?: GetPlaylistListRequest): Promise<GetPlaylistListResponse>;
    /**
     * Retrieve a list of playlists for the authenticated user
     * Get user's playlists
     * @param payload Get playlist list request
     */
    getPlaylistsWithResponseHeaders(payload?: GetPlaylistListRequest): Promise<{
        headers: ApiResponseHeaders;
        body: GetPlaylistListResponse;
    }>;
    /**
     * Change the position of a video in a playlist for the authenticated user.
     * Move a video within a playlist
     * @param id Playlist ID
     * @param payload Move video details
     */
    moveItems(id: string, payload?: MoveVideoInPlaylistRequest): Promise<ResponseSuccess>;
    /**
     * Change the position of a video in a playlist for the authenticated user.
     * Move a video within a playlist
     * @param id Playlist ID
     * @param payload Move video details
     */
    moveItemsWithResponseHeaders(id: string, payload?: MoveVideoInPlaylistRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Update details of a specific playlist for the authenticated user
     * Update a playlist
     * @param id Playlist ID
     * @param file Thumbnail
     * @param name Playlist name
     * @param tags Tags
     * @param metadata Metadata
     */
    updatePlaylist(id: string, file: string | Readable | Buffer, name?: string, tags?: Array<string>, metadata?: Array<string>): Promise<ResponseSuccess>;
    /**
     * Update details of a specific playlist for the authenticated user
     * Update a playlist
     * @param id Playlist ID
     * @param file Thumbnail
     * @param name Playlist name
     * @param tags Tags
     * @param metadata Metadata
     */
    updatePlaylistWithResponseHeaders(id: string, file: string | Readable | Buffer, name?: string, tags?: Array<string>, metadata?: Array<string>): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
}
