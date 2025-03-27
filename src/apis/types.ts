/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { IApiError, IError } from '~/utils';

export type TApiResponseError = AxiosError<IError>;

/**
 * Configuration for the `ApiClient`.
 */
export interface IApiConfiguration<T = any> extends AxiosRequestConfig {
  /**
   * Custom `JWT` token for authorizing APIs that don't use the default Login token.
   */
  accessToken?: string;
  /**
   * The dynamic typed data expected from this API response.
   */
  data?: T;
  /**
   * Whether the APi requires injecting an authorization token or note.
   * - Defaults to `true`. Since most APIs do except for a few like Login.
   */
  requiresAuth?: boolean;
  /**
   * Since all out sales force APIs use auth now, adding this key to augment
   * the `requiresAuth` flag. Unlike `requiresAuth` this uses the
   * `integrationSession.accessToken` instead of the activeSession from the auth store.
   */
  isPrivateApi?: boolean;
  acceptHeader?: 'application/json';
  contentType?: 'application/json' | 'multipart/form-data' | 'application/x-www-form-urlencoded';
  retry?: boolean;
}

/**
 * Defines the type of response received on successfully API request
 */
export interface IApiResponse<TResponseData> extends AxiosResponse {
  data: TResponseData;
  success: true;
}

/**
 * This is the format fo the expected response data from the Refresh Token API call.
 */
export interface IApiTokenResponseData {
  /**
   * Highlights whether the request was successful or failed (set by server).
   */
  status: string | boolean;
  /**
   * The success message (set by server).
   */
  message: string;
  data: {
    /**
     * The API response token to be appended to all request.
     * Immediately persisted in device storage and cached by API clients too.
     */
    token: string;
    /**
     * The refresh token to be persisted in local device storage.
     */
    refreshToken: string;
  };
}

/**
 * Interface for `ApiClient` to show api functions.
 */
export interface IApiClient {
  /**
   * Post api function which returns Promise data as response.
   */
  post<TResponseData = any, TRequestPayload = any>(
    endpoint: string,
    payload: TRequestPayload,
    config?: IApiConfiguration<TRequestPayload>
  ): Promise<IApiResponse<TResponseData> | IApiError>;
  /**
   * Patch api function which returns Promise data as response.
   */
  patch<TResponseData = any, TRequestPayload = any>(
    endpoint: string,
    payload: TRequestPayload,
    config?: IApiConfiguration<TRequestPayload>
  ): Promise<IApiResponse<TResponseData> | IApiError>;
  /**
   * Put api function which returns Promise data as response.
   */
  put<TResponseData = any, TRequestPayload = any>(
    endpoint: string,
    payload: TRequestPayload,
    config?: IApiConfiguration<TRequestPayload>
  ): Promise<IApiResponse<TResponseData> | IApiError>;
  /**
   * Get api function which returns Promise data as response.
   */
  get<TResponseData = any, TRequestPayload = any>(
    endpoint: string,
    config?: IApiConfiguration<TRequestPayload>
  ): Promise<IApiResponse<TResponseData> | IApiError>;
}
