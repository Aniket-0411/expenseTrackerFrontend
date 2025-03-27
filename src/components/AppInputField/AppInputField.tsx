import { ReactNode } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { Box, Text, useThemeColors } from '~/theme';

interface IAppInputFieldProps extends TextInputProps {
  errorMessage?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isEditable?: boolean;
  label?: string;
  onChangeText?: (text: string) => void;
  onRightIconPress?: () => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string;
}

/**-----------------------------------------------------------------------------
 * A component that renders a customizable text input field.
 */
export function AppInputField({
  errorMessage,
  iconLeft,
  iconRight,
  label,
  isEditable = true,
  onChangeText,
  onRightIconPress,
  placeholder,
  secureTextEntry = false,
  value,
  ...rest
}: IAppInputFieldProps) {
  const {
    inputText,
    inputDisabled,
    inputError,
    danger: inputBorderError,
    inputBackgroundError,
  } = useThemeColors();

  return (
    <Box>
      {label ? (
        <Text color="inputLabel" fontSize={16} mb="s">
          {label}
        </Text>
      ) : null}

      <Box
        alignContent="center"
        alignItems="center"
        backgroundColor={isEditable ? 'inputBackground' : 'inputDisabled'}
        borderColor="inputBorder"
        borderRadius="xl"
        borderWidth={1}
        flexDirection="row"
        opacity={isEditable ? 1 : 0.85}
        px="m"
        py="xxs"
      >
        {iconLeft ? <Box>{iconLeft}</Box> : null}

        <TextInput
          editable={isEditable}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          selectionColor={inputText}
          style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {
              color: isEditable ? inputText : inputDisabled,
              fontFamily: 'Matter-Regular',
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 4,
            },
            errorMessage
              ? {
                  borderColor: inputBorderError,
                  backgroundColor: inputBackgroundError,
                  color: inputError,
                }
              : null,
          ]}
          value={value}
          {...rest}
        />
      </Box>

      {errorMessage ? (
        <Text color="buttonPrimaryBackground" fontFamily="primary" fontSize={14} mt="s">
          {errorMessage}
        </Text>
      ) : null}
    </Box>
  );
}
