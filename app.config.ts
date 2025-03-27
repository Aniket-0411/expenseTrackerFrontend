import { ExpoConfig, ConfigContext } from '@expo/config';

/**
 * Use ts-node here so we can use TypeScript for our Config Plugins
 * and not have to compile them to JavaScript
 */
// eslint-disable-next-line import/no-extraneous-dependencies
require('ts-node/register');

/**
 * @param config ExpoConfig coming from the static config app.json if it exists
 *
 * You can read more about Expo's Configuration Resolution Rules here:
 * https://docs.expo.dev/workflow/configuration/#configuration-resolution-rules
 */
export default ({ config }: ConfigContext): Partial<ExpoConfig> => {
  const existingPlugins = config.plugins ?? [];

  return {
    ...config,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    plugins: [...existingPlugins, require('./plugins/withSplashScreen').withSplashScreen],
    extra: {
      eas: {
        projectId: '40a6b6d0-ec3f-4115-b501-95a2fa312267',
      },
      ignite: {
        version: '9.9.0',
      },
      team: 'Endgame',
    },
  };
};
