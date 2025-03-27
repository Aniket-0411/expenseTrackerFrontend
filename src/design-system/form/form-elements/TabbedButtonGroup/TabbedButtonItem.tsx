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
 */
export function TabbedButtonItem({
  isActive,
  index,
  itemBoxProps,
  label,
  onSwitchToTab,
}: ITabbedButtonItemProps) {
  const handlePressTab = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onSwitchToTab(index);
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Pressable onPress={handlePressTab} style={{ flex: 1 }}>
      <Box
        alignItems="center"
        bg={isActive ? 'buttonPrimaryBackground' : 'transparent'}
        borderRadius="xxs"
        elevation={1}
        flex={1}
        pointerEvents="box-only"
        py="s"
        shadowColor="shadowColor"
        shadowOffset={{ width: 2, height: 2 }}
        shadowOpacity={0.75}
        shadowRadius={5}
        {...itemBoxProps}
      >
        <Text color={isActive ? 'buttonPrimaryLabel' : 'inputText'} tx={label} />
      </Box>
    </Pressable>
  );
}
