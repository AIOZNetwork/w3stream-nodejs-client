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
import CreateVideoChapterResponse from '../model/CreateVideoChapterResponse';
import GetVideoChaptersResponse from '../model/GetVideoChaptersResponse';
import ResponseSuccess from '../model/ResponseSuccess';
import { Readable } from 'stream';
/**
 * no description
 */
export default class VideoChapterApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Create a VTT file to add chapters to your video. Chapters help break the video into sections.
     * Create a video chapter
     * @param id Video ID
     * @param lan Language
     * @param file VTT File
     */
    create(id: string, lan: string, file: string | Readable | Buffer): Promise<CreateVideoChapterResponse>;
    /**
     * Create a VTT file to add chapters to your video. Chapters help break the video into sections.
     * Create a video chapter
     * @param id Video ID
     * @param lan Language
     * @param file VTT File
     */
    createWithResponseHeaders(id: string, lan: string, file: string | Readable | Buffer): Promise<{
        headers: ApiResponseHeaders;
        body: CreateVideoChapterResponse;
    }>;
    /**
     * Get a chapter for by video id in a specific language.
     * Get video chapters
     * @param {Object} searchParams
     * @param { string } searchParams.id Video ID
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    get(args: {
        id: string;
        offset?: number;
        limit?: number;
    }): Promise<GetVideoChaptersResponse>;
    /**
     * Get a chapter for by video id in a specific language.
     * Get video chapters
     * @param {Object} searchParams
     * @param { string } searchParams.id Video ID
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    getWithResponseHeaders({ id, offset, limit, }: {
        id: string;
        offset?: number;
        limit?: number;
    }): Promise<{
        headers: ApiResponseHeaders;
        body: GetVideoChaptersResponse;
    }>;
    /**
     * Delete a chapter in a specific language by providing the video ID for the video you want to delete the chapter from and the language the chapter is in.
     * Delete a video chapter
     * @param id Video ID
     * @param lan Language
     */
    delete(id: string, lan: string): Promise<ResponseSuccess>;
    /**
     * Delete a chapter in a specific language by providing the video ID for the video you want to delete the chapter from and the language the chapter is in.
     * Delete a video chapter
     * @param id Video ID
     * @param lan Language
     */
    deleteWithResponseHeaders(id: string, lan: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
}
