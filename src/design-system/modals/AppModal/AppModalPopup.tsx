import { ReactNode } from 'react';
import { ScrollView, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import Modal, { Direction } from 'react-native-modal';

import { isIOS } from '~/utils';
import { TTextLocalized, TxKeyPath, TTxOptions } from '~/i18n';
import { Box, BoxPropsType, Text, useThemeSpacing } from '~/theme';

import { ModalCloseButton } from '../ModalCloseButton';

interface IAppModalPopupProps {
  /**
   * Since the modal pop can be a smaller component without scrollable content,
   * adding a bounce forces it to even scroll without content. This is useful
   * to disable any scroll behavior on the smaller modal's `ScrollView`
   */
  bounces?: boolean;
  /**
   * The children to render inside the modal.
   */
  children: ReactNode;
  /**
   * What is to be rendered in the footer of the modal.
   */
  footer?: ReactNode;
  /**
   * Whether the modal is dismissible when the user taps outside of the modal.
   */
  isDismissible?: boolean;
  /**
   * Determines if the user can dismiss the modal by clicking outside the modal
   * content.
   */
  isDismissibleByBackdrop?: boolean;
  /**
   * Determines whether the children should be rendered in a scroll view or now.
   * This is to prevent nested scrollable contented rendered within the default
   * ScrollView causing virtualized list errors.
   */
  isScrollViewEnabled?: boolean;
  /**
   * Determines whether the modal is visible or not.
   */
  isVisible: boolean;
  /**
   * The callback to close the modal.
   */
  onCloseModal: () => void;
  modalContentBoxProps?: BoxPropsType;
  modalStyles?: StyleProp<ViewStyle>;
  /**
   * Wether to show the vertical scroll indicators or not.
   */
  showsVerticalScrollIndicator?: boolean;
  /**
   * The subtitle to show on the modal.
   */
  subtitle?: TxKeyPath;
  /**
   * The content to provide custom values within the subtitle translations.
   */
  subtitleTxOptions?: TTxOptions;
  /**
   * The direction in which to dismiss the model with gestures
   */
  swipeDirection?: Direction;
  /**
   * The title of the modal component.
   */
  title?: TxKeyPath;
  /**
   * The title alternative to the title if the text is a string or Localized text.
   */
  titleLocalized?: TTextLocalized;
}

/**
 * -----------------------------------------------------------------------------
 * Popup that is will be mounted by the AppContextProvider and can be used by
 * any component that is a child of the AppContextProvider.
 */
export function AppModalPopup({
  bounces = false,
  children,
  footer,
  onCloseModal,
  isDismissible = true,
  isDismissibleByBackdrop = false,
  isScrollViewEnabled = true,
  isVisible,
  showsVerticalScrollIndicator = false,
  subtitle,
  subtitleTxOptions,
  title,
  titleLocalized,
  modalStyles,
  modalContentBoxProps,
  ...rest
}: IAppModalPopupProps) {
  const { m } = useThemeSpacing();

  /**
   * Does nothing in order not to dismiss the modal on press non dismissible
   * backdrop.
   */
  const handleNoop = () => {
    if (isDismissibleByBackdrop) {
      onCloseModal();
    }
  };

  const addDismissibleModalProps = isDismissible
    ? {
      onBackButtonPress: onCloseModal,
      onSwipeComplete: onCloseModal,
      propagateSwipe: true,
      scrollOffset: 20,
      scrollOffsetMax: 1000,
    }
    : {};

  return isVisible ? (
    <Modal
      // TODO: Will remove this later after testing performance.
      animationIn={isIOS ? 'slideInUp' : 'fadeIn'}
      animationInTiming={300}
      backdropOpacity={0.9}
      isVisible={isVisible}
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          alignContent: 'center',
          alignItems: 'flex-end',
          justifyContent: 'center',
        },
        modalStyles,
      ]}
      useNativeDriver={isIOS}
      {...addDismissibleModalProps}
      {...rest}
      customBackdrop={
        <TouchableOpacity onPress={handleNoop}>
          <Box backgroundColor="screenUnderlay" height="100%" width="100%" />
        </TouchableOpacity>
      }
    >
      <Box
        bg="modalBackground"
        borderColor="modalBorder"
        borderRadius="m"
        borderWidth={1}
        m="none"
        maxHeight="75%"
        overflow="hidden"
        p="none"
        pb="s"
        width="100%"
        {...modalContentBoxProps}
      >
        {isDismissible ? (
          <Box
            alignSelf="center"
            bg="loaderBackground"
            borderRadius="m"
            height={4}
            my="xs"
            opacity={0.75}
            position="relative"
            width="30%"
          />
        ) : null}

        <Box
          borderBottomColor="modalBorder"
          borderBottomWidth={title || subtitle ? 0.5 : 0}
          mb="xs"
          pt="xl"
        >
          {isDismissible ? <ModalCloseButton onClose={onCloseModal} /> : null}

          {title || titleLocalized ? (
            <Box
              alignItems="center"
              // bg="secondaryBackground"
              borderRadius="m"
              flexDirection="row"
              // justifyContent="center"
              // mb="s"
              mt="m"
              mx="s"
              // pb="xxs"
            >
              <Text
                color="bodyText"
                px="s"
                // textAlign="center"
                tx={title}
                txLocalized={titleLocalized}
                variant="modalHeader"
              />
            </Box>
          ) : null}

          {subtitle ? (
            <Text
              lineHeight={20}
              mb="m"
              // mt="s"
              px="m"
              textAlign="left"
              tx={subtitle}
              txOptions={subtitleTxOptions}
              variant="infoText"
            />
          ) : null}
        </Box>

        {isScrollViewEnabled ? (
          <ScrollView
            bounces={bounces}
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          >
            {children}
          </ScrollView>
        ) : (
          children
        )}

        {footer}
      </Box>
    </Modal>
  ) : null;
}
