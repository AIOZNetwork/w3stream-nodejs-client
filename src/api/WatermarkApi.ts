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

import path from 'path';
import { createReadStream } from 'fs';
import { URLSearchParams } from 'url';
import FormData from 'form-data';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import CreateWatermarkResponse from '../model/CreateWatermarkResponse';
import GetAllWatermarkResponse from '../model/GetAllWatermarkResponse';
import ResponseSuccess from '../model/ResponseSuccess';
import { Readable } from 'stream';
import { readableToBuffer } from '../HttpClient';

/**
 * no description
 */
export default class WatermarkApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Create a new watermark by uploading a JPG or a PNG image.
   * Create a new watermark
   * @param file Watermark image file
   */
  public async upload(
    file: string | Readable | Buffer
  ): Promise<CreateWatermarkResponse> {
    return this.uploadWithResponseHeaders(file).then((res) => res.body);
  }

  /**
   * Create a new watermark by uploading a JPG or a PNG image.
   * Create a new watermark
   * @param file Watermark image file
   */
  public async uploadWithResponseHeaders(
    file: string | Readable | Buffer
  ): Promise<{ headers: ApiResponseHeaders; body: CreateWatermarkResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    let fileName = 'file';
    let fileBuffer = file;
    if (typeof file === 'string') {
      fileName = path.basename(file);
      fileBuffer = createReadStream(file);
    }
    if (file instanceof Readable) {
      fileBuffer = await readableToBuffer(file);
    }

    // Path Params
    const localVarPath = '/watermarks'.substring(1);

    queryParams.method = 'POST';

    const formData = new FormData();

    formData.append(fileName, fileBuffer, fileName);

    queryParams.body = formData;
    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'CreateWatermarkResponse',
          ''
        ) as CreateWatermarkResponse,
      };
    });
  }

  /**
   * Delete a watermark.
   * Delete a watermark by ID
   * @param id Watermark ID
   */
  public async delete(id: string): Promise<ResponseSuccess> {
    return this.deleteWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Delete a watermark.
   * Delete a watermark by ID
   * @param id Watermark ID
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
    const localVarPath = '/watermarks/{id}'
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
   * List all watermarks associated with your workspace.
   * List all watermarks
   * @param {Object} searchParams
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async list(args: {
    sortBy?: 'created_at' | 'name';
    orderBy?: 'asc' | 'desc';
    offset?: number;
    limit?: number;
  }): Promise<GetAllWatermarkResponse> {
    return this.listWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * List all watermarks associated with your workspace.
   * List all watermarks
   * @param {Object} searchParams
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async listWithResponseHeaders({
    sortBy,
    orderBy,
    offset,
    limit,
  }: {
    sortBy?: 'created_at' | 'name';
    orderBy?: 'asc' | 'desc';
    offset?: number;
    limit?: number;
  }): Promise<{ headers: ApiResponseHeaders; body: GetAllWatermarkResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/watermarks'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

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
          'GetAllWatermarkResponse',
          ''
        ) as GetAllWatermarkResponse,
      };
    });
  }
}
