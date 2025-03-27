import { G, Path, Rect } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This component will renders a MemoryCardIcon.
 */
export function MemoryCardIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="memory-card-icon" {...styles}>
          <Path d="M8 6v2m3-2v2m3-2v2" />

          <Rect height={6} rx={1} width={7} x={8} y={12} />

          <Path d="M19 9V6.828a2 2 0 0 0-.586-1.414l-1.828-1.828A2 2 0 0 0 15.172 3H6a2 2 0 0 0-2 2v5l1 1v4l-1 1v3a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6l-1-1v-2l1-1V8" />
        </G>
      )}
    </BaseIconSVG>
  );
}
