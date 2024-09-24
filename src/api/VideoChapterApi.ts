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
import CreateVideoChapterResponse from '../model/CreateVideoChapterResponse';
import GetVideoChaptersResponse from '../model/GetVideoChaptersResponse';
import ResponseSuccess from '../model/ResponseSuccess';
import { Readable } from 'stream';
import { readableToBuffer } from '../HttpClient';

/**
 * no description
 */
export default class VideoChapterApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Create a VTT file to add chapters to your video. Chapters help break the video into sections.
   * Create a video chapter
   * @param id Video ID
   * @param lan Language
   * @param file VTT File
   */
  public async create(
    id: string,
    lan: string,
    file: string | Readable | Buffer
  ): Promise<CreateVideoChapterResponse> {
    return this.createWithResponseHeaders(id, lan, file).then(
      (res) => res.body
    );
  }

  /**
   * Create a VTT file to add chapters to your video. Chapters help break the video into sections.
   * Create a video chapter
   * @param id Video ID
   * @param lan Language
   * @param file VTT File
   */
  public async createWithResponseHeaders(
    id: string,
    lan: string,
    file: string | Readable | Buffer
  ): Promise<{
    headers: ApiResponseHeaders;
    body: CreateVideoChapterResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling create.'
      );
    }
    if (lan === null || lan === undefined) {
      throw new Error(
        'Required parameter lan was null or undefined when calling create.'
      );
    }
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
    const localVarPath = '/videos/{id}/chapter/{lan}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'lan' + '}', encodeURIComponent(String(lan)));

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
          'CreateVideoChapterResponse',
          ''
        ) as CreateVideoChapterResponse,
      };
    });
  }

  /**
   * Get a chapter for by video id in a specific language.
   * Get video chapters
   * @param {Object} searchParams
   * @param { string } searchParams.id Video ID
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async get(args: {
    id: string;
    offset?: number;
    limit?: number;
  }): Promise<GetVideoChaptersResponse> {
    return this.getWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * Get a chapter for by video id in a specific language.
   * Get video chapters
   * @param {Object} searchParams
   * @param { string } searchParams.id Video ID
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async getWithResponseHeaders({
    id,
    offset,
    limit,
  }: {
    id: string;
    offset?: number;
    limit?: number;
  }): Promise<{ headers: ApiResponseHeaders; body: GetVideoChaptersResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{id}/chapters'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

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
          'GetVideoChaptersResponse',
          ''
        ) as GetVideoChaptersResponse,
      };
    });
  }

  /**
   * Delete a chapter in a specific language by providing the video ID for the video you want to delete the chapter from and the language the chapter is in.
   * Delete a video chapter
   * @param id Video ID
   * @param lan Language
   */
  public async delete(id: string, lan: string): Promise<ResponseSuccess> {
    return this.deleteWithResponseHeaders(id, lan).then((res) => res.body);
  }

  /**
   * Delete a chapter in a specific language by providing the video ID for the video you want to delete the chapter from and the language the chapter is in.
   * Delete a video chapter
   * @param id Video ID
   * @param lan Language
   */
  public async deleteWithResponseHeaders(
    id: string,
    lan: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling delete.'
      );
    }
    if (lan === null || lan === undefined) {
      throw new Error(
        'Required parameter lan was null or undefined when calling delete.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{id}/chapter/{lan}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'lan' + '}', encodeURIComponent(String(lan)));

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
}
