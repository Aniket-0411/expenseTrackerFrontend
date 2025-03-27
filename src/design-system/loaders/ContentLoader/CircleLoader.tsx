import ContentLoader, { Circle } from 'react-content-loader/native';

import { useThemeColorKey } from '~/theme';

import { ILoaderProps } from './types';

type ICircleLoaderProps = ILoaderProps;

/**
 * -----------------------------------------------------------------------------
 * Creates a configurable circular loader as a placeholder element during UI
 * load. The underlying loader  view box, colors, size, border radius and
 * animation speed have been exposed for extended customization.
 */
export function CircleLoader({
  backgroundColor = 'inputBorderDisabled',
  borderRadius = 16,
  foregroundColor = 'inputBorder',
  speed = 1.4,
  opacity,
  size = 36,
}: ICircleLoaderProps) {
  const colorBackground = useThemeColorKey(backgroundColor) as string;
  const colorForeground = useThemeColorKey(foregroundColor) as string;

  return (
    <ContentLoader
      backgroundColor={colorBackground}
      foregroundColor={colorForeground}
      height={size}
      interval={0.48}
      opacity={opacity}
      speed={speed}
      viewBox={`0 0 ${borderRadius * 2} ${borderRadius * 2}`}
      width={size}
    >
      <Circle cx={borderRadius} cy={borderRadius} r={borderRadius} />
    </ContentLoader>
  );
}
