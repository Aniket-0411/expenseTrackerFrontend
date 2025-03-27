import { Box } from '../box';
import { Text } from '../text';
import { BoxPropsType } from '../types';

interface SectionFooterPropsType extends BoxPropsType {
  baseText?: string;
  subtitle?: string;
  titleCapitalized?: boolean;
  titleText: string;
}

/**
 * -----------------------------------------------------------------------------
 * Displays a Title text and a borderless action to the right
 */
export function SectionFooter({
  titleText,
  titleCapitalized,
  subtitle,
  baseText,
  ...rest
}: SectionFooterPropsType) {
  return (
    <Box alignItems="flex-start" flex={1} paddingVertical="s" {...rest}>
      <Text
        fontSize={24}
        paddingBottom="s"
        textTransform={titleCapitalized ? 'uppercase' : 'none'}
        variant="title"
      >
        {titleText}
      </Text>

      {subtitle ? <Text variant="subtitle">{subtitle}</Text> : null}

      {baseText ? <Text paddingTop="xs">{baseText}</Text> : null}
    </Box>
  );
}
