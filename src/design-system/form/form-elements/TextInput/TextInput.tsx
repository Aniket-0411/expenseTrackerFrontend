import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Pressable, StyleSheet, TextInput as RNTextInput } from 'react-native';

import { isIOS } from '~/utils';
import { getCurrentLocale, translate, useLanguageContext } from '~/i18n';
import { Box, fontFamily } from '~/theme';

import { FloatingLabel } from '../../../common';
import { XMarkIcon } from '../../../icons';

import { IBaseTextInputProps, TInputFocusAndBlurEvent, TTextInputRef } from '../../form.types';

import { TextInputPrefix } from './TextInputPrefix';
import { TextInputError } from './TextInputError';
import { TextInputLabel } from './TextInputLabel';
import { TextInputLabelFloatingSpacer } from './TextInputLabelFloatingSpacer';
import { useTextInputColors } from './useTextInputColors';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: fontFamily.primaryEn,
    fontSize: 14,
    lineHeight: isIOS ? 18 : 30,
    paddingVertical: isIOS ? 10 : 4,
  },
});

type ITextInputProps = IBaseTextInputProps;

/**
 * -----------------------------------------------------------------------------
 * Create a theme-able TextInput component that wraps around the React Native
 * TextInput and adds additional support for error self container error
 * feedback loading and animated labels.
 */
export function TextInputWithRef(props: ITextInputProps, ref: TTextInputRef) {
  const {
    autoCapitalize = 'words',
    boxProps,
    boxPropsInputContainer,
    editable = true,
    error,
    handleClearInput,
    hasClearButton = false,
    iconRight,
    id,
    IconLeft,
    isLabelFloating = true,
    keyboardType = 'default',
    label,
    labelTxOptions,
    labelLocalized,
    labelPostFix,
    labelPostFixTxOptions,
    name,
    onBlur,
    onChangeText,
    onFocus,
    placeholder,
    placeholderTxOptions,
    placeholderLocalized,
    value = '',
    valuePrefix = '',
    style,
    multiline,
    ...rest
  } = props;
  const textInputRef = useRef<RNTextInput | null>(null);

  const [isFocused, setIsFocused] = useState(false);
  const { isRTL } = useLanguageContext();
  const textAlign = isRTL ? 'right' : 'left';

  const {
    color,
    placeholderColor,
    backgroundColor,
    borderColor,
    labelColor,
    borderWidth,
    isThemeLight,
  } = useTextInputColors({
    editable,
    isFocused,
    hasError: !!error,
  });

  const handleFocus = (event: TInputFocusAndBlurEvent) => {
    setIsFocused(true);

    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event: TInputFocusAndBlurEvent) => {
    setIsFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  const handleClear = () => {
    if (textInputRef?.current) {
      textInputRef.current?.focus();

      if (handleClearInput) {
        handleClearInput();
      }
    }
  };

  let i18nPlaceholder = placeholder && translate(placeholder, placeholderTxOptions);

  /**
   * If localized placeholder and label is provided, we have to pick out the active language
   */
  if (placeholderLocalized?.en) {
    i18nPlaceholder = placeholderLocalized[getCurrentLocale()];
  }

  useImperativeHandle<RNTextInput | null, RNTextInput | null>(ref, () => textInputRef?.current);

  return (
    <Box key={`input-${id}`} mt="s" testID={name as string} {...boxProps}>
      {label && !isLabelFloating ? (
        <TextInputLabel
          color={labelColor}
          isFocused={isFocused}
          label={label}
          labelLocalized={labelLocalized}
          labelPostFix={labelPostFix}
          labelPostFixTxOptions={labelPostFixTxOptions}
          labelTxOptions={labelTxOptions}
        />
      ) : null}

      {label && isLabelFloating ? (
        <TextInputLabelFloatingSpacer
          isFocused={isFocused}
          value={value}
          valuePrefix={valuePrefix}
        />
      ) : null}

      <Box
        alignContent="center"
        alignItems="center"
        bg={backgroundColor}
        borderColor={borderColor}
        borderRadius="xl"
        borderWidth={borderWidth}
        flexDirection="row"
        justifyContent="center"
        pe="s"
        ps="m"
        py="xxs"
        // shadowColor={isFocused ? 'inputShadow' : 'inputShadow'}
        shadowColor="inputShadow"
        shadowOffset={{
          height: 1,
          width: 1,
        }}
        shadowOpacity={isFocused ? 0.08 : 0}
        {...boxPropsInputContainer}
      >
        <Box flex={1} flexDirection="row">
          {valuePrefix ? <TextInputPrefix color={color} prefix={valuePrefix} /> : null}

          {IconLeft ? (
            <IconLeft boxProps={{ me: 's', my: 's' }} hasError={!!error} opacity={0.75} size={20} />
          ) : null}

          <RNTextInput
            ref={textInputRef}
            autoCapitalize={autoCapitalize}
            editable={editable}
            keyboardAppearance={isThemeLight ? 'light' : 'dark'}
            keyboardType={keyboardType}
            multiline={multiline}
            onBlur={handleBlur}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            placeholder={i18nPlaceholder}
            placeholderTextColor={placeholderColor}
            style={[styles.input, { color, textAlign }, style]}
            value={value}
            {...rest}
          />
        </Box>

        {value && hasClearButton && handleClearInput && editable ? (
          <Pressable
            onPress={handleClear}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ alignSelf: multiline ? 'flex-start' : undefined }}
          >
            <Box paddingStart="s" paddingVertical="xs">
              <XMarkIcon
                boxProps={{ marginStart: 'm' }}
                hasError={!!error}
                isActive={isFocused}
                isDisabled={!editable}
                opacity={1}
              />
            </Box>
          </Pressable>
        ) : null}

        {iconRight || null}
      </Box>

      {(label && isLabelFloating && isFocused) || (label && isLabelFloating && value) ? (
        <FloatingLabel
          color={color}
          isFocused={isFocused}
          label={label}
          labelLocalized={labelLocalized}
          labelPostFix={labelPostFix}
          labelPostFixTxOptions={labelPostFixTxOptions}
          labelTxOptions={labelTxOptions}
          value={value}
          valuePrefix={valuePrefix}
        />
      ) : null}

      {editable ? <TextInputError error={error} isRTL={isRTL} /> : null}
    </Box>
  );
}

/**
 * -----------------------------------------------------------------------------
 * Create a theme-able TextInput component that wraps around the React Native
 * TextInput and adds additional support for error self container error
 * feedback loading and animated labels.
 * - Exposes the ref of the `TextInputWithRef`, to allow for additional control.
 */
export const TextInput = forwardRef(TextInputWithRef);
