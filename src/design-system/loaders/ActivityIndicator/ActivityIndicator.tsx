import { ColorValue, ActivityIndicator as RNActivityIndicator } from 'react-native';

import { Box, BoxPropsType, TThemeColor, useThemeColorKey } from '~/theme';

interface IAppRefreshControlProps extends BoxPropsType {
  color?: TThemeColor;
  size?: number;
}

/**
 * -----------------------------------------------------------------------------
 * This is a wrapper around the activity indicator to give it custom themed
 * spacing and colors.
 */
export function ActivityIndicator({
  color = 'mainForeground',
  size = 1,
  ...rest
}: IAppRefreshControlProps) {
  const colorVal: ColorValue = useThemeColorKey(color);

  return (
    <Box flexDirection="row" py="xs" {...rest}>
      <RNActivityIndicator
        color={colorVal}
        size="small"
        style={{ transform: [{ scaleX: size }, { scaleY: size }] }}
      />
    </Box>
  );
}
