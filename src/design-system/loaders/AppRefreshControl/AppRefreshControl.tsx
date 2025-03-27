import { useEffect, useMemo, useState } from 'react';
import { RefreshControl } from 'react-native';
import * as Haptics from 'expo-haptics';

import { isIOS } from '~/utils';
import { useThemeColors } from '~/theme';

interface IAppRefreshControlProps {
  /**
   * Whether the indicator is loading or not.
   */
  refreshing: boolean;
  /**
   * Callback to be made when the screen is pulled and this control loads.
   */
  onRefresh?: () => void;
  /**
   * Determines how far from the edge should the progress indicator be offset.
   */
  progressViewOffset?: number;
}

/**
 * -----------------------------------------------------------------------------
 * This is a wrapper around the native `RefreshControl` component that allows
 * for centralized state management and color customization of the refresh without
 * forcing the parents to define local state every time.
 *
 * TODO: Currently the tint colors are not working because of the bug in the
 * new RN architecture.
 */
export function AppRefreshControl({
  refreshing,
  onRefresh,
  progressViewOffset = 0,
  ...rest
}: IAppRefreshControlProps) {
  const { mainForeground: color1, danger: color2 } = useThemeColors();
  const [isRefreshing, setIsRefreshing] = useState(refreshing);

  useEffect(() => {
    setIsRefreshing(refreshing);
  }, [refreshing]);

  const handleRefresh = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onRefresh?.();
  };

  const getThemeColors = () => {
    if (isIOS) {
      return { tintColor: 'red' };
    }

    return { colors: ['green', 'blue'] };
  };

  const colorProps = useMemo(
    () => getThemeColors(),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [color1, color2]
  );

  return (
    <RefreshControl
      {...colorProps}
      onRefresh={handleRefresh}
      progressBackgroundColor={color1}
      progressViewOffset={progressViewOffset}
      refreshing={isRefreshing}
      {...rest}
    />
  );
}
