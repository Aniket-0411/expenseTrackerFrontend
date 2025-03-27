import { BoxPropsType, TextPropsType, useIsThemeLight, useThemeColors } from '~/theme';

interface IUseTextInputColorsOptions {
  /**
   * Whether the input is editable/not disabled.
   */
  editable: boolean;
  /**
   * Whether the input is focused.
   */
  isFocused: boolean;
  /**
   * Whether the input is has an `error`.
   */
  hasError: boolean;
}

/**
 * This hooks provides required colors for TextInput from the app theme.
 */
export function useTextInputColors({ editable, isFocused, hasError }: IUseTextInputColorsOptions) {
  const isThemeLight = useIsThemeLight();

  const {
    inputPlaceholder: inputPlaceholderColor,
    inputTextFocused: inputTextFocusedColor,
    inputText: inputTextColor,
    inputError: inputErrorColor,
    inputDisabled: inputDisabledColor,
  } = useThemeColors();

  let backgroundColor: BoxPropsType['bg'] = 'inputBackground';
  let borderColor: BoxPropsType['borderColor'] = 'inputBorder';
  let borderWidth = 1;
  let color = inputTextColor;
  let placeholderColor = inputPlaceholderColor;
  let labelColor: TextPropsType['color'] = 'inputLabel';

  if (isFocused) {
    backgroundColor = 'inputBackgroundFocused';
    borderColor = 'inputBorderFocused';
    borderWidth = 1.5;
    color = inputTextFocusedColor;
    labelColor = 'inputTextFocused';
  } else if (hasError) {
    borderColor = 'inputError';
    color = inputErrorColor;
    labelColor = 'inputError';
  } else if (!editable) {
    color = inputDisabledColor;
    placeholderColor = inputDisabledColor;
    backgroundColor = 'inputBackgroundDisabled';
    borderColor = 'inputBorderDisabled';
    labelColor = 'inputDisabled';
  }

  return {
    color,
    placeholderColor,
    backgroundColor,
    borderColor,
    labelColor,
    borderWidth,
    isThemeLight,
  };
}
