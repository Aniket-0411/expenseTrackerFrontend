import { forwardRef, ForwardedRef } from 'react';
import { View } from 'react-native';
import * as Haptics from 'expo-haptics';

import { TxKeyPath } from '~/i18n';
import { Box, BoxPropsType, Text } from '~/theme';

import { Pressable } from '../../../button';

interface ITabbedButtonItemProps {
  isActive: boolean;
  index: number;
  itemBoxProps?: BoxPropsType;
  label: TxKeyPath;
  onSwitchToTab: (tabIndex: number) => void;
}

/**
 * -----------------------------------------------------------------------------
 * This renders a tabbed button group that switches between two tabs.
 * TODO: Recalculate the layout when the nav screen orientation changes.
 */
function TabbedButtonItemInner(
  { isActive, index, itemBoxProps, label, onSwitchToTab }: ITabbedButtonItemProps,
  ref: ForwardedRef<View>
) {
  const handlePressTab = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onSwitchToTab(index);
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Pressable onPress={handlePressTab} style={{ flex: 1 }}>
      <Box
        ref={ref}
        alignItems="center"
        // flex={1}
        pointerEvents="none"
        py="s"
        {...itemBoxProps}
      >
        <Text color={isActive ? 'buttonPrimaryLabel' : 'inputText'} tx={label} />
      </Box>
    </Pressable>
  );
}

/**
 * @deprecated - This is deprecated until reanimated v3 is stable with new arch.
 */
export const TabbedButtonItem = forwardRef(TabbedButtonItemInner);
