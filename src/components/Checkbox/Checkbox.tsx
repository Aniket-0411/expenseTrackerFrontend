import { TouchableOpacity } from 'react-native';

import { Box, Text } from '~/theme';
import { CheckBoxIndicator } from '~/design-system';

interface ICheckboxProps {
  checked: boolean;
  colorLabel: string;
  label: string;
  onToggle: () => void;
}

/**
 * -----------------------------------------------------------------------------
 * Renders a checkbox with a label and a color label.
 */
export function Checkbox({ checked, colorLabel, label, onToggle }: ICheckboxProps) {
  return (
    <TouchableOpacity onPress={onToggle}>
      <Box alignItems="center" flexDirection="row" my="s">
        <CheckBoxIndicator isActive={checked} />

        <Box flexDirection="row" gap="s">
          <Text color="inputLabel" fontSize={14} ms="m">
            {label}
          </Text>

          <Text color="buttonSecondaryLabel" fontFamily="fontPrimaryMedium" fontSize={14}>
            {colorLabel}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
