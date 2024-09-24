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
import AddPlayerThemesToVideoRequest from '../model/AddPlayerThemesToVideoRequest';
import CreatePlayerThemeRequest from '../model/CreatePlayerThemeRequest';
import CreatePlayerThemesResponse from '../model/CreatePlayerThemesResponse';
import GetPlayerThemeByIdResponse from '../model/GetPlayerThemeByIdResponse';
import GetPlayerThemeResponse from '../model/GetPlayerThemeResponse';
import RemovePlayerThemesFromVideoRequest from '../model/RemovePlayerThemesFromVideoRequest';
import ResponseSuccess from '../model/ResponseSuccess';
import UpdatePlayerThemeRequest from '../model/UpdatePlayerThemeRequest';
import UpdatePlayerThemeResponse from '../model/UpdatePlayerThemeResponse';
import UploadLogoByIdResponse from '../model/UploadLogoByIdResponse';
import { Readable } from 'stream';
/**
 * no description
 */
export default class PlayersApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Create a player for your video, and customize it.
     * Create a player theme
     * @param request Player theme input
     */
    create(request?: CreatePlayerThemeRequest): Promise<CreatePlayerThemesResponse>;
    /**
     * Create a player for your video, and customize it.
     * Create a player theme
     * @param request Player theme input
     */
    createWithResponseHeaders(request?: CreatePlayerThemeRequest): Promise<{
        headers: ApiResponseHeaders;
        body: CreatePlayerThemesResponse;
    }>;
    /**
     * Retrieve a player theme by its ID, as well as details about it.
     * Get a player theme by ID
     * @param id Player theme ID
     */
    get(id: string): Promise<GetPlayerThemeByIdResponse>;
    /**
     * Retrieve a player theme by its ID, as well as details about it.
     * Get a player theme by ID
     * @param id Player theme ID
     */
    getWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: GetPlayerThemeByIdResponse;
    }>;
    /**
     * Use a player ID to update specific details for a player.
     * Update a player theme by ID
     * @param id Player theme ID
     * @param input Player theme input
     */
    update(id: string, input?: UpdatePlayerThemeRequest): Promise<UpdatePlayerThemeResponse>;
    /**
     * Use a player ID to update specific details for a player.
     * Update a player theme by ID
     * @param id Player theme ID
     * @param input Player theme input
     */
    updateWithResponseHeaders(id: string, input?: UpdatePlayerThemeRequest): Promise<{
        headers: ApiResponseHeaders;
        body: UpdatePlayerThemeResponse;
    }>;
    /**
     * Delete a player if you no longer need it. You can delete any player that you have the player ID for.
     * Delete a player theme by ID
     * @param id Player theme ID
     */
    delete(id: string): Promise<ResponseSuccess>;
    /**
     * Delete a player if you no longer need it. You can delete any player that you have the player ID for.
     * Delete a player theme by ID
     * @param id Player theme ID
     */
    deleteWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Retrieve a list of all the player themes you created, as well as details about each one.
     * List all player themes
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
    }): Promise<GetPlayerThemeResponse>;
    /**
     * Retrieve a list of all the player themes you created, as well as details about each one.
     * List all player themes
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
        body: GetPlayerThemeResponse;
    }>;
    /**
     * Upload a logo for a player theme by its ID.
     * Upload a logo for a player theme by ID
     * @param id Player theme ID
     * @param file The uploaded file (JPG or PNG)
     * @param link The link to the logo (optional if a file is provided)
     */
    uploadLogo(id: string, file: string | Readable | Buffer, link: string): Promise<UploadLogoByIdResponse>;
    /**
     * Upload a logo for a player theme by its ID.
     * Upload a logo for a player theme by ID
     * @param id Player theme ID
     * @param file The uploaded file (JPG or PNG)
     * @param link The link to the logo (optional if a file is provided)
     */
    uploadLogoWithResponseHeaders(id: string, file: string | Readable | Buffer, link: string): Promise<{
        headers: ApiResponseHeaders;
        body: UploadLogoByIdResponse;
    }>;
    /**
     * Delete the logo associated to a player.
     * Delete a logo for a player theme by ID
     * @param id Player theme ID
     */
    deleteLogo(id: string): Promise<ResponseSuccess>;
    /**
     * Delete the logo associated to a player.
     * Delete a logo for a player theme by ID
     * @param id Player theme ID
     */
    deleteLogoWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Add a player theme to a video by Id.
     * Add a player theme to a video
     * @param request Add player theme to video request
     */
    addPlayer(request?: AddPlayerThemesToVideoRequest): Promise<ResponseSuccess>;
    /**
     * Add a player theme to a video by Id.
     * Add a player theme to a video
     * @param request Add player theme to video request
     */
    addPlayerWithResponseHeaders(request?: AddPlayerThemesToVideoRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * Remove a player theme from a video by Id.
     * Remove a player theme from a video
     * @param request Remove player theme from video request
     */
    removePlayer(request?: RemovePlayerThemesFromVideoRequest): Promise<ResponseSuccess>;
    /**
     * Remove a player theme from a video by Id.
     * Remove a player theme from a video
     * @param request Remove player theme from video request
     */
    removePlayerWithResponseHeaders(request?: RemovePlayerThemesFromVideoRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
}
