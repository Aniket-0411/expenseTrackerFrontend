import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format, parse } from 'date-fns';

import { getCurrentLocale } from '~/i18n';
import { Box, Text, TThemeColor } from '~/theme';

import { CalendarIcon, XMarkIcon } from '../../../icons';

import { IInputDateElementProps } from '../../form.types';

import { CancelButtonIOS } from './CancelButtonIOS';
import { DatePickerHeaderIOS } from './DatePickerHeaderIOS';
/**
 * -----------------------------------------------------------------------------
 * The base form date picker that is used as a building block for all other date
 * fields, allowing for inline validation, clearable date inputs and custom
 * themed styles.
 */
export function InputDateElement<T>({
  constraints,
  error = '',
  editable,
  label,
  placeholder,
  name,
  onChangeCallback,
  onChange,
  onError,
  value = '',
  isDisabled = false,
  ...rest
}: IInputDateElementProps<T>) {
  const { maxDate, minDate, required = false } = constraints;

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const selectedDate = value ? parse(value, 'dd/MM/yyyy', new Date()) : new Date();

  const handleDateChange = (date: Date) => {
    const nameKey = name as keyof T;

    setIsDatePickerVisible(() => false);
    onChangeCallback?.({ name: nameKey, value: date ? format(date, 'dd/MM/yyyy') : date });
  };

  const handleDateCancelled = () => {
    setIsDatePickerVisible(() => false);
  };

  const handleClearInput = () => {
    const nameKey = name as keyof T;

    onChangeCallback?.({ name: nameKey, value: '' });

    if (required) {
      onError({ name: nameKey, error: `The ${label} is required` });
    }
  };

  const handlePress = () => {
    setIsDatePickerVisible(() => true);
  };

  let RenderActionIcon = null;

  if (value && !required && editable) {
    RenderActionIcon = <XMarkIcon color="actionLabel" onPress={handleClearInput} opacity={0.75} />;
  } else {
    RenderActionIcon = <CalendarIcon />;
  }

  const labelTxOptions = { isRequired: required ? ' *' : '' };
  const formLabelColor: TThemeColor = error ? 'danger' : 'inputLabel';

  const formattedDate = value
    ? format(parse(value, 'dd/MM/yyyy', new Date()), 'dd MMMM yyyy')
    : value;

  return (
    <Box mt="s" {...rest}>
      {value ? (
        <Text
          color={formLabelColor}
          fontFamily="fontPrimaryLight"
          fontSize={14}
          mb="xxs"
          tx={label}
          txOptions={labelTxOptions}
          variant="formLabel"
        />
      ) : null}

      <TouchableOpacity disabled={isDisabled} onPress={handlePress}>
        <Box
          alignItems="center"
          bg="inputBackground"
          borderColor="inputBorder"
          borderRadius="xl"
          borderWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          px="m"
          py="xxs"
        >
          {!value ? (
            <Text color="inputPlaceholder" py="s" tx={placeholder} />
          ) : (
            <Text color="inputText" py="s" text={formattedDate} />
          )}

          {RenderActionIcon}
        </Box>
      </TouchableOpacity>

      {/* {error?.error ? (
        <Text
          color="danger"
          fontFamily="fontPrimaryLight"
          fontSize={12}
          paddingTop="s"
          txLocalized={error.error}
        />
      ) : null} */}

      {isDatePickerVisible ? (
        <DateTimePickerModal
          // headerTextIOS={updatedLabel} // This prop is Deprecated
          // isHeaderVisibleIOS // Deprecated too
          cancelTextIOS="Cancel" // Translate this text/
          customCancelButtonIOS={CancelButtonIOS}
          customHeaderIOS={DatePickerHeaderIOS}
          date={selectedDate}
          isVisible={isDatePickerVisible}
          locale={getCurrentLocale()}
          maximumDate={maxDate}
          minimumDate={minDate}
          mode="date"
          onCancel={handleDateCancelled}
          onConfirm={handleDateChange}
          textColor="black"
          themeVariant="light"
        />
      ) : null}
    </Box>
  );
}
