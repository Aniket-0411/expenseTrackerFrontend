import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import { colors } from '~/theme';

import { Text } from '../Text';

import { IDropdownComponentProps, TDropdownOption } from './types';
import styles from './styles';

/**
 * This component is a reusable dropdown component for adding a dropdown.
 *
 * @param IDropdownComponentProps
 * @returns JSX.Element
 */
export function DropdownComponent({
  data,
  placeholder,
  customStyle,
  value,
  onValueChange,
  disabled,
}: IDropdownComponentProps): JSX.Element {
  /**
   * Renders each item in the dropdown list.
   * @param {TDropdownOption} item - The item to be rendered.
   * @returns {JSX.Element} - The rendered item view.
   */
  const renderItem = (item: TDropdownOption): JSX.Element => (
    <View style={styles.$item}>
      <Text style={styles.$textItem} text={item.label} />
    </View>
  );

  return (
    <Dropdown
      data={data}
      disable={disabled}
      iconColor={disabled ? colors.palette.neutral400 : colors.palette.neutral900}
      iconStyle={styles.$iconStyle}
      labelField="label"
      onChange={onValueChange}
      placeholder={placeholder}
      placeholderStyle={[styles.$placeholderStyle, disabled && styles.$placeholderDisabled]}
      renderItem={renderItem}
      selectedTextStyle={styles.$selectedTextStyle}
      style={[styles.$dropdown, customStyle, disabled && styles.$dropdownDisabled]}
      value={value}
      valueField="value"
    />
  );
}
