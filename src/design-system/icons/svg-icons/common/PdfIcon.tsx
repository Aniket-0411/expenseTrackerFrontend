import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a document icon with a PDF logo in the center
 */
export function PdfIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="document-pdf-icon" {...styles}>
          <Path d="m18.41 6.41-2.83-2.83c-.37-.37-.88-.58-1.41-.58H7c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.42h0z" />

          <Path d="M19 8h-4c-.55 0-1-.45-1-1V3m-3.66 13.55h3.32m-2.83-3.8v-1.17c0-.32.26-.58.58-.58h1.17c.32 0 .58.26.58.58v1.17c0 .32-.26.58-.58.58h-1.17a.58.58 0 0 1-.58-.58zM8 17.42v-1.17c0-.32.26-.58.58-.58h1.17c.32 0 .58.26.58.58v1.17c0 .32-.26.58-.58.58H8.58a.58.58 0 0 1-.58-.58zm5.67 0v-1.17c0-.32.26-.58.58-.58h1.17c.32 0 .58.26.58.58v1.17c0 .32-.26.58-.58.58h-1.17a.58.58 0 0 1-.58-.58h0zm.57-1.75-1.51-2.36m-2.97 2.36 1.51-2.36" />
        </G>
      )}
    </BaseIconSVG>
  );
}
