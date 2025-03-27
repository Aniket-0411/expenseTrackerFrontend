import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import { TxKeyPath } from '~/i18n';
import { Box, BoxPropsType, Text } from '~/theme';

import styles from './styles';

export interface IRadioButton<T = string> extends BoxPropsType {
  /**
   * customStyles for overriding the default styles of the component when.
   */
  customStyles?: StyleProp<ViewStyle>;
  disabled?: boolean;
  label?: string;
  labelTx?: TxKeyPath;
  onValueChange: (value: T) => void;
  radioContainerBoxProps?: BoxPropsType;
  selectedValue: T;
  size?: 'small' | 'large';
  value: T;
}

/**-----------------------------------------------------------------------------------
 * Renders a radio button component with a circle and a text label.
 */
export function RadioButton<T>({
  customStyles,
  disabled = false,
  label,
  labelTx,
  onValueChange,
  radioContainerBoxProps,
  selectedValue,
  size = 'small',
  value,
  ...boxProps
}: IRadioButton<T>) {
  const isSelected = selectedValue === value;

  const circleStyle = size === 'large' ? styles.$radioLargeCircle : styles.$radioSmallCircle;
  const selectedStyle = size === 'large' ? styles.$selectedLargeRb : styles.$selectedSmallRb;

  const handleOnValueChange = () => {
    onValueChange(value);
  };
  return (
    <Box {...boxProps}>
      <TouchableOpacity
        disabled={disabled}
        onPress={handleOnValueChange}
        style={[styles.$radioContainer, customStyles]}
      >
        <Box me="s" {...radioContainerBoxProps} style={[styles.$radioCircle, circleStyle]}>
          {selectedValue === value ? (
            <Box
              style={[
                styles.$selectedRb,
                selectedStyle,
                disabled ? styles.$selectedRbDisabled : null,
              ]}
            />
          ) : null}
        </Box>
        <Text
          fontFamily={isSelected ? 'fontPrimaryMedium' : 'primary'}
          fontSize={14}
          opacity={isSelected ? 1 : 0.75}
          text={label}
          tx={labelTx}
        />
      </TouchableOpacity>
    </Box>
  );
}
