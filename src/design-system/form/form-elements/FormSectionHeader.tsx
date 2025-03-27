import { TouchableOpacity } from 'react-native';

import { TxKeyPath } from '~/i18n';
import { Box, isTablet, Text } from '~/theme';

import { ToggleButton } from './ToggleButton';

interface IFormSectionHeaderProps {
  isCollapsed: boolean;
  onToggleSection: () => void;
  title: TxKeyPath;
}

/**
 * -----------------------------------------------------------------------------
 * Section title of a given FormSectionBlock in a form, providing an option for
 * the user to collapse the section.
 */
export function FormSectionHeader({
  isCollapsed,
  onToggleSection,
  title,
}: IFormSectionHeaderProps) {
  const handlePress = () => {
    onToggleSection();
  };

  return (
    <Box alignItems="center" flexDirection="row" justifyContent="space-between" paddingBottom="m">
      <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
        <Text
          fontFamily="fontPrimaryMedium"
          fontSize={isTablet ? 28 : 24}
          tx={title}
          variant="title"
        />
      </TouchableOpacity>

      <ToggleButton isCollapsed={isCollapsed} onPress={handlePress} />
    </Box>
  );
}
