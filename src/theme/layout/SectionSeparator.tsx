import { Box } from '../box';
import { BoxPropsType } from '../types';

interface SectionSeparatorPropsType extends BoxPropsType {
  opacity?: number;
}

/**
 * -----------------------------------------------------------------------------
 * Draws a faint horizontal line that separates two sections.
 */
export function SectionSeparator({ opacity = 0.1, ...rest }: SectionSeparatorPropsType) {
  return (
    <Box
      borderBottomWidth={0.5}
      borderColor="textCaption"
      borderStyle="solid"
      flex={1}
      height={1}
      my="l"
      opacity={opacity}
      {...rest}
    />
  );
}
