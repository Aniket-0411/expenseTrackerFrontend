import { ReactElement } from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { isRTL, translate } from '~/i18n';
import { Box, colors, spacing, Text } from '~/theme';
import { ExtendedEdge, useSafeAreaInsetsStyle } from '~/utils';

import { Icon, IconTypes } from './Icon';
import { ITextProps } from './Text';

const $wrapper: ViewStyle = {
  height: 56,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const $container: ViewStyle = {
  width: '100%',
};

const $title: TextStyle = {
  textAlign: 'center',
  fontWeight: '600',
};

const $actionTextContainer: ViewStyle = {
  flexGrow: 0,
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  paddingHorizontal: spacing.md,
  zIndex: 2,
};

const $actionText: TextStyle = {
  color: colors.tint,
};

const $actionIconContainer: ViewStyle = {
  flexGrow: 0,
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  paddingHorizontal: spacing.md,
  zIndex: 2,
};

const $actionFillerContainer: ViewStyle = {
  width: 16,
};

const $titleWrapperCenter: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  position: 'absolute',
  paddingHorizontal: spacing.xxl,
  zIndex: 1,
};

const $titleWrapperFlex: ViewStyle = {
  justifyContent: 'center',
  flexGrow: 1,
};

interface IHeaderActionProps {
  readonly backgroundColor?: string;
  readonly icon?: IconTypes;
  readonly iconColor?: string;
  readonly text?: ITextProps['text'];
  readonly tx?: ITextProps['tx'];
  readonly txOptions?: ITextProps['txOptions'];
  readonly onPress?: TouchableOpacityProps['onPress'];
  readonly ActionComponent?: ReactElement;
}

/**
 * -----------------------------------------------------------------------------
 * @param {IHeaderActionProps} props - The props for the `HeaderAction` component.
 */
function HeaderAction(props: IHeaderActionProps) {
  const { backgroundColor, icon, text, tx, txOptions, onPress, ActionComponent, iconColor } = props;

  const content = tx ? translate(tx, txOptions) : text;

  if (ActionComponent) return ActionComponent;

  if (content) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={!onPress}
        onPress={onPress}
        style={[$actionTextContainer, { backgroundColor }]}
      >
        <Text
          // size="sm"
          fontFamily="fontPrimaryRegular"
          fontSize={16}
          style={$actionText}
          text={content}
          //  weight="medium"
        />
      </TouchableOpacity>
    );
  }

  if (icon) {
    return (
      <Icon
        color={iconColor}
        containerStyle={[$actionIconContainer, { backgroundColor }]}
        icon={icon}
        onPress={onPress}
        size={24}
        style={isRTL ? { transform: [{ rotate: '180deg' }] } : {}}
      />
    );
  }

  return <Box style={[$actionFillerContainer, { backgroundColor }]} />;
}

