import { TouchableOpacity } from 'react-native';

import { Box } from '../../box';
import { useThemeContext } from '../../hooks';
import { Text } from '../../text';

/**
 * -----------------------------------------------------------------------------
 * This renders an element that toggle the theme on and off during DEV
 */
export function DevThemeToggle() {
  const { isThemeLight, onThemeChange } = useThemeContext();

  const handleOnToggleTheme = () => {
    onThemeChange?.(isThemeLight ? 'dark' : 'light');
  };

  return (
    <Box
      borderColor="loaderBorder"
      borderRadius="s"
      borderWidth={0.5}
      left={14}
      opacity={0.15}
      position="absolute"
      px="s"
      py="xxs"
      top={360}
      zIndex={1000000}
    >
      <TouchableOpacity onPress={handleOnToggleTheme}>
        <Box flexDirection="row" gap="xs" pointerEvents="none">
          <Text fontSize={8} text="⭕️" />

          <Text fontSize={8} text="theme" />
        </Box>
      </TouchableOpacity>
    </Box>
  );
}
