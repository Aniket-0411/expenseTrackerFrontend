import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';
import { useLanguageContext } from '~/i18n';

/**
 * -----------------------------------------------------------------------------
 * This the chevron icon pointing to the right, useful for showing navigable items.
 */
export function ChevronRightIcon(props: IIconProps) {
  const { isRTL } = useLanguageContext();

  return (
    <BaseIconSVG {...props} style={isRTL ? { transform: [{ rotate: '180deg' }] } : {}}>
      {(styles) => <Path d="m10 16 4-4-4-4" id="chevron-right-icon" {...styles} />}
    </BaseIconSVG>
  );
}
