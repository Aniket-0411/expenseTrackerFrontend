import { Box } from '../../box';

import { Text } from '../Text';

interface SectionSubtitlePropType {
  subtitle: string;
  titleMetaText?: string | number;
}

/**
 * Renders a small sub next next to a large section title.
 */
export function SectionSubtitle({ subtitle, titleMetaText, ...rest }: SectionSubtitlePropType) {
  return (
    <Box {...rest}>
      <Text
        letterSpacing={0.5}
        opacity={0.75}
        paddingTop="s"
        textTransform="capitalize"
        variant="eyebrow"
      >
        {subtitle}

        {titleMetaText ? ` (${titleMetaText})` : ''}
      </Text>
    </Box>
  );
}
