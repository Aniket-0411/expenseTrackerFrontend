import { Path, G } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a checklist document item with an envelope to show a
 * registration with email.
 */
export function ListWithEnvelopeIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="email-registration" {...styles}>
          <Path d="M19.5 10V5c0-1.1-.9-2-2-2h-13c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4m-2-13h9m-9 4h2m-2 4h1" />

          <Path d="M21.5 15v4c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2z" />

          <Path d="m18.74 16-1.75.88c-.32.16-.69.16-1.01 0L14.24 16" />
        </G>
      )}
    </BaseIconSVG>
  );
}
