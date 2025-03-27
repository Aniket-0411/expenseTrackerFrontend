import { ReactNode } from 'react';

import { TxKeyPath, TTextLocalized, TTxOptions } from '~/i18n';
import { Box, BoxPropsType, Text } from '~/theme';

import { ChevronRightIcon } from '../../icons';

import { Pressable } from '../Pressable';

import { LinkCTAIcon, TLinkCTAIcon } from './LinkCTAIcon';

export interface IBaseAppModalListIteItem {
  label: string | TTextLocalized;
  txLabel?: TxKeyPath;
}

interface IAppNavCTAProps extends BoxPropsType {
  /**
   * The descriptive text to be displayed below the label of the CTA.
   */
  description?: TxKeyPath;
  /**
   * Variable to be passed to the `description` translations
   */
  descriptionTxOptions?: TTxOptions;
  /**
   * The trailing component/icon or svg to show before the component.
   */
  elementEnd?: ReactNode;
  /**
   * The leading component/icon or svg to show before the component.
   */
  elementStart?: ReactNode;
  /**
   * Creates a leading icon component for the app nav cta icon.
   */
  Icon?: TLinkCTAIcon;
  /**
   * The text to be displayed on the CTA.
   */
  label: TxKeyPath;
  /**
   * Variable to be passed to the `label` translations
   */
  labelTxOptions?: TTxOptions;
  /**
   * Callback called when the item is pressed.
   */
  onPress: () => void;
}

/**
 * -----------------------------------------------------------------------------
 * This renders a clickable entry that either navigates the user to another
 * screen or makes major changes to an app, such as the settings screen.
 *
 * This proves an edge to edge link that allows the user to either trigger an
 * app effect or navigate the user to a different screen.
 * For example as used in the Profile/Settings screens.
 */
export function AppNavLinkOrCTA({
  description,
  descriptionTxOptions,
  elementEnd,
  elementStart,
  Icon,
  label,
  labelTxOptions,
  onPress,
  ...rest
}: IAppNavCTAProps) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Pressable onPress={onPress} style={{ marginBottom: 0.15 }}>
      <Box
        alignItems="center"
        bg="cardPrimaryBackground"
        borderBottomColor="modalBorder"
        borderBottomWidth={0.5}
        flexDirection="row"
        gap="m"
        px="m"
        py="m"
        {...rest}
      >
        {elementStart || (Icon ? <LinkCTAIcon Icon={Icon} /> : null)}

        <Box alignItems="flex-start" flex={1} flexGrow={1} justifyContent="center" my="xs">
          <Text color="textTitle" tx={label} txOptions={labelTxOptions} variant="formLabel" />

          {description ? (
            <Text
              color="textCaption"
              tx={description}
              txOptions={descriptionTxOptions}
              variant="infoText"
            />
          ) : null}
        </Box>

        {elementEnd || <ChevronRightIcon opacity={0.75} />}
      </Box>
    </Pressable>
  );
}
