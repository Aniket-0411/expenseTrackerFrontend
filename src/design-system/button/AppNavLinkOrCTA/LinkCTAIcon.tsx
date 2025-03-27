import { Box } from '~/theme';

import { IIconProps } from '../../icons';

export type TLinkCTAIcon = (props: IIconProps) => JSX.Element;

interface ILinkCTAIconProps {
  Icon: TLinkCTAIcon;
}

/**
 * -----------------------------------------------------------------------------
 * This renders the icon component to be rendered within a `AppNavLinkOrCTA`,
 * such as the icons in the settings screens.
 */
export function LinkCTAIcon({ Icon }: ILinkCTAIconProps) {
  return (
    <Box bg="actionIconBackground" borderRadius="xxl" p="s">
      <Icon strokeWidth={1} />
    </Box>
  );
}
