import { ErrorInfo } from 'react';

import { TTextLocalized } from '../types';

export enum ErrorEventsEnum {
  ERROR_IN_APP = '🅰️ - Application Wide Error',
  ERROR_IN_APP_INITIALIZATION = '⭕️ - Error while initializing the application',
  ERROR_IN_SCREEN_OR_PAGE = '🚩 - Error Caught by the Screen or Page',
  ERROR_IN_API_CALL = '🚨 - Error in API call',
  ERROR_IN_ATTACHMENT = '📎 - Error Image/File Attachment',
  ERROR_IN_PAYMENT = '🏦 - Error in Payment Processing',
  ERROR_IN__LOCAL_OR_MMKV_STORAGE = '💾 - Error in Persisted Storage',
  ERROR_IN_PERMISSION = '🔐 - Error in Accessing Permissions',
  ERROR_IN_PDF = '📜 - Error in PDF',
  BIOMETRICS_AUTH_ERROR = '🔒 - Biometrics Authentication Error',
}

export type TErrorEventsKey = keyof typeof ErrorEventsEnum;

export interface IErrorLogToRemoteUtilOptions {
  error: Error | unknown;
  errorCode: ErrorEventsEnum;
  errorTitle?: string;
  message?: string | TTextLocalized;
  params?: Record<string, string | number>;
}

export interface ILogDevicePermissionErrorArgs {
  message?: string;
  shouldOpenSettings?: string;
}

export interface IErrorLoggerOptions {
  error: Error | unknown;
  errorCode: ErrorEventsEnum;
  errorInfo?: Record<string, unknown> | ErrorInfo;
  errorTitle?: string;
  message?: string;
  handleAsCrash?: boolean;
}

/**
 * Base type definition of the error throw by the server + `success` key added
 * by the axios error interceptor.
 */
export interface IError {
  error?: string;
  error_description?: string;
  errorMessage?: string;
  message: string;
  status: boolean | string;
  success: false;
}

export interface IErrorServer {
  title: string;
  message: string;
}

/**
 * Denotes the type of errors to be addressed by the error handler and by the
 * error boundaries across apps.
 */
export type TErrorType =
  | 'JS_TYPE_ERROR'
  | 'NETWORK_ERROR'
  | 'SERVER_ERROR'
  | 'SESSION_ERROR'
  | 'TIMEOUT_ERROR';

/**
 * Overall error throw by Axios plus additional fields to allow for customizing
 * the front end error boundaries based on the error types, message & description.
 */
export interface IApiError {
  /**
   * The actual error object throw by the Axios client, the error handler or
   * JS runtime thread.
   */
  error: Error;
  errorData?: unknown;
  errorServer?: IErrorServer;
  /**
   * The error message returned by the server to be shown on the UI.
   * - (If blank & error is caught by handler, can be set from CMS app handler)
   */
  message: string | TTextLocalized;
  /**
   * Some additional information about the error for more context.
   * Most important for styling error boundary fallback screens.
   * - (From CMS & set by app handler)
   */
  description?: string | TTextLocalized;
  /**
   * This is set by the error handler to specifically highlight that it's an
   * error and to add type matching for the same truthy key on success set by
   * successful response interceptors.
   */
  success: false;
  /**
   * Status code thrown from the error. Can be set by the server of the handler.
   * Similar to status code but more dynamic.
   */
  status: number | boolean | string;
  /**
   * Thrown by server & axios to indicate the status of the response.
   * @deprecated Remove this later
   */
  statusCode?: string;
  /**
   * This is the most important key for tracking the error category. This is used
   * by the error handler in grouping the errors and later will be used by the
   * error boundary in showing fallback UIs based on `error.type`.
   */
  type: TErrorType;
}