export interface IHeaderProps {
  /**
   * The layout of the title relative to the action components.
   * - `center` will force the title to always be centered relative to the header.
   * If the title or the action buttons are too long, the title will be cut off.
   * - `flex` will attempt to center the title relative to the action buttons.
   * If the action buttons are different widths, the title will be off-center
   * relative to the header.
   */
  readonly titleMode?: 'center' | 'flex';
  /**
   * Optional title style override.
   */
  readonly titleStyle?: StyleProp<TextStyle>;
  /**
   * Optional outer title container style override.
   */
  readonly titleContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Optional inner header wrapper style override.
   */
  readonly style?: StyleProp<ViewStyle>;
  /**
   * Optional outer header container style override.
   */
  readonly containerStyle?: StyleProp<ViewStyle>;
  /**
   * Background color
   */
  readonly backgroundColor?: string;
  /**
   * Title text to display if not using `tx` or nested components.
   */
  readonly title?: ITextProps['text'];
  /**
   * Title text which is looked up via i18n.
   */
  readonly titleTx?: ITextProps['tx'];
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  readonly titleTxOptions?: ITextProps['txOptions'];
  /**
   * Icon that should appear on the left.
   * Can be used with `onLeftPress`.
   */
  readonly leftIcon?: IconTypes;
  /**
   * An optional tint color for the left icon
   */
  readonly leftIconColor?: string;
  /**
   * Left action text to display if not using `leftTx`.
   * Can be used with `onLeftPress`. Overrides `leftIcon`.
   */
  readonly leftText?: ITextProps['text'];
  /**
   * Left action text text which is looked up via i18n.
   * Can be used with `onLeftPress`. Overrides `leftIcon`.
   */
  readonly leftTx?: ITextProps['tx'];
  /**
   * Left action custom ReactElement if the built in action props don't suffice.
   * Overrides `leftIcon`, `leftTx` and `leftText`.
   */
  readonly LeftActionComponent?: ReactElement;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  readonly leftTxOptions?: ITextProps['txOptions'];
  /**
   * What happens when you press the left icon or text action.
   */
  readonly onLeftPress?: TouchableOpacityProps['onPress'];
  /**
   * Icon that should appear on the right.
   * Can be used with `onRightPress`.
   */
  readonly rightIcon?: IconTypes;
  /**
   * An optional tint color for the right icon
   */
  readonly rightIconColor?: string;
  /**
   * Right action text to display if not using `rightTx`.
   * Can be used with `onRightPress`. Overrides `rightIcon`.
   */
  readonly rightText?: ITextProps['text'];
  /**
   * Right action text text which is looked up via i18n.
   * Can be used with `onRightPress`. Overrides `rightIcon`.
   */
  readonly rightTx?: ITextProps['tx'];
  /**
   * Right action custom ReactElement if the built in action props don't suffice.
   * Overrides `rightIcon`, `rightTx` and `rightText`.
   */
  readonly RightActionComponent?: ReactElement;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  readonly rightTxOptions?: ITextProps['txOptions'];
  /**
   * What happens when you press the right icon or text action.
   */
  readonly onRightPress?: TouchableOpacityProps['onPress'];
  /**
   * Override the default edges for the safe area.
   */
  readonly safeAreaEdges?: ExtendedEdge[];
}

/**
 * -----------------------------------------------------------------------------
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 * The Header is meant to be used with the `screenOptions.header` option on
 * navigators, routes, or screen components via `navigation.setOptions({ header })`.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Header/}
 * @param {IHeaderProps} props - The props for the `Header` component.
 */
export function Header(props: IHeaderProps) {
  const {
    backgroundColor = colors.background,
    LeftActionComponent,
    leftIcon,
    leftIconColor,
    leftText,
    leftTx,
    leftTxOptions,
    onLeftPress,
    onRightPress,
    RightActionComponent,
    rightIcon,
    rightIconColor,
    rightText,
    rightTx,
    rightTxOptions,
    safeAreaEdges = ['top'],
    title,
    titleMode = 'center',
    titleTx,
    titleTxOptions,
    titleContainerStyle: $titleContainerStyleOverride,
    style: $styleOverride,
    titleStyle: $titleStyleOverride,
    containerStyle: $containerStyleOverride,
  } = props;

  const $containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);

  const titleContent = titleTx ? translate(titleTx, titleTxOptions) : title;

  return (
    <Box style={[$container, $containerInsets, { backgroundColor }, $containerStyleOverride]}>
      <Box style={[$wrapper, $styleOverride]}>
        <HeaderAction
          ActionComponent={LeftActionComponent}
          backgroundColor={backgroundColor}
          icon={leftIcon}
          iconColor={leftIconColor}
          onPress={onLeftPress}
          text={leftText}
          tx={leftTx}
          txOptions={leftTxOptions}
        />

        {!!titleContent && (
          <Box
            pointerEvents="none"
            style={[
              titleMode === 'center' && $titleWrapperCenter,
              titleMode === 'flex' && $titleWrapperFlex,
              $titleContainerStyleOverride,
            ]}
          >
            <Text
              // size={}
              style={[$title, $titleStyleOverride]}
              text={titleContent}
              // weight="medium"
            />
          </Box>
        )}

        <HeaderAction
          ActionComponent={RightActionComponent}
          backgroundColor={backgroundColor}
          icon={rightIcon}
          iconColor={rightIconColor}
          onPress={onRightPress}
          text={rightText}
          tx={rightTx}
          txOptions={rightTxOptions}
        />
      </Box>
    </Box>
  );
}
