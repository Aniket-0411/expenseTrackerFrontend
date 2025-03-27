import { Box, TResponsiveValue } from '../../box';

import { Text } from '../Text';

interface EyebrowTextType {
  hasLineRight?: boolean;
  label: string;
  opacity?: number;
  paddingBottom?: TResponsiveValue;
  paddingLeft?: TResponsiveValue;
  paddingRight?: TResponsiveValue;
  paddingTop?: TResponsiveValue;
}

/**
 * -----------------------------------------------------------------------------
 * Component that display a smaller/fainter text above a more pronounced text.
 * This is symbolic to the eyebrows of the face above the eyes.
 * Acts like a super script of a title/heading text.
 *
 * It's configurable to allow for additional padding and horizontal lines
 */
export function EyebrowText({
  hasLineRight = false,
  label,
  opacity = 0.85,
  paddingBottom = 'none',
  paddingLeft = 'none',
  paddingRight = 'none',
  paddingTop = 'none',
}: EyebrowTextType) {
  return (
    <Box
      alignItems="center"
      flexDirection="row"
      pb={paddingBottom}
      pl={paddingLeft}
      pr={paddingRight}
      pt={paddingTop}
    >
      <Text variant="eyebrow">{label}</Text>

      {hasLineRight ? (
        <Box
          borderBottomWidth={1}
          borderColor="textCaption"
          borderStyle="solid"
          flex={1}
          height={1}
          marginHorizontal="l"
          maxWidth="30%"
          opacity={opacity}
        />
      ) : null}
    </Box>
  );
}

export default EyebrowText;
