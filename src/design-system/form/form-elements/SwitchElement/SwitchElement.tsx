import { SwitchProps } from 'react-native';

import { TxKeyPath } from '~/i18n';
import { Box, BoxPropsType, Text } from '~/theme';

import { Switch } from './Switch';

interface ISwitchElementProps extends SwitchProps {
  /**
   * Styles to be passed down to the box wrapper surrounding the base inner
   * most switch child component (the actual switch).
   */
  boxStyles?: BoxPropsType;
  /**
   * Props to be passed down to the box wrapper surrounding this Switch element.
   */
  containerBoxStyles?: BoxPropsType;
  onValueChange: (value: boolean) => void;
  subtitle?: TxKeyPath;
  title: TxKeyPath;
  value: boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Underlying switch component that provides a wrapper around the RN switch
 * adding additional text elements and submit titles if provided.
 *
 * - Exposes the box wrapper to allow for more customization on container styles.
 * - On change, passes back a callback that updates the switch and the current
 * state value of the switch.
 *
 * - See also `@components/form/Switch`
 */
export function SwitchElement({
  boxStyles,
  containerBoxStyles,
  onValueChange,
  subtitle,
  title,
  value,
  ...rest
}: ISwitchElementProps) {
  const handleSwitchToggle = (state: boolean) => {
    /**
     * Pass back a function that updates state as the first argument,
     * and the updated state as the second argument.
     * */
    // onValueChange(() => state, state);
    onValueChange(state);
  };

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      paddingVertical="m"
      {...containerBoxStyles}
    >
      <Box flex={1} flexDirection="column" justifyContent="center" paddingEnd="s">
        <Text tx={title} variant="formLabel" />

        {subtitle ? <Text paddingTop="xs" tx={subtitle} variant="infoText" /> : null}
      </Box>

      <Switch
        {...rest}
        boxStyles={boxStyles}
        isEnabled={value}
        onValueChange={handleSwitchToggle}
        value={value}
      />
    </Box>
  );
}
