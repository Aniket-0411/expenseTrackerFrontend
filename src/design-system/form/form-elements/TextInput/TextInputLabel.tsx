import { Box, Text, TextPropsType } from '~/theme';

import { TxKeyPath, TTxOptions, TLocalizedText } from '~/i18n';

interface ITextInputLabelProps {
  color: TextPropsType['color'];
  isFocused: boolean;
  label?: TxKeyPath;
  labelTxOptions?: TTxOptions;
  labelLocalized?: TLocalizedText;
  labelPostFix: TxKeyPath | undefined;
  labelPostFixTxOptions: TTxOptions | undefined;
}

/**
 * -----------------------------------------------------------------------------
 * This renders a static label above the input fields.
 * - See also `FloatingLabel` for a floating label.
 */
export function TextInputLabel({
  color,
  isFocused,
  label,
  labelTxOptions,
  labelLocalized,
  labelPostFix,
  labelPostFixTxOptions,
}: ITextInputLabelProps) {
  return (
    <Box flexDirection="row" gap="s" pb="xs" pt="xs">
      <Text
        color={color}
        fontFamily={isFocused ? 'fontPrimaryRegular' : 'fontPrimaryLight'}
        tx={label}
        txLocalized={labelLocalized}
        txOptions={labelTxOptions}
        variant="formLabel"
      />

      {labelPostFix ? (
        <Text
          fontFamily={isFocused ? 'fontPrimaryRegular' : 'fontPrimaryLight'}
          fontStyle="italic"
          ms="s"
          opacity={0.85}
          tx={labelPostFix}
          txOptions={labelPostFixTxOptions}
          variant="formLabel"
        />
      ) : null}
    </Box>
  );
}
