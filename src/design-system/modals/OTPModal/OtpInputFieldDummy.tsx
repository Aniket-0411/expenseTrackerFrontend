import { Box } from '~/theme';

import { RectLoader } from '../../loaders';

interface IOtpInputFieldDummyProps {
  otpLength: number;
}

/**
 * -----------------------------------------------------------------------------
 * This is shown as a replacement when the OTP is loading, it created to
 * mimic the look of the OTP input field so that we don't have a layout jump.
 */
export function OtpInputFieldDummy({ otpLength }: IOtpInputFieldDummyProps) {
  return (
    <Box flexDirection="row" gap="s" justifyContent="center">
      {Array.from(Array(otpLength).keys()).map((digit) => (
        <Box
          key={digit}
          alignItems="center"
          borderColor="inputBorderDisabled"
          borderRadius="xs"
          borderWidth={1}
          height={42}
          justifyContent="center"
          width={42}
        >
          <RectLoader
            // backgroundColor="#ddd"
            backgroundColor="modalBorder"
            borderRadius={8}
            // foregroundColor="#fff"
            foregroundColor="mainBackground"
            opacity={0.35}
            rectHeight={39}
            rectWidth={39}
            speed={1.4}
          />
        </Box>
      ))}
    </Box>
  );
}
