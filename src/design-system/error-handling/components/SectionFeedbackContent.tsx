import { TouchableOpacity } from 'react-native';

import { TTextLocalized } from '~/utils';
import { TTxOptions, TxKeyPath } from '~/i18n';
import { Box, BoxPropsType, Text, TThemeColor } from '~/theme';

import { ActivityIndicator } from '../../loaders';

export type TFeedbackTitle = 'ERROR' | 'NO_DATA' | 'LOADING' | 'INFO';

interface ISectionFeedbackContentProps extends BoxPropsType {
  /**
   * This action will be passed to the main CTA to be triggered as a callback
   * action to recover from whatever situation that caused the feedback message.
   * Such as a a retry button for an internet connection issue, or a login
   * button for a session one.
   */
  action?: {
    label: TxKeyPath;
    onPress: () => void;
  };
  /**
   * This allows the parent component to add an alternative CTA to augment the
   * main CTA. Such as retry, or go to your bids.
   */
  actionAlt?: {
    label: TxKeyPath;
    onPress: () => void;
  };
  /**
   * The description message for the feedback. This is mostly what comes from
   * the app side as it's translation ready.
   */
  description?: TxKeyPath;
  descriptionTxOptions?: TTxOptions;
  /**
   * The alternative description. Use this for server side messages that can
   * be strings or localized objects.
   */
  descriptionLocalized?: TTextLocalized;
  /**
   * This should be used alongside the `isLoading` to add an extra padding
   * space at the top of the file, component even after loading states so that
   * there is no UI jump between showing the loader indicator and not.
   */
  hasLoadingIndicator?: boolean;
  /**
   * The big bold text to show at the top of the section. This is usually
   * randomly generated based on the `type`.
   */
  heading?: TxKeyPath;
  /**
   * Whether the feedback should show a loading state or not.
   */
  isLoading?: boolean;
  subtitle?: TxKeyPath;
  subtitleTxOptions?: TTxOptions;
  /**
   * The main message of the section. Not that the goes just below the heading
   * which is the the big bold message at the top of the section.
   */
  title: TxKeyPath;
  /**
   * The type of the feedback message, such as if its an error, info, loading
   * or an empty state/no data feedback alert.
   */
  type?: TFeedbackTitle;
}

/**
 * -----------------------------------------------------------------------------
 * This shows a full screen width section, with the title, subtitle, helper text.
 * - Can also render an action that can be performed by the user.
 */
export function SectionFeedbackContent({
  action,
  actionAlt,
  descriptionLocalized,
  description,
  descriptionTxOptions,
  hasLoadingIndicator = false,
  heading,
  isLoading = false,
  subtitle,
  subtitleTxOptions,
  title,
  type = 'INFO',
  ...rest
}: ISectionFeedbackContentProps) {
  const headerTitle = heading;

  let cardBorderProps: BoxPropsType = {};
  let descriptionColor: TThemeColor = 'textCaption';

  if (type === 'ERROR') {
    cardBorderProps = {
      borderBottomWidth: 0.2,
      borderColor: 'cardErrorBorder',
      borderTopWidth: 0.2,
    };
    descriptionColor = 'danger';
  }

  return (
    <Box flexDirection="column" gap="m" opacity={0.95} pb="m" {...rest}>
      <Box
        alignItems="center"
        bg="cardItemBackgroundFaded"
        gap="s"
        pb="l"
        pt="m"
        {...cardBorderProps}
      >
        {hasLoadingIndicator ? (
          <Box
            height={32}
            mt="s"
            position="absolute"
            py="m"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ marginTop: -44 }}
          >
            {isLoading ? (
              <ActivityIndicator alignSelf="center" color="actionIconFocused" size={0.8} />
            ) : null}
          </Box>
        ) : null}

        <Box alignItems="center" width="75%">
          <Text textAlign="center" tx={headerTitle} variant="modalHeader" />

          <Text
            fontFamily="fontPrimaryMedium"
            fontSize={16}
            lineHeight={28}
            textAlign="center"
            tx={title}
          />

          {subtitle ? (
            <Text
              fontFamily="fontSecondaryMedium"
              lineHeight={22}
              textAlign="center"
              tx={subtitle}
              txOptions={subtitleTxOptions}
            />
          ) : null}

          {description || descriptionLocalized ? (
            <Text
              color={descriptionColor}
              textAlign="center"
              tx={description}
              txLocalized={descriptionLocalized}
              txOptions={descriptionTxOptions}
            />
          ) : null}
        </Box>
      </Box>

      {action ? (
        <Box alignItems="center">
          {}
          <TouchableOpacity onPress={action.onPress}>
            <Box
              bg="mainBackground"
              borderColor="inputBorder"
              borderRadius="xs"
              borderWidth={1}
              px="xl"
              py="s"
            >
              <Text tx={action.label} />
            </Box>
          </TouchableOpacity>
        </Box>
      ) : null}

      {actionAlt ? (
        <Box alignItems="center">
          {}
          <TouchableOpacity onPress={actionAlt.onPress}>
            <Box
              bg="primaryBackground"
              borderColor="inputBorder"
              borderRadius="xs"
              borderWidth={1}
              px="xl"
              py="s"
            >
              <Text tx={actionAlt.label} />
            </Box>
          </TouchableOpacity>
        </Box>
      ) : null}
    </Box>
  );
}
