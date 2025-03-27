import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Box, Text } from '~/theme';

import { IDropDowItem, IInputDropdownElementProps } from '../../form.types';

import { LoadingDropDownItems } from './LoadingDropDownItems';
import { NetworkErrorInDropdown } from './NetworkErrorInDropdown';
import { PickerModal } from './PickerModal';
import { ChevronDownIcon, XMarkIcon } from '~/design-system/icons';

const styles = StyleSheet.create({
  flexOne: { flex: 1 },
});

/**
 * -----------------------------------------------------------------------------
 * Picker that pops up from the Bottom and provides a means to choose options
 * from a selected list of options.
 * It can be searchable.
 */
export function InputDropdownElement<T>({
  boxProps,
  constraints,
  enableSearch = true,
  error = '',
  handleOnFetchRetry,
  hasNetworkError = '',
  isLoading = false,
  items,
  label,
  maxInputLength = 30,
  modalTitle,
  name,
  onError,
  onValueChange,
  required = true,
  searchOptions,
  selectedItem,
  value = '',
}: IInputDropdownElementProps<T>) {
  const [isPickerModalOpen, setIsPickerModalOpen] = useState(false);

  const defaultErrorMessage = `${constraints?.feedbackLabel || 'This field'} is required`;

  // const fieldLabel = `${label} ${required ? '*' : ''}`;
  const labelTxOptions = { isRequired: required ? ' *' : '' };

  const handleClearInput = () => {
    onValueChange('');

    if (required) {
      onError?.({ name, error: defaultErrorMessage });
    }
  };

  const handleOpenPicker = () => {
    onError?.({ name, error: undefined });
    setIsPickerModalOpen(() => true);
  };

  const handleClosePicker = () => {
    if (required && !value) {
      onError?.({ name, error: defaultErrorMessage });
    } else if (error) {
      onError?.({ name, error: undefined });
    }

    setIsPickerModalOpen(() => false);
  };

  const handlePress = () => {
    handleOpenPicker();
  };

  const handleChange = (item: IDropDowItem) => {
    /**
     * Return the value of the entire item if required as the second argument,
     * That way if the extra data is desired, it can be accessed without a
     * need for additional indexing.
     */
    onValueChange(item.label, item);

    if (error) {
      onError?.({ name, error: undefined });
    }

    setIsPickerModalOpen(() => false);
  };

  if (hasNetworkError) {
    return (
      <NetworkErrorInDropdown
        boxProps={boxProps}
        error={hasNetworkError}
        handleOnFetchRetry={handleOnFetchRetry}
        label={label}
        labelTxOptions={labelTxOptions}
      />
    );
  }

  if (isLoading) {
    return (
      <LoadingDropDownItems
        boxProps={boxProps}
        // label={fieldLabel}
        // label={fieldLabel}
        label={label}
        labelTxOptions={labelTxOptions}
      />
    );
  }

  let renderActionIcon = null;

  const iconColor = error ? 'danger' : 'actionLabel';
  const borderColor = error ? 'danger' : 'loaderBorder';
  const textColor = error ? 'danger' : 'textTitle';

  /**
   * If the field is empty, show a drop down, chevron, otherwise clear input icon.
   */
  if (value) {
    renderActionIcon = (
      <XMarkIcon
        boxProps={{ pb: 's' }}
        color={iconColor}
        onPress={handleClearInput}
        opacity={0.35}
        size={16}
      />
    );
  } else {
    renderActionIcon = (
      <ChevronDownIcon
        boxProps={{ pb: 's' }}
        color={iconColor}
        onPress={handlePress}
        opacity={0.75}
        size={12}
        solid
      />
    );
  }

  return (
    <Box pb="l" {...boxProps}>
      <TouchableOpacity onPress={handlePress}>
        {value ? (
          <Text fontSize={14} tx={label} txOptions={labelTxOptions} variant="formLabel" />
        ) : null}

        <Box
          alignItems="center"
          borderBottomColor={borderColor}
          borderBottomWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          paddingTop={value ? 's' : 'none'}
        >
          {value ? (
            <Text color="bodyText" pb="m" variant="formInput">
              {value}
            </Text>
          ) : (
            <Text
              color={textColor}
              pb="m"
              pt="s"
              style={styles.flexOne}
              tx={label}
              txOptions={labelTxOptions}
              variant="formLabel"
            />
          )}

          {renderActionIcon}
        </Box>

        {/**
         * Display an inline error if it's arising for the user's input.
         */}
        {error ? (
          <Box paddingVertical="s">
            <Text color="danger" fontFamily="fontPrimaryLight" fontSize={12} txLocalized={error} />
          </Box>
        ) : null}
      </TouchableOpacity>

      {isPickerModalOpen ? (
        <PickerModal
          enableSearch={enableSearch}
          handleCloseModal={handleClosePicker}
          isVisible={isPickerModalOpen}
          items={items}
          maxInputLength={maxInputLength}
          modalTitle={modalTitle || label}
          onItemSelection={handleChange}
          searchOptions={searchOptions}
          selectedItem={selectedItem}
          value={value}
        />
      ) : null}
    </Box>
  );
}
