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
import { readableToBuffer } from '../HttpClient';

/**
 * no description
 */
export default class PlayersApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Create a player for your video, and customize it.
   * Create a player theme
   * @param request Player theme input
   */
  public async create(
    request: CreatePlayerThemeRequest = {}
  ): Promise<CreatePlayerThemesResponse> {
    return this.createWithResponseHeaders(request).then((res) => res.body);
  }

  /**
   * Create a player for your video, and customize it.
   * Create a player theme
   * @param request Player theme input
   */
  public async createWithResponseHeaders(
    request: CreatePlayerThemeRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: CreatePlayerThemesResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/players'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'CreatePlayerThemeRequest', ''),
      contentType
    );

    queryParams.method = 'POST';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'CreatePlayerThemesResponse',
          ''
        ) as CreatePlayerThemesResponse,
      };
    });
  }

  /**
   * Retrieve a player theme by its ID, as well as details about it.
   * Get a player theme by ID
   * @param id Player theme ID
   */
  public async get(id: string): Promise<GetPlayerThemeByIdResponse> {
    return this.getWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Retrieve a player theme by its ID, as well as details about it.
   * Get a player theme by ID
   * @param id Player theme ID
   */
  public async getWithResponseHeaders(id: string): Promise<{
    headers: ApiResponseHeaders;
    body: GetPlayerThemeByIdResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/players/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetPlayerThemeByIdResponse',
          ''
        ) as GetPlayerThemeByIdResponse,
      };
    });
  }

  /**
   * Use a player ID to update specific details for a player.
   * Update a player theme by ID
   * @param id Player theme ID
   * @param input Player theme input
   */
  public async update(
    id: string,
    input: UpdatePlayerThemeRequest = {}
  ): Promise<UpdatePlayerThemeResponse> {
    return this.updateWithResponseHeaders(id, input).then((res) => res.body);
  }

  /**
   * Use a player ID to update specific details for a player.
   * Update a player theme by ID
   * @param id Player theme ID
   * @param input Player theme input
   */
  public async updateWithResponseHeaders(
    id: string,
    input: UpdatePlayerThemeRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: UpdatePlayerThemeResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling update.'
      );
    }
    if (input === null || input === undefined) {
      throw new Error(
        'Required parameter input was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/players/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(input, 'UpdatePlayerThemeRequest', ''),
      contentType
    );

    queryParams.method = 'PATCH';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'UpdatePlayerThemeResponse',
          ''
        ) as UpdatePlayerThemeResponse,
      };
    });
  }

  /**
   * Delete a player if you no longer need it. You can delete any player that you have the player ID for.
   * Delete a player theme by ID
   * @param id Player theme ID
   */
  public async delete(id: string): Promise<ResponseSuccess> {
    return this.deleteWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Delete a player if you no longer need it. You can delete any player that you have the player ID for.
   * Delete a player theme by ID
   * @param id Player theme ID
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
    const localVarPath = '/players/{id}'
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
   * Retrieve a list of all the player themes you created, as well as details about each one.
   * List all player themes
   * @param {Object} searchParams
   * @param { string } searchParams.search only support search by name
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async list(
    args: {
      search?: string;
      sortBy?: 'created_at' | 'name';
      orderBy?: 'asc' | 'desc';
      offset?: number;
      limit?: number;
    } = {}
  ): Promise<GetPlayerThemeResponse> {
    return this.listWithResponseHeaders(args).then((res) => res.body);
  }

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
  public async listWithResponseHeaders({
    search,
    sortBy,
    orderBy,
    offset,
    limit,
  }: {
    search?: string;
    sortBy?: 'created_at' | 'name';
    orderBy?: 'asc' | 'desc';
    offset?: number;
    limit?: number;
  } = {}): Promise<{
    headers: ApiResponseHeaders;
    body: GetPlayerThemeResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/players'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (search !== undefined) {
      urlSearchParams.append(
        'search',
        ObjectSerializer.serialize(search, 'string', '')
      );
    }
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
          'GetPlayerThemeResponse',
          ''
        ) as GetPlayerThemeResponse,
      };
    });
  }

  /**
   * Upload a logo for a player theme by its ID.
   * Upload a logo for a player theme by ID
   * @param id Player theme ID
   * @param file The uploaded file (JPG or PNG)
   * @param link The link to the logo (optional if a file is provided)
   */
  public async uploadLogo(
    id: string,
    file: string | Readable | Buffer,
    link: string
  ): Promise<UploadLogoByIdResponse> {
    return this.uploadLogoWithResponseHeaders(id, file, link).then(
      (res) => res.body
    );
  }

  /**
   * Upload a logo for a player theme by its ID.
   * Upload a logo for a player theme by ID
   * @param id Player theme ID
   * @param file The uploaded file (JPG or PNG)
   * @param link The link to the logo (optional if a file is provided)
   */
  public async uploadLogoWithResponseHeaders(
    id: string,
    file: string | Readable | Buffer,
    link: string
  ): Promise<{ headers: ApiResponseHeaders; body: UploadLogoByIdResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling uploadLogo.'
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

    if (link === null || link === undefined) {
      throw new Error(
        'Required parameter link was null or undefined when calling uploadLogo.'
      );
    }
    // Path Params
    const localVarPath = '/players/{id}/logo'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'POST';

    const formData = new FormData();

    formData.append(fileName, fileBuffer, fileName);

    if (typeof link !== undefined) {
      formData.append('link', link);
    }

    queryParams.body = formData;
    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'UploadLogoByIdResponse',
          ''
        ) as UploadLogoByIdResponse,
      };
    });
  }

  /**
   * Delete the logo associated to a player.
   * Delete a logo for a player theme by ID
   * @param id Player theme ID
   */
  public async deleteLogo(id: string): Promise<ResponseSuccess> {
    return this.deleteLogoWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Delete the logo associated to a player.
   * Delete a logo for a player theme by ID
   * @param id Player theme ID
   */
  public async deleteLogoWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteLogo.'
      );
    }
    // Path Params
    const localVarPath = '/players/{id}/logo'
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
   * Add a player theme to a video by Id.
   * Add a player theme to a video
   * @param request Add player theme to video request
   */
  public async addPlayer(
    request: AddPlayerThemesToVideoRequest = {}
  ): Promise<ResponseSuccess> {
    return this.addPlayerWithResponseHeaders(request).then((res) => res.body);
  }

  /**
   * Add a player theme to a video by Id.
   * Add a player theme to a video
   * @param request Add player theme to video request
   */
  public async addPlayerWithResponseHeaders(
    request: AddPlayerThemesToVideoRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling addPlayer.'
      );
    }
    // Path Params
    const localVarPath = '/players/add-player'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'AddPlayerThemesToVideoRequest', ''),
      contentType
    );

    queryParams.method = 'POST';

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
   * Remove a player theme from a video by Id.
   * Remove a player theme from a video
   * @param request Remove player theme from video request
   */
  public async removePlayer(
    request: RemovePlayerThemesFromVideoRequest = {}
  ): Promise<ResponseSuccess> {
    return this.removePlayerWithResponseHeaders(request).then(
      (res) => res.body
    );
  }

  /**
   * Remove a player theme from a video by Id.
   * Remove a player theme from a video
   * @param request Remove player theme from video request
   */
  public async removePlayerWithResponseHeaders(
    request: RemovePlayerThemesFromVideoRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling removePlayer.'
      );
    }
    // Path Params
    const localVarPath = '/players/remove-player'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        request,
        'RemovePlayerThemesFromVideoRequest',
        ''
      ),
      contentType
    );

    queryParams.method = 'POST';

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
