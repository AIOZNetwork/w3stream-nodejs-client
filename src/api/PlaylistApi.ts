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
import ObjectSerializer, { COLLECTION_FORMATS } from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
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
import { readableToBuffer } from '../HttpClient';

/**
 * no description
 */
export default class PlaylistApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Delete the thumbnail of a specific playlist for the authenticated user
   * Delete a playlist thumbnail
   * @param id Playlist ID
   */
  public async deleteThumbnail(id: string): Promise<ResponseSuccess> {
    return this.deleteThumbnailWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Delete the thumbnail of a specific playlist for the authenticated user
   * Delete a playlist thumbnail
   * @param id Playlist ID
   */
  public async deleteThumbnailWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteThumbnail.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}/thumbnail'
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
   * Add a specific video to a playlist for the authenticated user
   * Add a video to a playlist
   * @param id Playlist ID
   * @param request Video details
   */
  public async addItem(
    id: string,
    request: AddVideoToPlaylistRequest = {}
  ): Promise<ResponseSuccess> {
    return this.addItemWithResponseHeaders(id, request).then((res) => res.body);
  }

  /**
   * Add a specific video to a playlist for the authenticated user
   * Add a video to a playlist
   * @param id Playlist ID
   * @param request Video details
   */
  public async addItemWithResponseHeaders(
    id: string,
    request: AddVideoToPlaylistRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling addItem.'
      );
    }
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling addItem.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}/items'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'AddVideoToPlaylistRequest', ''),
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
   * Create a new playlist for the authenticated user
   * Create a new playlist
   * @param payload Create playlist request
   */
  public async createPlaylist(
    payload: CreatePlaylistRequest = {}
  ): Promise<CreatePlaylistResponse> {
    return this.createPlaylistWithResponseHeaders(payload).then(
      (res) => res.body
    );
  }

  /**
   * Create a new playlist for the authenticated user
   * Create a new playlist
   * @param payload Create playlist request
   */
  public async createPlaylistWithResponseHeaders(
    payload: CreatePlaylistRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: CreatePlaylistResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (payload === null || payload === undefined) {
      throw new Error(
        'Required parameter payload was null or undefined when calling createPlaylist.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/create'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(payload, 'CreatePlaylistRequest', ''),
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
          'CreatePlaylistResponse',
          ''
        ) as CreatePlaylistResponse,
      };
    });
  }

  /**
   * Remove a specific video from a playlist for the authenticated user
   * Remove a video from a playlist
   * @param id Playlist ID
   * @param itemId Playlist Item ID
   */
  public async deleteItem(
    id: string,
    itemId: string
  ): Promise<ResponseSuccess> {
    return this.deleteItemWithResponseHeaders(id, itemId).then(
      (res) => res.body
    );
  }

  /**
   * Remove a specific video from a playlist for the authenticated user
   * Remove a video from a playlist
   * @param id Playlist ID
   * @param itemId Playlist Item ID
   */
  public async deleteItemWithResponseHeaders(
    id: string,
    itemId: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteItem.'
      );
    }
    if (itemId === null || itemId === undefined) {
      throw new Error(
        'Required parameter itemId was null or undefined when calling deleteItem.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}/items/{item_id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));

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
   * Delete a specific playlist by its ID for the authenticated user
   * Delete a playlist by ID
   * @param id Playlist ID
   */
  public async deletePlaylist(id: string): Promise<ResponseSuccess> {
    return this.deletePlaylistWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Delete a specific playlist by its ID for the authenticated user
   * Delete a playlist by ID
   * @param id Playlist ID
   */
  public async deletePlaylistWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deletePlaylist.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}'
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
   * Retrieve a specific playlist by its ID for the current user.
   * Get playlist by ID
   * @param {Object} searchParams
   * @param { string } searchParams.id Playlist ID
   * @param { &#39;created_at&#39; | &#39;title&#39; } searchParams.sortBy Sort field
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy Sort order
   */
  public async getPlaylistById(args: {
    id: string;
    sortBy?: 'created_at' | 'title';
    orderBy?: 'asc' | 'desc';
  }): Promise<GetPlaylistByIdResponse> {
    return this.getPlaylistByIdWithResponseHeaders(args).then(
      (res) => res.body
    );
  }

  /**
   * Retrieve a specific playlist by its ID for the current user.
   * Get playlist by ID
   * @param {Object} searchParams
   * @param { string } searchParams.id Playlist ID
   * @param { &#39;created_at&#39; | &#39;title&#39; } searchParams.sortBy Sort field
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy Sort order
   */
  public async getPlaylistByIdWithResponseHeaders({
    id,
    sortBy,
    orderBy,
  }: {
    id: string;
    sortBy?: 'created_at' | 'title';
    orderBy?: 'asc' | 'desc';
  }): Promise<{ headers: ApiResponseHeaders; body: GetPlaylistByIdResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getPlaylistById.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (sortBy !== undefined) {
      urlSearchParams.append(
        'sort_by',
        ObjectSerializer.serialize(sortBy, "'created_at' | 'title'", '')
      );
    }
    if (orderBy !== undefined) {
      urlSearchParams.append(
        'order_by',
        ObjectSerializer.serialize(orderBy, "'asc' | 'desc'", '')
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
          'GetPlaylistByIdResponse',
          ''
        ) as GetPlaylistByIdResponse,
      };
    });
  }

  /**
   * Get a specific playlist public by its ID
   * Get a playlist public
   * @param id Playlist ID
   */
  public async getPlaylistInfo(id: string): Promise<PublicPlaylistObject> {
    return this.getPlaylistInfoWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Get a specific playlist public by its ID
   * Get a playlist public
   * @param id Playlist ID
   */
  public async getPlaylistInfoWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: PublicPlaylistObject }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getPlaylistInfo.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}/player.json'
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
          'PublicPlaylistObject',
          ''
        ) as PublicPlaylistObject,
      };
    });
  }

  /**
   * Retrieve a list of playlists for the authenticated user
   * Get user's playlists
   * @param payload Get playlist list request
   */
  public async getPlaylists(
    payload: GetPlaylistListRequest = {}
  ): Promise<GetPlaylistListResponse> {
    return this.getPlaylistsWithResponseHeaders(payload).then(
      (res) => res.body
    );
  }

  /**
   * Retrieve a list of playlists for the authenticated user
   * Get user's playlists
   * @param payload Get playlist list request
   */
  public async getPlaylistsWithResponseHeaders(
    payload: GetPlaylistListRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: GetPlaylistListResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (payload === null || payload === undefined) {
      throw new Error(
        'Required parameter payload was null or undefined when calling getPlaylists.'
      );
    }
    // Path Params
    const localVarPath = '/playlists'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(payload, 'GetPlaylistListRequest', ''),
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
          'GetPlaylistListResponse',
          ''
        ) as GetPlaylistListResponse,
      };
    });
  }

  /**
   * Change the position of a video in a playlist for the authenticated user.
   * Move a video within a playlist
   * @param id Playlist ID
   * @param payload Move video details
   */
  public async moveItems(
    id: string,
    payload: MoveVideoInPlaylistRequest = {}
  ): Promise<ResponseSuccess> {
    return this.moveItemsWithResponseHeaders(id, payload).then(
      (res) => res.body
    );
  }

  /**
   * Change the position of a video in a playlist for the authenticated user.
   * Move a video within a playlist
   * @param id Playlist ID
   * @param payload Move video details
   */
  public async moveItemsWithResponseHeaders(
    id: string,
    payload: MoveVideoInPlaylistRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling moveItems.'
      );
    }
    if (payload === null || payload === undefined) {
      throw new Error(
        'Required parameter payload was null or undefined when calling moveItems.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}/items'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(payload, 'MoveVideoInPlaylistRequest', ''),
      contentType
    );

    queryParams.method = 'PUT';

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
   * Update details of a specific playlist for the authenticated user
   * Update a playlist
   * @param id Playlist ID
   * @param file Thumbnail
   * @param name Playlist name
   * @param tags Tags
   * @param metadata Metadata
   */
  public async updatePlaylist(
    id: string,
    file: string | Readable | Buffer,
    name?: string,
    tags?: Array<string>,
    metadata?: Array<string>
  ): Promise<ResponseSuccess> {
    return this.updatePlaylistWithResponseHeaders(
      id,
      file,
      name,
      tags,
      metadata
    ).then((res) => res.body);
  }

  /**
   * Update details of a specific playlist for the authenticated user
   * Update a playlist
   * @param id Playlist ID
   * @param file Thumbnail
   * @param name Playlist name
   * @param tags Tags
   * @param metadata Metadata
   */
  public async updatePlaylistWithResponseHeaders(
    id: string,
    file: string | Readable | Buffer,
    name?: string,
    tags?: Array<string>,
    metadata?: Array<string>
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updatePlaylist.'
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
    const localVarPath = '/playlists/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'PATCH';

    const formData = new FormData();

    formData.append(fileName, fileBuffer, fileName);

    if (typeof name !== undefined) {
      formData.append('name', name);
    }
    if (tags) {
      formData.append('tags', tags.join(COLLECTION_FORMATS['csv']));
    }
    if (metadata) {
      formData.append('metadata', metadata.join(COLLECTION_FORMATS['csv']));
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
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }
}
