import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a call center icon that will be used to denote a contact
 * support setting.
 */
export function ContactSupportIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="contact-support-icon" {...styles}>
          <Path d="M21 12a9 9 0 0 1-9 9m-9-9a9 9 0 0 1 9-9" />

          <Path d="M3 12c0 1.05.19 2.1.55 3.09.17.46.64.73 1.12.65l.99-.17c.8-.14 1.34-.89 1.22-1.69l-.3-2.08c-.06-.4-.28-.76-.6-1-.33-.24-.74-.33-1.14-.26l-1.76.31M21 12a9 9 0 0 0-9-9" />

          <Path d="M21 12c0 1.05-.19 2.1-.55 3.09-.17.46-.64.73-1.12.65l-.99-.17c-.8-.14-1.34-.89-1.23-1.69l.3-2.08c.06-.4.28-.76.6-1 .33-.24.74-.33 1.14-.26l1.76.31m-7.42 1.64s0 0 0 0l-.01.01h.01c.01 0 .01 0 0-.01.01.01.01 0 0 0 .01 0 .01 0 0 0m-2.98 0c-.01 0-.01.01 0 0l-.01.01h.01v-.01c0 .01 0 .01 0 0 0 0 0 0 0 0" />
        </G>
      )}
    </BaseIconSVG>
  );
}
