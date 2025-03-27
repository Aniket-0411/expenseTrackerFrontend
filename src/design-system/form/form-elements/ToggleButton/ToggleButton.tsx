import { TouchableOpacity } from 'react-native';

import { Box, isTablet } from '~/theme';

import { ChevronDownIcon } from '../../../icons';

interface IToggleButtonProps {
  isCollapsed: boolean;
  onPress: () => void;
}

/**
 * -----------------------------------------------------------------------------
 * Provides a clickable action that toggles a dropdown or section when tapped.
 */
export function ToggleButton({ isCollapsed, onPress }: IToggleButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        backgroundColor="secondaryBackground"
        borderColor="subTableBorder"
        borderRadius="xs"
        borderWidth={0.74}
        pointerEvents="none"
      >
        {isCollapsed ? (
          <ChevronDownIcon
            boxProps={{ px: 'm', py: 'm' }}
            color="actionLabel"
            size={isTablet ? 14 : 12}
          />
        ) : (
          <ChevronDownIcon
            boxProps={{ px: 'm', py: 'm' }}
            color="actionLabel"
            size={isTablet ? 14 : 12}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        )}
      </Box>
    </TouchableOpacity>
  );
}
