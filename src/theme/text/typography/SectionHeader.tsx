import { Box } from '../../box';

import { Text } from '../Text';

interface SectionHeaderPropType {
  action?: {
    label: string;
    onPress?: () => void;
  };
  titleMetaText?: string;
  titleText: string;
}

/**
 * Displays a Title text and a borderless action to the right
 */
export function SectionHeader({
  titleText,
  action,
  titleMetaText,
  ...rest
}: SectionHeaderPropType) {
  const handlePressText = () => {
    action?.onPress?.();
  };
  return (
    <Box
      alignItems="center"
      flex={1}
      flexDirection="row"
      justifyContent="space-between"
      pb="l"
      pt="m"
      px="l"
      {...rest}
    >
      <Box alignItems="flex-end" flex={0.75} flexDirection="row">
        <Text pl="s" variant="title">
          {titleText}
        </Text>

        {titleMetaText ? (
          <Text mb="s" ml="s" variant="eyebrow">
            {titleMetaText}
          </Text>
        ) : null}
      </Box>

      {action ? (
        <Text
          lineHeight={42}
          onPress={handlePressText}
          pl="l"
          pt="s"
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
