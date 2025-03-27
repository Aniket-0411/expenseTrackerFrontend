import { LogBox } from 'react-native';

/**
 * Ignore some yellowbox warnings. Some of these are for deprecated functions
 * that we haven't gotten around to replacing yet.
 */
const ignoreLogBoxWarnings = () => {
  // prettier-ignore
  LogBox.ignoreLogs([
    'Require cycle:',
    'getHost: "Invalid non-string URL" for scriptURL - Falling back to localhost',
  ]);
};

export { ignoreLogBoxWarnings };
