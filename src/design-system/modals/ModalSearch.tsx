import { useState } from 'react';
import { KeyboardTypeOptions } from 'react-native';

import { isAndroid } from '~/utils';
import { TxKeyPath, TTxOptions } from '~/i18n';

import { SearchTextInput } from '../common';

export interface IModalSearchProps {
  autoFocus?: boolean;
  hasBackButton?: boolean;
  maxLength?: number;
  onBackButtonPress?(): void;
  onSearchClear(): void;
  onSearchInputChange(text: string): void;
  searchKeyboardFormat?: KeyboardTypeOptions;
  searchOptions?: {
    placeholder?: TxKeyPath;
    placeholderTxOptions?: TTxOptions;
  };
}

/**
 * -----------------------------------------------------------------------------
 * Displays the Search bar at the top of the results.
 */
export function ModalSearch({
  autoFocus = false,
  hasBackButton = false,
  onBackButtonPress,
  onSearchClear,
  onSearchInputChange,
  searchKeyboardFormat = 'default',
  searchOptions,
  maxLength = 50,
  ...rest
}: IModalSearchProps) {
  const [searchFilterValue, setSearchFilterValue] = useState('');
  const { placeholder, placeholderTxOptions } = searchOptions || {};

  const handleSearchFilterChange = (text: string) => {
    onSearchInputChange(text);
    setSearchFilterValue(() => text);
  };

  const handleOnClearSearch = () => {
    onSearchClear();
    setSearchFilterValue(() => '');
  };

  const keyboardType = searchKeyboardFormat || isAndroid ? 'visible-password' : 'ascii-capable';

  return (
    <SearchTextInput
      autoFocus={autoFocus}
      hasBackButton={hasBackButton}
      keyboardType={keyboardType}
      maxLength={maxLength}
      onBackButtonPress={onBackButtonPress}
      onClearSearch={handleOnClearSearch}
      onTextInputChange={handleSearchFilterChange}
      placeholder={placeholder}
      placeholderTxOptions={placeholderTxOptions}
      value={searchFilterValue}
      {...rest}
    />
  );
}
