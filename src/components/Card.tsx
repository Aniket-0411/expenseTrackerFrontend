import { ComponentType, Fragment, ReactElement } from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { colors, spacing } from '../theme';

import { Text, ITextProps } from './Text';

const $containerBase: ViewStyle = {
  borderRadius: spacing.md,
  padding: spacing.xs,
  borderWidth: 1,
  shadowColor: colors.palette.neutral800,
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.08,
  shadowRadius: 12.81,
  elevation: 16,
  minHeight: 96,
  flexDirection: 'row',
};

const $alignmentWrapper: ViewStyle = {
  flex: 1,
  alignSelf: 'stretch',
};

const $alignmentWrapperFlexOptions = {
  top: 'flex-start',
  center: 'center',
  'space-between': 'space-between',
  'force-footer-bottom': 'space-between',
} as const;

const $containerPresets = {
  default: [
    $containerBase,
    {
      backgroundColor: colors.palette.neutral100,
      borderColor: colors.palette.neutral300,
    },
  ] as StyleProp<ViewStyle>,

  reversed: [
    $containerBase,
    { backgroundColor: colors.palette.neutral800, borderColor: colors.palette.neutral500 },
  ] as StyleProp<ViewStyle>,
};

const $headingPresets: Record<TPresets, TextStyle> = {
  default: {},
  reversed: { color: colors.palette.neutral100 },
};

const $contentPresets: Record<TPresets, TextStyle> = {
  default: {},
  reversed: { color: colors.palette.neutral100 },
};

const $footerPresets: Record<TPresets, TextStyle> = {
  default: {},
  reversed: { color: colors.palette.neutral100 },
};

type TPresets = keyof typeof $containerPresets;

interface ICardProps extends TouchableOpacityProps {
  /**
   * One of the different types of text presets.
   */
  readonly preset?: TPresets;
  /**
   * How the content should be aligned vertically. This is especially (but not exclusively) useful
   * when the card is a fixed height but the content is dynamic.
   *
   * `top` (default) - aligns all content to the top.
   * `center` - aligns all content to the center.
   * `space-between` - spreads out the content evenly.
   * `force-footer-bottom` - aligns all content to the top, but forces the footer to the bottom.
   */
  readonly verticalAlignment?: 'top' | 'center' | 'space-between' | 'force-footer-bottom';
  /**
   * Custom component added to the left of the card body.
   */
  readonly LeftComponent?: ReactElement;
  /**
   * Custom component added to the right of the card body.
   */
  readonly RightComponent?: ReactElement;
  /**
   * The heading text to display if not using `headingTx`.
   */
  readonly heading?: ITextProps['text'];
  /**
   * Heading text which is looked up via i18n.
   */
  readonly headingTx?: ITextProps['tx'];
  /**
   * Optional heading options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  readonly headingTxOptions?: ITextProps['txOptions'];
  /**
   * Style overrides for heading text.
   */
  readonly headingStyle?: StyleProp<TextStyle>;
  /**
   * Pass any additional props directly to the heading Text component.
   */
  readonly HeadingTextProps?: ITextProps;
  /**
   * Custom heading component.
   * Overrides all other `heading*` props.
   */
  readonly HeadingComponent?: ReactElement;
  /**
   * The content text to display if not using `contentTx`.
   */
  readonly content?: ITextProps['text'];
  /**
   * Content text which is looked up via i18n.
   */
  readonly contentTx?: ITextProps['tx'];
  /**
   * Optional content options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  readonly contentTxOptions?: ITextProps['txOptions'];
  /**
   * Style overrides for content text.
   */
  readonly contentStyle?: StyleProp<TextStyle>;
  /**
   * Pass any additional props directly to the content Text component.
   */
  readonly ContentTextProps?: ITextProps;
  /**
   * Custom content component.
   * Overrides all other `content*` props.
   */
  readonly ContentComponent?: ReactElement;
  /**
   * The footer text to display if not using `footerTx`.
   */
  readonly footer?: ITextProps['text'];
  /**
   * Footer text which is looked up via i18n.
   */
  readonly footerTx?: ITextProps['tx'];
  /**
   * Optional footer options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  readonly footerTxOptions?: ITextProps['txOptions'];
  /**
   * Style overrides for footer text.
   */
  readonly footerStyle?: StyleProp<TextStyle>;
  /**
   * Pass any additional props directly to the footer Text component.
   */
  readonly FooterTextProps?: ITextProps;
  /**
   * Custom footer component.
   * Overrides all other `footer*` props.
   */
  readonly FooterComponent?: ReactElement;
}

