import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a calender icon showing a range selection. To be used for date range
 * pickers CTAs.
 */
export function CalendarRangeIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="calendar-range-icon" {...styles}>
          <Path d="M7.5 3v3m9-3v3M6 4.5h12c1.66 0 3 1.34 3 3V18c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3V7.5c0-1.66 1.34-3 3-3zM7.5 16H13" />

          <Path d="M16.38 16.13c.07 0 .13-.06.13-.12 0-.07-.06-.13-.13-.13s-.12.06-.12.13c-.01.06.05.12.12.12M16.5 12h-5.63m-3.25-.12c-.07 0-.13.06-.13.12 0 .07.06.13.13.13s.13-.06.13-.13-.06-.12-.13-.12" />
        </G>
      )}
    </BaseIconSVG>
  );
}
