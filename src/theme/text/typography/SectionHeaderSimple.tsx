import { Box } from '../../box';

import { Text } from '../Text';

import { SectionSubtitle } from './SectionSubtitle';

interface SectionHeaderSimplePropType {
  action?: {
    label: string;
    onPress?: () => void;
  };
  subtitle?: string;
  title: string;
  titleMetaText?: string | number;
}

/**
 * -----------------------------------------------------------------------------
 * Provides a header with meta data and an action to the section of the home
 * screen.
 */
export function SectionHeaderSimple({
  action,
  subtitle,
  title,
  titleMetaText,
  ...rest
}: SectionHeaderSimplePropType) {
  const handleOnPress = () => {
    action?.onPress?.();
  };

  return (
    <Box
      alignItems="center"
      flex={1}
      flexDirection="row"
      justifyContent="space-between"
      paddingBottom="m"
      paddingTop="l"
      {...rest}
    >
      <Box alignItems="flex-end" flex={action ? 0.75 : 1} flexDirection="row">
        <Box>
          <Text fontSize={22} variant="title">
            {title}
          </Text>

          {subtitle ? <SectionSubtitle subtitle={subtitle} titleMetaText={titleMetaText} /> : null}
        </Box>
      </Box>

      {action ? (
        <Text
          lineHeight={42}
          onPress={handleOnPress}
          paddingLeft="l"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ flex: 0.25 }}
          variant="actionLabel"
        >
          {action.label}
        </Text>
      ) : null}
    </Box>
  );
}
