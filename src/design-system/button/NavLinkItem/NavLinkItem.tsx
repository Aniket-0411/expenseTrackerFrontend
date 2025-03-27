import { ReactElement } from 'react';
import { PressableProps } from 'react-native';

import { Box, BoxPropsType, Text, TBaseTextProps } from '~/theme';
import { Pressable } from '../Pressable';

interface INavLinkActionProps extends TBaseTextProps {
  /**
   * The properties to be passed to the wrapper box/view component.
   */
  boxProps?: BoxPropsType;
  /**
   * Left action custom ReactElement.
   */
  EndComponent?: ReactElement;
  /**
   * Right action custom ReactElement
   */
  StartComponent?: ReactElement;
  /**
   * The props to be passed to the wrapper `TouchableOpacity` component.
   */
  containerProps?: PressableProps;
  /**
   * The props to be passed to the wrapper `TouchableOpacity` component.
   */
  onPress: () => void;
}

/**
 * -----------------------------------------------------------------------------
 * This renders an action item for a navigation link that routes the user to a
 * different page.
 */
export function NavLinkItem({
  boxProps,
  EndComponent,
  StartComponent,
  containerProps,
  onPress,
  ...rest
}: INavLinkActionProps) {
  return (
    <Pressable {...containerProps} onPress={onPress}>
      <Box flexDirection="row" gap="s" pointerEvents="none" px="l" py="s" {...boxProps}>
        {StartComponent || null}

        <Text {...rest} variant="navLinkLabel" />

        {EndComponent || null}
      </Box>
    </Pressable>
  );
}
