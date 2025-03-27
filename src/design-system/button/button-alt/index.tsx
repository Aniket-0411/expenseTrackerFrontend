import { ActivityIndicator, TouchableOpacity } from 'react-native';

import {
  Box,
  BoxPropsType,
  isTablet,
  TBaseTextProps,
  ThemeType,
  Text,
  TextPropsType,
} from '~/theme';

import { IIconProps } from '../../icons';

import { ButtonThemed } from './button';

export type TButtonIcon = (props: IIconProps) => JSX.Element;

type TButtonProps = {
  isDisabled?: boolean;
  iconLeft?: {
    Icon: TButtonIcon;
    opacity?: number;
    size?: number;
    solid?: boolean;
  };
  iconRight?: {
    Icon: TButtonIcon;
    opacity: number;
    size: number;
    solid: boolean;
  };
  labelProps?: TextPropsType;
  isLoading?: boolean;
  marginBottom?: string;
  marginHorizontal?: string;
  marginRight?: string;
  marginTop?: string;
  onPress: () => void;
  padding?: string;
  variant: keyof ThemeType['buttonVariants'];
} & BoxPropsType &
  Pick<TBaseTextProps, 'tx' | 'txOptions' | 'txLocalized' | 'text'>;

/**
 * -----------------------------------------------------------------------------
 * The Button component of the App that exposes button themed variants.
 *
 * - Supports `primary`, `secondary` or `borderless` options.
 */
export function Button({
  isDisabled = false,
  iconRight,
  iconLeft,
  labelProps,
  isLoading = false,
  marginBottom = 'm',
  marginHorizontal = 'l',
  marginTop,
  onPress,
  padding = 'm',
  tx,
  txOptions,
  txLocalized,
  text,
  variant,
  ...rest
}: TButtonProps) {
  let labelVariant: TextPropsType['variant'] = 'actionButtonPrimaryLabel';
  let color: TextPropsType['color'] = 'buttonPrimaryLabel';

  switch (variant) {
    case 'primary': {
      // Do nothing, using `primary` button
      break;
    }
    case 'secondary': {
      color = 'buttonSecondaryLabel';
      labelVariant = 'actionButtonSecondaryLabel';
      break;
    }
    case 'borderless': {
      color = 'actionLabel';
      labelVariant = 'actionLabel';
      break;
    }
    default: {
      // Do nothing, using `primary` button
      break;
    }
  }

  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress}>
      <ButtonThemed
        // disabled={disabled}
        marginBottom={marginBottom}
        marginHorizontal={marginHorizontal}
        marginTop={marginTop}
        opacity={isDisabled ? 0.42 : 1}
        padding={padding}
        variant={variant}
        {...rest}
      >
        {isLoading ? (
          <Box>
            <ActivityIndicator color={color} size="small" />
          </Box>
        ) : null}

        {iconLeft ? (
          <iconLeft.Icon
            boxProps={{
              me: 'm',
              py: 'none',
            }}
            color={color}
            onPress={onPress}
            opacity={iconLeft.opacity ?? 0.95}
            size={iconLeft.size ?? (isTablet ? 32 : 20)}
            solid={iconLeft.solid}
          />
        ) : null}

        <Text
          fontFamily="fontPrimaryBold"
          opacity={isDisabled ? 0.98 : 1}
          paddingVertical="xs"
          variant={labelVariant}
          {...labelProps}
          text={text}
          tx={tx}
          txLocalized={txLocalized}
          txOptions={txOptions}
        />

        {iconRight ? (
          <iconRight.Icon
            boxProps={{
              ms: 'm',
              py: 'none',
            }}
            color={color}
            onPress={onPress}
            opacity={iconRight.opacity ?? 0.95}
            size={iconRight.size ?? (isTablet ? 32 : 20)}
            solid={iconRight.solid}
          />
        ) : null}
      </ButtonThemed>
    </TouchableOpacity>
  );
}
