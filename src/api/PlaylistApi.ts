/**
 * @w3stream/nodejs-client
 * VMS Service
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
import Metadata from '../model/Metadata';
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
   * Add a specific video to a playlist for the authenticated user
   * Add a video to a playlist
   * @param id Playlist ID
   * @param payload Video details
   */
  public async addVideoToPlaylist(
    id: string,
    payload: AddVideoToPlaylistRequest = {}
  ): Promise<ResponseSuccess> {
    return this.addVideoToPlaylistWithResponseHeaders(id, payload).then(
      (res) => res.body
    );
  }

  /**
   * Add a specific video to a playlist for the authenticated user
   * Add a video to a playlist
   * @param id Playlist ID
   * @param payload Video details
   */
  public async addVideoToPlaylistWithResponseHeaders(
    id: string,
    payload: AddVideoToPlaylistRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling addVideoToPlaylist.'
      );
    }
    if (payload === null || payload === undefined) {
      throw new Error(
        'Required parameter payload was null or undefined when calling addVideoToPlaylist.'
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
      ObjectSerializer.serialize(payload, 'AddVideoToPlaylistRequest', ''),
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
   * Create a playlist for the authenticated user
   * Create a playlist
   * @param request Playlist input
   */
  public async createPlaylist(
    request: CreatePlaylistRequest = {}
  ): Promise<CreatePlaylistResponse> {
    return this.createPlaylistWithResponseHeaders(request).then(
      (res) => res.body
    );
  }

  /**
   * Create a playlist for the authenticated user
   * Create a playlist
   * @param request Playlist input
   */
  public async createPlaylistWithResponseHeaders(
    request: CreatePlaylistRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: CreatePlaylistResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling createPlaylist.'
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
      ObjectSerializer.serialize(request, 'CreatePlaylistRequest', ''),
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
   * Delete a specific playlist by its ID for the authenticated user
   * Delete a playlist by ID
   * @param id Playlist ID
   */
  public async deletePlaylistById(id: string): Promise<ResponseSuccess> {
    return this.deletePlaylistByIdWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Delete a specific playlist by its ID for the authenticated user
   * Delete a playlist by ID
   * @param id Playlist ID
   */
  public async deletePlaylistByIdWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deletePlaylistById.'
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
   * Delete the thumbnail of a specific playlist for the authenticated user
   * Delete a playlist thumbnail
   * @param id Playlist ID
   */
  public async deletePlaylistThumbnail(id: string): Promise<ResponseSuccess> {
    return this.deletePlaylistThumbnailWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Delete the thumbnail of a specific playlist for the authenticated user
   * Delete a playlist thumbnail
   * @param id Playlist ID
   */
  public async deletePlaylistThumbnailWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deletePlaylistThumbnail.'
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
   * Retrieve a specific playlist by its ID for the current user.
   * Get playlist by ID
   * @param {Object} searchParams
   * @param { string } searchParams.id Playlist ID
   * @param { &#39;created_at&#39; | &#39;title&#39; | &#39;duration&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   */
  public async getPlaylistById(args: {
    id: string;
    sortBy?: 'created_at' | 'title' | 'duration';
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
   * @param { &#39;created_at&#39; | &#39;title&#39; | &#39;duration&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   */
  public async getPlaylistByIdWithResponseHeaders({
    id,
    sortBy,
    orderBy,
  }: {
    id: string;
    sortBy?: 'created_at' | 'title' | 'duration';
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
        ObjectSerializer.serialize(
          sortBy,
          "'created_at' | 'title' | 'duration'",
          ''
        )
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
  public async getPlaylistPublicInfo(
    id: string
  ): Promise<PublicPlaylistObject> {
    return this.getPlaylistPublicInfoWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Get a specific playlist public by its ID
   * Get a playlist public
   * @param id Playlist ID
   */
  public async getPlaylistPublicInfoWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: PublicPlaylistObject }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getPlaylistPublicInfo.'
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
   * @param request Playlist filter
   */
  public async getPlaylists(
    request: GetPlaylistListRequest = {}
  ): Promise<GetPlaylistListResponse> {
    return this.getPlaylistsWithResponseHeaders(request).then(
      (res) => res.body
    );
  }

  /**
   * Retrieve a list of playlists for the authenticated user
   * Get user's playlists
   * @param request Playlist filter
   */
  public async getPlaylistsWithResponseHeaders(
    request: GetPlaylistListRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: GetPlaylistListResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling getPlaylists.'
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
      ObjectSerializer.serialize(request, 'GetPlaylistListRequest', ''),
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
   * Move a specific video in a playlist for the authenticated user
   * Move a video in a playlist
   * @param id Playlist ID
   * @param payload Video details
   */
  public async moveVideoInPlaylist(
    id: string,
    payload: MoveVideoInPlaylistRequest = {}
  ): Promise<ResponseSuccess> {
    return this.moveVideoInPlaylistWithResponseHeaders(id, payload).then(
      (res) => res.body
    );
  }

  /**
   * Move a specific video in a playlist for the authenticated user
   * Move a video in a playlist
   * @param id Playlist ID
   * @param payload Video details
   */
  public async moveVideoInPlaylistWithResponseHeaders(
    id: string,
    payload: MoveVideoInPlaylistRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling moveVideoInPlaylist.'
      );
    }
    if (payload === null || payload === undefined) {
      throw new Error(
        'Required parameter payload was null or undefined when calling moveVideoInPlaylist.'
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
   * Remove a specific video from a playlist for the authenticated user
   * Remove a video from a playlist
   * @param id Playlist ID
   * @param itemId Playlist Item ID
   */
  public async removeVideoFromPlaylist(
    id: string,
    itemId: string
  ): Promise<ResponseSuccess> {
    return this.removeVideoFromPlaylistWithResponseHeaders(id, itemId).then(
      (res) => res.body
    );
  }

  /**
   * Remove a specific video from a playlist for the authenticated user
   * Remove a video from a playlist
   * @param id Playlist ID
   * @param itemId Playlist Item ID
   */
  public async removeVideoFromPlaylistWithResponseHeaders(
    id: string,
    itemId: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling removeVideoFromPlaylist.'
      );
    }
    if (itemId === null || itemId === undefined) {
      throw new Error(
        'Required parameter itemId was null or undefined when calling removeVideoFromPlaylist.'
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
   * Update a specific playlist for the authenticated user
   * Update a playlist
   * @param id Playlist ID
   * @param file
   * @param metadata
   * @param name
   * @param tags
   */
  public async updatePlaylist(
    id: string,
    file: string | Readable | Buffer,
    metadata?: Array<Metadata>,
    name?: string,
    tags?: Array<string>
  ): Promise<ResponseSuccess> {
    return this.updatePlaylistWithResponseHeaders(
      id,
      file,
      metadata,
      name,
      tags
    ).then((res) => res.body);
  }

  /**
   * Update a specific playlist for the authenticated user
   * Update a playlist
   * @param id Playlist ID
   * @param file
   * @param metadata
   * @param name
   * @param tags
   */
  public async updatePlaylistWithResponseHeaders(
    id: string,
    file: string | Readable | Buffer,
    metadata?: Array<Metadata>,
    name?: string,
    tags?: Array<string>
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
    if (metadata) {
      formData.append('metadata', metadata.join(COLLECTION_FORMATS['csv']));
    }

    if (typeof name !== undefined) {
      formData.append('name', name);
    }
    if (tags) {
      formData.append('tags', tags.join(COLLECTION_FORMATS['csv']));
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
