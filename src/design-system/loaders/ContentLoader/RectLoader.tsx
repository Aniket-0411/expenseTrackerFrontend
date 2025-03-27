import ContentLoader, { Rect } from 'react-content-loader/native';

import { useThemeColorKey } from '~/theme';

import { ILoaderProps } from './types';

interface IRectLoaderProps extends ILoaderProps {
  rectHeight: number | string;
  rectWidth: number | string;
}

/**
 * -----------------------------------------------------------------------------
 * Creates a configurable rectangular loader as a placeholder element during UI
 * load. The underlying loader view box, colors, size, border radius and
 * animation speed have been exposed for extended customization.
 */
export function RectLoader({
  backgroundColor = 'inputBorderDisabled',
  borderRadius = 4,
  foregroundColor = 'subTableBorder',
  opacity = 1,
  rectHeight,
  rectWidth,
  speed = 1.5,
  ...rest
}: IRectLoaderProps) {
  const colorBackground = useThemeColorKey(backgroundColor) as string;
  const colorForeground = useThemeColorKey(foregroundColor) as string;

  return (
    <ContentLoader
      backgroundColor={colorBackground}
      foregroundColor={colorForeground}
      height={rectHeight}
      opacity={opacity}
      speed={speed}
      viewBox={`0 0 ${rectWidth} ${rectHeight}`}
      width={rectWidth}
      {...rest}
    >
      <Rect height={rectHeight} rx={borderRadius} ry={borderRadius} width={rectWidth} x="0" y="0" />
    </ContentLoader>
  );
}
