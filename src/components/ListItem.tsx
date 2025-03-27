import { ReactElement } from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { colors, spacing } from '../theme';
import { Icon, IconTypes } from './Icon';
import { Text, ITextProps } from './Text';

const $separatorTop: ViewStyle = {
  borderTopWidth: 1,
  borderTopColor: colors.separator,
};

const $separatorBottom: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: colors.separator,
};

const $textStyle: TextStyle = {
  paddingVertical: spacing.xs,
  alignSelf: 'center',
  flexGrow: 1,
  flexShrink: 1,
};

const $touchableStyle: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'flex-start',
};

const $iconContainer: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 0,
};
const $iconContainerLeft: ViewStyle = {
  marginEnd: spacing.md,
};

const $iconContainerRight: ViewStyle = {
  marginStart: spacing.md,
};

interface IListItemActionProps {
  readonly icon?: IconTypes;
  readonly iconColor?: string;
  readonly Component?: ReactElement;
  readonly size: number;
  readonly side: 'left' | 'right';
}

/**
 * -----------------------------------------------------------------------------
 * @param {IListItemActionProps} props - The props for the `ListItemAction` component.
 * @returns {JSX.Element | null} The rendered `ListItemAction` component.
 */
function ListItemAction(props: IListItemActionProps) {
  const { icon, Component, iconColor, size, side } = props;

  const $iconContainerStyles = [$iconContainer];

  if (Component) return Component;

  if (icon !== undefined) {
    return (
      <Icon
        color={iconColor}
        containerStyle={[
          $iconContainerStyles,
          side === 'left' && $iconContainerLeft,
          side === 'right' && $iconContainerRight,
          { height: size },
        ]}
        icon={icon}
        size={24}
      />
    );
  }

  return null;
}

export interface IListItemProps extends TouchableOpacityProps {
  /**
   * How tall the list item should be.
   * Default: 56
   */
  readonly height?: number;
  /**
   * Whether to show the top separator.
   * Default: false
   */
  readonly topSeparator?: boolean;
  /**
   * Whether to show the bottom separator.
   * Default: false
   */
  readonly bottomSeparator?: boolean;
  /**
   * Text to display if not using `tx` or nested components.
   */
  readonly text?: ITextProps['text'];
  /**
   * Text which is looked up via i18n.
   */
  readonly tx?: ITextProps['tx'];
  /**
   * Children components.
   */
  readonly children?: ITextProps['children'];
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  readonly txOptions?: ITextProps['txOptions'];
  /**
   * Optional text style override.
   */
  readonly textStyle?: StyleProp<TextStyle>;
  /**
   * Pass any additional props directly to the Text component.
   */
  readonly TextProps?: ITextProps;
  /**
   * Optional View container style override.
   */
  readonly containerStyle?: StyleProp<ViewStyle>;
  /**
   * Optional TouchableOpacity style override.
   */
  readonly style?: StyleProp<ViewStyle>;
  /**
   * Icon that should appear on the left.
   */
  readonly leftIcon?: IconTypes;
  /**
   * An optional tint color for the left icon
   */
  readonly leftIconColor?: string;
  /**
   * Icon that should appear on the right.
   */
  readonly rightIcon?: IconTypes;
  /**
   * An optional tint color for the right icon
   */
  readonly rightIconColor?: string;
  /**
   * Right action custom ReactElement.
   * Overrides `rightIcon`.
   */
  readonly RightComponent?: ReactElement;
  /**
   * Left action custom ReactElement.
   * Overrides `leftIcon`.
   */
  readonly LeftComponent?: ReactElement;
}

/**
 * -----------------------------------------------------------------------------
 * A styled row component that can be used in FlatList, SectionList, or by itself.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/ListItem/}
 * @param {IListItemProps} props - The props for the `ListItem` component.
 */
export function ListItem(props: IListItemProps) {
  const {
    bottomSeparator,
    children,
    height = 56,
    LeftComponent,
    leftIcon,
    leftIconColor,
    RightComponent,
    rightIcon,
    rightIconColor,
    style,
    text,
    TextProps: textProps,
    topSeparator,
    tx,
    txOptions,
    textStyle: $textStyleOverride,
    containerStyle: $containerStyleOverride,
    ...touchableOpacityProps
  } = props;

  const $textStyles = [$textStyle, $textStyleOverride, textProps?.style];

  const $containerStyles = [
    topSeparator && $separatorTop,
    bottomSeparator && $separatorBottom,
    $containerStyleOverride,
  ];

  const $touchableStyles = [$touchableStyle, { minHeight: height }, style];

  return (
    <View style={$containerStyles}>
      <TouchableOpacity {...touchableOpacityProps} style={$touchableStyles}>
        <ListItemAction
          Component={LeftComponent}
          icon={leftIcon}
          iconColor={leftIconColor}
          side="left"
          size={height}
        />

        <Text {...textProps} style={$textStyles} text={text} tx={tx} txOptions={txOptions}>
          {children}
        </Text>

        <ListItemAction
          Component={RightComponent}
          icon={rightIcon}
          iconColor={rightIconColor}
          side="right"
          size={height}
        />
      </TouchableOpacity>
    </View>
  );
}
