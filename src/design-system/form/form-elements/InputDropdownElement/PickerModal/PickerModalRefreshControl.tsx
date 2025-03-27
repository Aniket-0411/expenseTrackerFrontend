import { RefreshControl as RNRefreshControl } from 'react-native';

import { isIOS } from '~/utils';
import { useThemeColors } from '~/theme';

interface IPickerModalRefreshControlProps {
  refreshing: boolean;
  onRefresh(): void;
}

/**
 * -----------------------------------------------------------------------------
 * If added to a ScrollView, re-fetches the app config when the view is pulled down.
 */
export function PickerModalRefreshControl({
  refreshing,
  onRefresh,
}: IPickerModalRefreshControlProps) {
  const { mainBackground, secondaryBackgroundDarkest } = useThemeColors();

  const colorProps = isIOS
    ? { tintColor: mainBackground }
    : { colors: [mainBackground, secondaryBackgroundDarkest] };

  return (
    <RNRefreshControl
      {...colorProps}
      onRefresh={onRefresh}
      progressBackgroundColor={mainBackground}
      refreshing={refreshing}
    />
  );
}
