import { Button } from '../../../button';

interface ICancelButtonIOSProps {
  // isDarkModeEnabled: boolean;
  // label: string;
  onPress(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Custom cancel button matching the general look and feel of the app's buttons.
 */
export function CancelButtonIOS({
  // isDarkModeEnabled,
  // label,
  onPress,
}: ICancelButtonIOSProps) {
  const handlePress = () => {
    onPress();
  };

  return (
    <Button
      // borderWidth={0}
      // marginHorizontal="xs"
      // marginVertical="s"
      // variant="secondary"
      onPress={handlePress}
      tx="common.cancel"
    />
  );
}
