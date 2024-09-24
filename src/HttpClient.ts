/**
 * @w3stream/nodejs-client
 * w3stream is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */

import axios, { AxiosError, AxiosHeaders, AxiosProgressEvent } from 'axios';
import W3StreamError from './W3StreamError';
import ProblemDetails from './model/ProblemDetails';
import { encode } from 'js-base64';
import { Readable, Stream } from 'stream';

export type QueryOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
  searchParams?: URLSearchParams;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

export type ApiResponseHeaders = {
  server: string;
  'content-type': string;
  'transfer-encoding': string;
  connection: string;
  'cache-control': string;
  date: string;
  'x-ratelimit-remaining': string;
  'x-ratelimit-retry-after': string;
  'x-ratelimit-limit': string;
  'x-server': string;
  'access-control-allow-origin': string;
  'timing-allow-origin': string;
};

export default class HttpClient {
  private publicKey?: string;
  private secretKey?: string;
  private bearerToken?: string;
  private baseUri: string;
  private headers: AxiosHeaders;
  private chunkSize: number;

  constructor(params: {
    publicKey?: string;
    secretKey?: string;
    bearerToken?: string;
    baseUri: string;
    chunkSize: number;
    applicationName?: string;
    applicationVersion?: string;
    sdkName?: string;
    sdkVersion?: string;
  }) {
    this.publicKey = params.publicKey;
    this.secretKey = params.secretKey;
    this.bearerToken = params.bearerToken;
    this.baseUri = params.baseUri;
    this.chunkSize = params.chunkSize;
    this.headers = new AxiosHeaders({
      Accept: 'application/json, */*;q=0.8',
      'AV-Origin-Client': 'nodejs:2.6.0',
      Authorization: this.bearerToken
        ? `Bearer ${this.bearerToken}`
        : this.secretKey
        ? `Basic ${encode(`${this.publicKey}:${this.secretKey}`)}`
        : '',
      'w3stream-public-key': this.publicKey || '',
      'w3stream-secret-key': this.secretKey || '',
      ...(params.applicationName && params.applicationVersion
        ? {
            'AV-Origin-App': `${params.applicationName}:${params.applicationVersion}`,
          }
        : {}),
      ...(params.sdkName && params.sdkVersion
        ? {
            'AV-Origin-Sdk': `${params.sdkName}:${params.sdkVersion}`,
          }
        : {}),
    });
  }

  getChunkSize() {
    return this.chunkSize;
  }

  public async call(path: string, options: QueryOptions) {
    if (!options.method) throw new Error('Method is required');
    try {
      const axiosRes = await axios.request({
        url: `${this.baseUri}/${path}${
          options.searchParams ? `?${options.searchParams.toString()}` : ''
        }`,
        headers: this.headers.concat(options.headers || {}),
        method: options.method,
        onUploadProgress: options.onUploadProgress,
        data: options.body,
      });

      return {
        headers: axiosRes.headers as any,
        body: JSON.stringify(axiosRes.data),
      };
    } catch (error: any) {
      const axiosError = error as AxiosError;
      throw new W3StreamError(
        axiosError.response?.status || 0,
        axiosError.response?.data as ProblemDetails
      );
    }
  }
}

export async function readableToBuffer(readable: Readable): Promise<Buffer> {
  const writableStream = new Stream.Writable({
    defaultEncoding: 'utf-8',
  });
  const data: Buffer[] = [];
  writableStream._write = (chunk, encoding, next) => {
    data.push(Buffer.from(chunk, encoding));
    next();
  };

  return new Promise((resolve, reject) => {
    Stream.pipeline(readable, writableStream, async (err) => {
      if (err) {
        reject(err);
      }

      const buffer = Buffer.concat(data);
      resolve(buffer);
    });
  });
}
