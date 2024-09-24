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
import CreateWatermarkResponse from '../model/CreateWatermarkResponse';
import GetAllWatermarkResponse from '../model/GetAllWatermarkResponse';
import ResponseSuccess from '../model/ResponseSuccess';
import { Readable } from 'stream';
/**
 * no description
 */
export default class WatermarkApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Create a new watermark by uploading a JPG or a PNG image.
     * Create a new watermark
     * @param file Watermark image file
     */
    upload(file: string | Readable | Buffer): Promise<CreateWatermarkResponse>;
    /**
     * Create a new watermark by uploading a JPG or a PNG image.
     * Create a new watermark
     * @param file Watermark image file
     */
    uploadWithResponseHeaders(file: string | Readable | Buffer): Promise<{
        headers: ApiResponseHeaders;
        body: CreateWatermarkResponse;
    }>;
    /**
     * Delete a watermark.
     * Delete a watermark by ID
     * @param id Watermark ID
     */
    delete(id: string): Promise<ResponseSuccess>;
    /**
     * Delete a watermark.
     * Delete a watermark by ID
     * @param id Watermark ID
     */
    deleteWithResponseHeaders(id: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccess;
    }>;
    /**
     * List all watermarks associated with your workspace.
     * List all watermarks
     * @param {Object} searchParams
     * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    list(args: {
        sortBy?: 'created_at' | 'name';
        orderBy?: 'asc' | 'desc';
        offset?: number;
        limit?: number;
    }): Promise<GetAllWatermarkResponse>;
    /**
     * List all watermarks associated with your workspace.
     * List all watermarks
     * @param {Object} searchParams
     * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
     * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
     * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
     */
    listWithResponseHeaders({ sortBy, orderBy, offset, limit, }: {
        sortBy?: 'created_at' | 'name';
        orderBy?: 'asc' | 'desc';
        offset?: number;
        limit?: number;
    }): Promise<{
        headers: ApiResponseHeaders;
        body: GetAllWatermarkResponse;
    }>;
}
