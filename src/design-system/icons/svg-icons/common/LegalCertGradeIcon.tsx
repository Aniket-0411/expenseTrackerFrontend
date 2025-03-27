import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This component will renders a MemoryCardIcon.
 */
export function LegalCertGradeIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="legal-cert-grade-icon" {...styles}>
          <Path d="M15.251 18.502v4.502L13 21.88l-2.25 1.125v-4.502" />

          <Path d="m9.218 15.838.533.7.115.866c.064.48.441.857.921.921l.867.116.695.532c.384.292.916.292 1.3 0l.7-.532v0l.867-.116c.48-.064.858-.441.922-.921l.116-.867s.268-.352.532-.695a1.074 1.074 0 0 0 0-1.3l-.532-.7-.116-.866a1.072 1.072 0 0 0-.92-.922l-.868-.115-.7-.53a1.071 1.071 0 0 0-1.301 0l-.7.53v0l-.867.115a1.07 1.07 0 0 0-.921.921l-.116.867-.532.695c-.29.385-.288.918.005 1.301v0Z" />

          <Path d="M18.002 20.003h2a2 2 0 0 0 2.002-2V6.59a2 2 0 0 0-2.001-2H5.997a2 2 0 0 0-2 2v11.412a2 2 0 0 0 2 2h2m.501-12.004h9.004" />
        </G>
      )}
    </BaseIconSVG>
  );
}
