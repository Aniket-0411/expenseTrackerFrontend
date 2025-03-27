import { Keyboard, KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';

import { getCurrentLocale, TLocalizedText, translate, TTxOptions, TxKeyPath } from '~/i18n';
import { Box, BoxPropsType, useIsThemeLight, useThemeColors } from '~/theme';
import { isAndroid } from '~/utils';

import { BackIcon, XMarkIcon, SearchIcon } from '../../icons';

import { SearchWrapper } from './SearchWrapper';

const styles = StyleSheet.create({
  input: {
    borderRadius: 12,
    flex: 1,
    fontFamily: 'fontPrimaryLight',
    fontSize: 14,
    padding: 0,
  },
});

interface ISearchTextInputProps extends BoxPropsType {
  autoFocus?: boolean;
  hasBackButton?: boolean;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  onBackButtonPress?(): void;
  onClearSearch(): void;
  onTextInputChange(text: string): void;
  placeholder?: TxKeyPath;
  placeholderTxOptions?: TTxOptions;
  placeholderLocalized?: TLocalizedText;
  value: string;
}

/**
 * -----------------------------------------------------------------------------
 * Search input that appears on top of filter modals and search pages
 */
export function SearchTextInput({
  autoFocus = true,
  hasBackButton = false,
  keyboardType,
  // marginEnd,
  // marginStart,
  maxLength,
  onBackButtonPress,
  onClearSearch,
  onTextInputChange,
  placeholder,
  placeholderTxOptions,
  placeholderLocalized,
  value = '',
  ...rest
}: ISearchTextInputProps) {
  const isThemeLight = useIsThemeLight();
  const { mainForeground, textCaption } = useThemeColors();

  const SEARCH_PLACEHOLDER: TxKeyPath = 'forms.placeholders.search';

  const handleOnChange = (text: string) => {
    onTextInputChange(text);
  };

  const handleBlur = () => {
    Keyboard.dismiss();
  };

  const inputKeyBoardType = isAndroid ? 'visible-password' : 'ascii-capable';

  /**
   * Renders the translated placeholder and label is passed via `tx`
   */
  let i18nPlaceholder =
    (placeholder && translate(placeholder, placeholderTxOptions)) || translate(SEARCH_PLACEHOLDER);

  /**
   * If localized placeholder and label is provided, we have to pick out the active language
   */
  if (placeholderLocalized?.en) {
    i18nPlaceholder = placeholderLocalized[getCurrentLocale()];
  }

  return (
    <SearchWrapper marginEnd="s" marginStart="s" {...rest}>
      {hasBackButton && onBackButtonPress ? (
        <BackIcon onPress={onBackButtonPress} />
      ) : (
        <SearchIcon boxProps={{ marginEnd: 's' }} fillColor={mainForeground} opacity={0.4} />
      )}

      <TextInput
        autoFocus={autoFocus}
        keyboardAppearance={isThemeLight ? 'light' : 'dark'}
        keyboardType={keyboardType || inputKeyBoardType}
        maxLength={maxLength}
        onBlur={handleBlur}
        onChangeText={handleOnChange}
        placeholder={i18nPlaceholder}
        placeholderTextColor={textCaption}
        style={[styles.input, { color: mainForeground }]}
        value={value}
      />

      {value ? <XMarkIcon onPress={onClearSearch} opacity={0.5} /> : <Box paddingHorizontal="xs" />}
    </SearchWrapper>
  );
}
