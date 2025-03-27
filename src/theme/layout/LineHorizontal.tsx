import { Box } from '../box';
import { BoxPropsType } from '../types';

/**
 * -----------------------------------------------------------------------------
 * Renders an Horizontal Line on the Screen
 */
export function LineHorizontal({
  marginVertical = 'l',
  maxWidth = '50%',
  opacity = 0.25,
  width = '50%',
  ...rest
}: BoxPropsType) {
  return (
    <Box
      borderBottomWidth={1}
      borderColor="textCaption"
      borderStyle="solid"
      flex={1}
      height={1}
      marginVertical={marginVertical}
      maxWidth={maxWidth}
      opacity={opacity}
      width={width}
      {...rest}
    />
  );
}
