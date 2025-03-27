import { Component, ErrorInfo, ReactNode } from 'react';
import { router } from 'expo-router';

import { SectionFeedbackContent } from '~/design-system';

import { ErrorDetails } from './ErrorDetails';

interface IProps {
  readonly children: ReactNode;
  readonly catchErrors: 'always' | 'dev' | 'prod' | 'never';
  readonly type: 'section' | 'screen' | 'app-wide';
}

interface IState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * -----------------------------------------------------------------------------
 * This component handles whenever the user encounters a JS error in the
 * app. It follows the "error boundary" pattern in React. We're using a
 * class component because according to the documentation, only class
 * components can be error boundaries.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/concept/Error-Boundary/}
 * @see [React Error Boundaries]{@link https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary}
 * @param {IProps} props - The props for the `ErrorBoundary` component.
 * @returns {JSX.Element} The rendered `ErrorBoundary` component.
 */
export class ErrorBoundary extends Component<IProps, IState> {
  // eslint-disable-next-line react/state-in-constructor
  state = { error: null, errorInfo: null };

  // To avoid unnecessary re-renders
  shouldComponentUpdate(_nextProps: Readonly<IProps>, nextState: Readonly<IState>): boolean {
    const { error } = this.state;
    return nextState.error !== error;
  }

  // If an error in a child is encountered, this will run
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Only set errors if enabled
    if (!this.isEnabled()) {
      return;
    }
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });

    // You can also log error messages to an error reporting service here
    // This is a great place to put BugSnag, Sentry, crashlytics, etc:
    // reportCrash(error)
  }

  // Reset the error back to null
  resetError = () => {
    this.setState({ error: null, errorInfo: null });
  };

  // Only enable if we're catching errors in the right environment
  isEnabled(): boolean {
    const { catchErrors } = this.props;
    return (
      catchErrors === 'always' ||
      (catchErrors === 'dev' && __DEV__) ||
      (catchErrors === 'prod' && !__DEV__)
    );
  }

  // Render an error UI if there's an error; otherwise, render children
  render() {
    const { error, errorInfo } = this.state;
    const { children, type } = this.props;

    // TODO: Extract this into a component
    // NOTE: This is still a WIP and we need to figure out how to handle
    // the navigation in the error screen.
    // NEED to handle errors thrown in the API screen before rendering.
    const handleNavigateHome = () => {
      router.push('/home');
    };

    if (this.isEnabled() && error) {
      if (type === 'section') {
        return (
          <SectionFeedbackContent
            action={{
              onPress: handleNavigateHome,
              label: 'errorScreen.authTokenError.retryLabel',
            }}
            description="errorScreen.errorInScreenSection.description"
            hasLoadingIndicator
            heading="errorScreen.errorInScreenSection.heading"
            mt="l"
            pb="none"
            title="errorScreen.errorInScreenSection.title"
            type="INFO"
          />
        );
      }
      return <ErrorDetails error={error} errorInfo={errorInfo} onReset={this.resetError} />;
    }

    return children;
  }
}
