import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a mobile phone icon with question mark that will be used to
 * denote frequently asked questions about the app.
 */
export function MobileQuestionsIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="mobile-question-icon" {...styles}>
          <Path d="M7.75 19h2.5M14 13.48v6.02c0 1.1-.9 2-2 2H6a2 2 0 0 1-2-2v-12c0-1.11.89-2 2-2h3.6" />

          <Path d="M18.39 4.11c2.15 2.15 2.15 5.63 0 7.78s-5.63 2.15-7.78 0a5.498 5.498 0 0 1 0-7.78 5.498 5.498 0 0 1 7.78 0" />

          <Path d="M14.5 10.91c-.03 0-.06.02-.06.06 0 .03.03.05.06.05s.06-.02.06-.05c-.01-.03-.03-.06-.06-.06h0m0-2.22a1.72 1.72 0 1 0 0-3.44c-.93 0-1.68.73-1.71 1.65" />
        </G>
      )}
    </BaseIconSVG>
  );
}
