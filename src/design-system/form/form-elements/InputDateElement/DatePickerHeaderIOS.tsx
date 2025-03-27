import { TxKeyPath } from '~/i18n';
import { Box, Text } from '~/theme';

/**
 * -----------------------------------------------------------------------------
 * Custom header that is rendered on top of the date picker on iOS.
 */
export function DatePickerHeaderIOS({ label }: { label: string }) {
  const labelTx = label as TxKeyPath;

  return (
    <Box
      borderBottomWidth={1}
      borderColor="subTableBorder"
      pb="s"
      pointerEvents="none"
      pt="l"
      px="l"
    >
      <Text
        fontSize={18}
        mb="m"
        tx={labelTx || 'forms.labels.pickerHeader'}
        variant="modalHeader"
      />

      <Text
        color="textTitle"
        fontFamily="fontPrimaryLight"
        lineHeight={24}
        tx="forms.labels.pickDate"
      />
    </Box>
  );
}
