import { useState } from 'react';
import * as Haptics from 'expo-haptics';

import { TxKeyPath } from '~/i18n';
import { Box, BoxPropsType } from '~/theme';

import { RadioButton, IRadioButton } from './RadioButton';

/**
 * -----------------------------------------------------------------------------
 * A wrapper around the RadioButton component to render a radio button
 * component providing additional styling abstraction
 */
export function RadioOption<T>(props: IRadioButton<T>) {
  const { value, selectedValue } = props;
  const isSelected = selectedValue === value;

  return (
    <RadioButton
      alignItems="center"
      backgroundColor={isSelected ? 'cardSecondaryBackground' : 'transparent'}
      borderColor="textTitle"
      borderEndColor="danger"
      borderRadius="l"
      borderWidth={0.45}
      flex={1}
      height={40}
      justifyContent="center"
      {...props}
    />
  );
}

interface IRadioOption<TValue> {
  labelTx: TxKeyPath;
  value: TValue;
}

interface IRadioOptionsToggleProps<T> extends BoxPropsType {
  defaultValue?: T;
  option1: IRadioOption<T>;
  option2: IRadioOption<T>;
  onValueChange: (value: T) => void;
}

/**
 * This switch between two values on the UI.
 */
export function RadioOptionsToggle<T>({
  defaultValue,
  option1,
  option2,
  onValueChange,
  ...boxProps
}: IRadioOptionsToggleProps<T>) {
  const [activeView, setActiveView] = useState<T>(defaultValue ?? option1.value);

  const handleSwitchActiveView = (newValue: T) => {
    setActiveView(newValue);
    onValueChange(newValue);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <Box flexDirection="row" gap="l" justifyContent="flex-start" my="m" px="m" {...boxProps}>
      <RadioOption
        labelTx={option1.labelTx}
        onValueChange={handleSwitchActiveView}
        px="s"
        selectedValue={activeView}
        value={option1.value}
      />

      <RadioOption
        labelTx={option2.labelTx}
        onValueChange={handleSwitchActiveView}
        px="s"
        py="s"
        selectedValue={activeView}
        value={option2.value}
      />
    </Box>
  );
}
