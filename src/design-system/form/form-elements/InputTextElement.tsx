import {
  cleanupDoubleSpace,
  validateAndCleanInputText,
  useDebounce,
  isAndroid,
  checkAndFormatEmiratesIdInput,
} from '~/utils';

import { validateInputValue } from '../form-utils';
import { TInputFocusAndBlurEvent, TInputTextElementProps } from '../form.types';

import { TextInput } from './TextInput/TextInput';

/**
 * -----------------------------------------------------------------------------
 * This is used to create the underlying debounced `TextInput` that...
 * - Captures user input, validates it based on provided constraints config.
 * - Updates the parent form the debounce delay (default 1s) with errors data
 *   and updated input.
 */
export function InputTextElement({
  autoCapitalize = 'none',
  boxProps,
  error = '',
  hasClearButton = true,
  id,
  inputRef,
  inputDebounceDelay,
  isLabelFloating,
  keyboardType,
  label,
  labelPostFix,
  name,
  onChangeCallback,
  onBlurCallback,
  onError,
  onFocus,
  value = '',
  ...rest
}: TInputTextElementProps) {

  const handleCheckValidity = (newText: string) => {
    let updatedText = newText;

    if (newText) {
      updatedText = cleanupDoubleSpace(newText);
    }

    const inputError = null;

    onError({ name });

    return updatedText;
  };

  const handleDebounceOnChange = (updatedValue: string) => {
    const validatedText = handleCheckValidity(updatedValue);

    /**
     *The onChange callback takes in the second array item of a useState ie...
     setValue, and using the callback notation to pass the value from the
     anonymous function for more predictable state updates.
     * */
    onChangeCallback({
      name,
      value: validatedText,
    });
  };

  const {
    debouncedValue: inputValue,
    onChangeDebounced,
    setDebouncedValue: setInputValue,
  } = useDebounce<string>({
    initialValue: value,
    delay: inputDebounceDelay ?? 500,
    onChangeCb: handleDebounceOnChange,
  });

  const handleInputBlur = () => {
    const updatedText = handleCheckValidity(inputValue);

    onBlurCallback?.({ name, value: updatedText });
  };

  const handleValidateOnChange = (newValue: string) => {
    const updatedText = validateAndCleanInputText({
      text: newValue,
    });

    setInputValue(() => {
      onChangeDebounced(updatedText.trim());
      return updatedText;
    });

    return updatedText;
  };

  const handleInputTextChanged = (text: string) => {
    handleValidateOnChange(text);
  };

  const handleInputFocus = (event: TInputFocusAndBlurEvent) => {
    // onError({ name, error: undefined });
    onFocus?.(event);
  };

  const handleClearInput = () => {
    handleInputTextChanged('');
  };

  const keyboardLayoutType = keyboardType ?? (isAndroid ? 'visible-password' : 'ascii-capable');

  return (
    <TextInput
      ref={inputRef}
      autoCapitalize={autoCapitalize}
      autoComplete="username"
      boxProps={boxProps}
      boxPropsInputContainer={{ paddingVertical: 's', borderWidth:0 }}
      error={error}
      handleClearInput={handleClearInput}
      hasClearButton={hasClearButton}
      id={id}
      isLabelFloating={isLabelFloating}
      keyboardType={keyboardLayoutType}
      label={label}
      name={name}
      onBlur={handleInputBlur}
      onChangeText={handleInputTextChanged}
      onFocus={handleInputFocus}
      returnKeyLabel="next"
      returnKeyType="next"
      value={inputValue || ''}
      {...rest}
    />
  );
}
