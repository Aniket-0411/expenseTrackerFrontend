import { Box, Text } from '~/theme';

interface ITextInputPrefixProps {
  color: string;
  prefix: string;
}

/**
 * -----------------------------------------------------------------------------
 * This component is appended to the text input if it has a valid prefix.
 *
 * Example, a country code that is appended to phone number input.
 */
export function TextInputPrefix({ color, prefix }: ITextInputPrefixProps) {
  return (
    <Box justifyContent="center" pe="s">
      <Text fontSize={15} opacity={0.85} style={{ color }}>
        {prefix}
      </Text>
    </Box>
  );
}
