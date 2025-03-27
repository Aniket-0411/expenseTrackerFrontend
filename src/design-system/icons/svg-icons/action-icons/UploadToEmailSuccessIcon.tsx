import { Circle, G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders an icon showing a checkmark for an open email. This will be used to
 * highlight whether an email has been uploaded successfully or opened.
 */
export function UploadToEmailSuccessIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="upload-to-email-success-icon" {...styles}>
          <Circle cx={17.25} cy={10.11} r={4.5} />

          <Path d="m16.06 10 1 1 1.5-1.5" />

          <Path d="M20.25 16.75V18c0 1.66-1.34 3-3 3h-12c-1.66 0-3-1.34-3-3v-7.64c0-.62.29-1.21.78-1.59l7-5.36c.72-.55 1.71-.55 2.43 0l1.04.79" />

          <Path d="M12.47 15.59c-.72.55-1.71.55-2.43 0L2.36 9.71" />
        </G>
      )}
    </BaseIconSVG>
  );
}
