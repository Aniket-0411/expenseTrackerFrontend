import { ViewStyle } from 'react-native';

/**
 * This is type for the dropdown component option.
 */
export type TDropdownOption = {
  label: string;
  value: string;
};

/**
 * This interface defines the dropdown component props.
 */
export interface IDropdownComponentProps {
  value: TDropdownOption | null;
  data: TDropdownOption[];
  placeholder: string;
  customStyle?: ViewStyle;
  onValueChange: (value: TDropdownOption) => void;
  disabled?: boolean;
}
