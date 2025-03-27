import { TxKeyPath, TTxOptions, TLocalizedText } from '~/i18n';
import { Box, BoxPropsType, Text, TThemeColor, useThemeColorKey } from '~/theme';

import { FloatingLabel } from '../common';
import { ArrowDownIcon } from '../icons';
import { ActivityIndicator } from '../loaders';

import { Pressable } from './Pressable';

interface IDropdownCTAProps extends BoxPropsType {
  isEnabled: boolean;
  hasLabel?: boolean;
  isLoading?: boolean;
  isSelected: boolean;
  placeholder?: TxKeyPath;
  label?: TxKeyPath;
  labelTxOptions?: TTxOptions;
  labelLocalized?: TLocalizedText;
  onPress: () => void;
  text?: string;
  txOptions?: TTxOptions;
}

/**
 * -----------------------------------------------------------------------------
 *  This is the dropdown trigger button that opens the modal/popup  when pressed
 */
export function DropdownCTA({
  isEnabled,
  hasLabel = true,
  isSelected,
  isLoading,
  placeholder,
  label,
  labelTxOptions,
  labelLocalized,
  onPress,
  text,
  txOptions,
  ...rest
}: IDropdownCTAProps) {
  let color: TThemeColor = 'illustrationShadowColor';

  if (isSelected) {
    color = 'illustrationShadowColor';
  }

  if (!isEnabled || !text) {
    color = 'illustrationShadowColor';
  }

  const labelColor = useThemeColorKey(color);

  return (
    <Pressable disabled={!isEnabled} onPress={onPress}>
      {hasLabel ? (
        <FloatingLabel
          color={labelColor}
          isFocused={!!text}
          label={label}
          labelLocalized={labelLocalized}
          labelTxOptions={labelTxOptions}
          value={text ?? ''}
        />
      ) : null}

      <Box
        alignItems="center"
        // bg={isSelected ? 'inputBackgroundFocused' : 'inputBackground'}
        bg="inputBackground"
        borderColor="inputBorder"
        borderRadius="l"
        borderWidth={0.35}
        flexDirection="row"
        flexGrow={1}
        gap="m"
        justifyContent="space-between"
        opacity={isEnabled ? 1 : 0.5}
        px="m"
        py="s"
        {...rest}
      >
        <Text
          color={color}
          fontSize={14}
          py="xxs"
          text={text}
          tx={placeholder}
          txOptions={txOptions}
        />

        {isLoading ? (
          <ActivityIndicator color="logoForeground" size={0.6} />
        ) : (
          <ArrowDownIcon color={color} />
        )}
      </Box>
    </Pressable>
  );
}