/**
 * -----------------------------------------------------------------------------
 * Cards are useful for displaying related information in a contained way.
 * If a ListItem displays content horizontally, a Card can be used to display content vertically.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Card/}
 * @param {ICardProps} props - The props for the `Card` component.
 */
export function Card({
  content,
  contentTx,
  contentTxOptions,
  footer,
  footerTx,
  footerTxOptions,
  heading,
  headingTx,
  headingTxOptions,
  ContentComponent,
  HeadingComponent,
  FooterComponent,
  LeftComponent,
  preset = 'default',
  RightComponent,
  verticalAlignment = 'top',
  style: $containerStyleOverride,
  contentStyle: $contentStyleOverride,
  headingStyle: $headingStyleOverride,
  footerStyle: $footerStyleOverride,
  ContentTextProps,
  HeadingTextProps,
  FooterTextProps,
  ...WrapperProps
}: ICardProps) {
  const isPressable = !!WrapperProps.onPress;
  const isHeadingPresent = !!(HeadingComponent || heading || headingTx);
  const isContentPresent = !!(ContentComponent || content || contentTx);
  const isFooterPresent = !!(FooterComponent || footer || footerTx);

  const Wrapper = (isPressable ? TouchableOpacity : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >;
  const HeaderContentWrapper = verticalAlignment === 'force-footer-bottom' ? View : Fragment;

  const $containerStyle = [$containerPresets[preset], $containerStyleOverride];
  const $headingStyle = [
    $headingPresets[preset],
    (isFooterPresent || isContentPresent) && { marginBottom: spacing.xxxs },
    $headingStyleOverride,
    HeadingTextProps?.style,
  ];
  const $contentStyle = [
    $contentPresets[preset],
    isHeadingPresent && { marginTop: spacing.xxxs },
    isFooterPresent && { marginBottom: spacing.xxxs },
    $contentStyleOverride,
    ContentTextProps?.style,
  ];
  const $footerStyle = [
    $footerPresets[preset],
    (isHeadingPresent || isContentPresent) && { marginTop: spacing.xxxs },
    $footerStyleOverride,
    FooterTextProps?.style,
  ];
  const $alignmentWrapperStyle = [
    $alignmentWrapper,
    { justifyContent: $alignmentWrapperFlexOptions[verticalAlignment] },
    LeftComponent && { marginStart: spacing.md },
    RightComponent && { marginEnd: spacing.md },
  ];

  return (
    <Wrapper
      accessibilityRole={isPressable ? 'button' : undefined}
      activeOpacity={0.8}
      style={$containerStyle}
      {...WrapperProps}
    >
      {LeftComponent}

      <View style={$alignmentWrapperStyle}>
        <HeaderContentWrapper>
          {HeadingComponent ||
            (isHeadingPresent && (
              <Text
                text={heading}
                tx={headingTx}
                txOptions={headingTxOptions}
                // weight="bold"
                {...HeadingTextProps}
                style={$headingStyle}
              />
            ))}

          {ContentComponent ||
            (isContentPresent && (
              <Text
                text={content}
                tx={contentTx}
                txOptions={contentTxOptions}
                // weight="normal"
                {...ContentTextProps}
                style={$contentStyle}
              />
            ))}
        </HeaderContentWrapper>

        {FooterComponent ||
          (isFooterPresent && (
            <Text
              size="xs"
              text={footer}
              tx={footerTx}
              txOptions={footerTxOptions}
              // weight="normal"
              {...FooterTextProps}
              style={$footerStyle}
            />
          ))}
      </View>

      {RightComponent}
    </Wrapper>
  );
}
