import { Image, ImageProps, ImageStyle, StyleProp, TextStyle, View, ViewStyle } from 'react-native';

import { translate } from '~/i18n';
import { spacing } from '~/theme';

import { Button, IButtonProps } from './Button';
import { Text, ITextProps } from './Text';

// TODO: Remove this and use an svg component instead
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sadFace = require('../../assets/images/sad-face.png');

const $image: ImageStyle = { alignSelf: 'center' };
const $heading: TextStyle = { textAlign: 'center', paddingHorizontal: spacing.lg };
const $content: TextStyle = { textAlign: 'center', paddingHorizontal: spacing.lg };

interface IEmptyStateProps {
  /**
   * An optional prop that specifies the text/image set to use for the empty state.
   */
  preset?: keyof typeof EmptyStatePresets;
  /**
   * Style override for the container.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * An Image source to be displayed above the heading.
   */
  imageSource?: ImageProps['source'];
  /**
   * Style overrides for image.
   */
  imageStyle?: StyleProp<ImageStyle>;
  /**
   * Pass any additional props directly to the Image component.
   */
  imageProps?: Omit<ImageProps, 'source'>;
  /**
   * The heading text to display if not using `headingTx`.
   */
  heading?: ITextProps['text'];
  /**
   * Heading text which is looked up via i18n.
   */
  headingTx?: ITextProps['tx'];
  /**
   * Optional heading options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  headingTxOptions?: ITextProps['txOptions'];
  /**
   * Style overrides for heading text.
   */
  headingStyle?: StyleProp<TextStyle>;
  /**
   * Pass any additional props directly to the heading Text component.
   */
  HeadingTextProps?: ITextProps;
  /**
   * The content text to display if not using `contentTx`.
   */
  content?: ITextProps['text'];
  /**
   * Content text which is looked up via i18n.
   */
  contentTx?: ITextProps['tx'];
  /**
   * Optional content options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  contentTxOptions?: ITextProps['txOptions'];
  /**
   * Style overrides for content text.
   */
  contentStyle?: StyleProp<TextStyle>;
  /**
   * Pass any additional props directly to the content Text component.
   */
  ContentTextProps?: ITextProps;
  /**
   * The button text to display if not using `buttonTx`.
   */
  button?: ITextProps['text'];
  /**
   * Button text which is looked up via i18n.
   */
  buttonTx?: ITextProps['tx'];
  /**
   * Optional button options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  buttonTxOptions?: ITextProps['txOptions'];
  /**
   * Style overrides for button.
   */
  // buttonStyle?: IButtonProps['style'];
  // /**
  //  * Style overrides for button text.
  //  */
  // buttonTextStyle?: IButtonProps['textStyle'];
  /**
   * Called when the button is pressed.
   */
  buttonOnPress?: IButtonProps['onPress'];
  /**
   * Pass any additional props directly to the Button component.
   */
  ButtonProps?: IButtonProps;
}

interface IEmptyStatePresetItem {
  imageSource: ImageProps['source'];
  heading: ITextProps['text'];
  content: ITextProps['text'];
  button: ITextProps['text'];
}

const EmptyStatePresets = {
  generic: {
    imageSource: sadFace,
    heading: translate('emptyStateComponent.generic.heading'),
    content: translate('emptyStateComponent.generic.content'),
    button: translate('emptyStateComponent.generic.button'),
  } as IEmptyStatePresetItem,
} as const;

/**
 * -----------------------------------------------------------------------------
 * A component to use when there is no data to display. It can be utilized to
 * direct the user what to do next.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/EmptyState/}
 */
export function EmptyState(props: IEmptyStateProps) {
  const initPreset = props?.preset ?? 'generic';
  const preset = EmptyStatePresets[initPreset];

  const {
    button = preset.button,
    buttonTx,
    buttonOnPress,
    buttonTxOptions,
    content = preset.content,
    contentTx,
    contentTxOptions,
    heading = preset.heading,
    headingTx,
    headingTxOptions,
    imageSource = preset.imageSource,
    style: $containerStyleOverride,
    // buttonStyle: $buttonStyleOverride,
    // buttonTextStyle: $buttonTextStyleOverride,
    contentStyle: $contentStyleOverride,
    headingStyle: $headingStyleOverride,
    imageStyle: $imageStyleOverride,
    ButtonProps,
    ContentTextProps,
    HeadingTextProps,
    imageProps,
  } = props;

  const isImagePresent = !!imageSource;
  const isHeadingPresent = !!(heading ?? headingTx);
  const isContentPresent = !!(content ?? contentTx);
  const isButtonPresent = !!(button ?? buttonTx);

  const $containerStyles = [$containerStyleOverride];
  const $imageStyles = [
    $image,
    (isHeadingPresent || isContentPresent || isButtonPresent) && { marginBottom: spacing.xxxs },
    $imageStyleOverride,
    imageProps?.style,
  ];
  const $headingStyles = [
    $heading,
    isImagePresent && { marginTop: spacing.xxxs },
    (isContentPresent || isButtonPresent) && { marginBottom: spacing.xxxs },
    $headingStyleOverride,
    HeadingTextProps?.style,
  ];
  const $contentStyles = [
    $content,
    (isImagePresent || isHeadingPresent) && { marginTop: spacing.xxxs },
    isButtonPresent && { marginBottom: spacing.xxxs },
    $contentStyleOverride,
    ContentTextProps?.style,
  ];

  // const $buttonStyles = [
  //   (isImagePresent || isHeadingPresent || isContentPresent) && { marginTop: spacing.xl },
  //   // $buttonStyleOverride,
  //   // ButtonProps?.style,
  // ];

  return (
    <View style={$containerStyles}>
      {isImagePresent ? <Image source={imageSource} {...imageProps} style={$imageStyles} /> : null}

      {isHeadingPresent ? (
        <Text
          preset="subheading"
          text={heading}
          tx={headingTx}
          txOptions={headingTxOptions}
          {...HeadingTextProps}
          style={$headingStyles}
        />
      ) : null}

      {isContentPresent ? (
        <Text
          text={content}
          tx={contentTx}
          txOptions={contentTxOptions}
          {...ContentTextProps}
          style={$contentStyles}
        />
      ) : null}

      {isButtonPresent && button ? (
        <Button
          onPress={buttonOnPress}
          title={button}
          // textStyle={$buttonTextStyleOverride}
          tx={buttonTx}
          txOptions={buttonTxOptions}
          {...ButtonProps}
          // style={$buttonStyles}
        />
      ) : null}
    </View>
  );
}
