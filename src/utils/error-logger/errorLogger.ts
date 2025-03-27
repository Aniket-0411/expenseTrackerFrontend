import { ErrorEventsEnum, IErrorLoggerOptions, IErrorLogToRemoteUtilOptions } from './types';

// TODO: Setup NewRelic Logging here.

/**
 * To be used in logging errors to remote utilities like `Sentry` or `NewRelic`.
 */
export const errorLogToRemoteUtil = async ({
  error,
  errorCode = ErrorEventsEnum.ERROR_IN_APP,
  errorTitle = '⭕️ errorLogToRemoteUtil',
  message = 'Something went wrong',
  params,
}: IErrorLogToRemoteUtilOptions) => {
  const deviceDetails = {};

  /**
   * TODO:: Log this error to external remote tracker like `NewRelic`
   * This helps to keep track of what actually went wrong on
   * the user's device that we were not able to handle from the server or
   * or within app error boundaries.
   *
   * Not, this Check ignores logs if the device is an emulator.
   * */
  const errorObject = {
    // ...userDetails, // TODO: Add user details for very specific errors
    app_or_api_errorParams: JSON.stringify(params),
    device_details: JSON.stringify(deviceDetails),
    title: `${errorCode}-${errorTitle}`,
  };

  /**
   * Only show these logs in development to avoid leaking code logic.
   * TODO: In prod, log these to a third party like sentry/newrelic.
   */
  if (process.env.NODE_ENV === 'development') {
    console.error({
      '🔥 -  TODO: Send this error to NewRelic': 'APP ERROR',
      errorTitle,
      error,
      errorCode,
      errorObject,
      deviceDetails,
      params,
      message,
    });
  }
};

/**
 * This is a wrapper around the external error loggers to pass additional
 * anonymous information to the logging service.
 *
 * @param {{errorCode: string, error: {*}}} The error name & its stack trace
 */
export function errorLogger({
  error,
  errorCode,
  handleAsCrash = true,
  message,
  errorInfo,
}: IErrorLoggerOptions) {
  const errorAttributes = {
    errorCode,
    appEnvironment: process.env.NODE_ENV,
  };

  /**
   * Kill this off early to avoid logging these errors in prod.
   * TODO: If prod, log the errors to a third party tool (NewRelic/Sentry).
   */
  if (process.env.NODE_ENV !== 'development') return;

  switch (errorCode) {
    case ErrorEventsEnum.ERROR_IN_APP: {
      console.info({
        '⭕️ - Application Error': errorCode,
        error,
        errorAttributes,
        message,
        errorInfo,
      });

      break;
    }
    case ErrorEventsEnum.ERROR_IN_SCREEN_OR_PAGE: {
      console.info({
        '🚨 - Screen Error Boundary': '---',
        error,
        errorCode,
        errorAttributes,
        message,
        errorInfo,
      });
      break;
    }
    case ErrorEventsEnum.ERROR_IN_API_CALL: {
      console.info({
        '🌐 🚨 -- Error n API call': '--',
        error,
        errorCode,
        errorAttributes,
        message,
        errorInfo,
      });
      break;
    }
    case ErrorEventsEnum.ERROR_IN_ATTACHMENT: {
      console.info({
        '🌐 🚨 -- Error n Attachments': '--',
        error,
        errorCode,
        errorAttributes,
        message,
        errorInfo,
      });
      break;
    }

    case ErrorEventsEnum.ERROR_IN_PERMISSION: {
      console.info({
        '🔐🚨 -- Error in Accessing Device Permissions': '--',
        error,
        errorCode,
        errorAttributes,
        message,
        errorInfo,
      });
      break;
    }

    default: {
      break;
    }
  }

  // TODO: Log to NewRelic as potential App crashing error P0/P1 issue.
  if (handleAsCrash) {
    // TODO: Log this as a crash & MS teams alert
  }
}
