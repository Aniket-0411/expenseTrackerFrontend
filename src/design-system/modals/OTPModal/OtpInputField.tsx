import { useRef } from 'react';
import {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInput as RNTextInput,
  TextStyle,
} from 'react-native';

import { Box } from '~/theme';

import { TextInput } from '../../form';

const inputStyle: TextStyle = {
  flex: 1,
  fontSize: 18,
  fontWeight: '400',
};

interface IOtpInputFieldProps {
  isEnabled: boolean;
  otpValue: string;
  valueLength: number;
  onInputChange: (value: string) => void;
}

/**
 * -----------------------------------------------------------------------------
 * This renders a single box input field item that captures an individual digit
 * of the OTP.
 */
export function OtpInputFieldItem({
  isEnabled,
  onInputChange,
  otpValue,
  valueLength,
}: IOtpInputFieldProps) {
  const inputRefs = useRef<Array<RNTextInput | null>>([]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = otpValue.split('');
    newOtp[index] = value;
    onInputChange(newOtp.join(''));

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const refCallback = (ref: RNTextInput | null, i: number) => {
    inputRefs.current[i] = ref;
  };

  return (
    <Box flexDirection="row" gap="s" justifyContent="center">
      {Array.from(Array(valueLength).keys()).map((digit, index) => (
        <TextInput
          key={digit}
          ref={(ref) => refCallback(ref, index)}
          boxPropsInputContainer={{
            borderWidth: 1.5,
            p: 'none',
            mx: 'none',
            my: 'none',
            ps: 'none',
            pe: 'none',
            width: 42,
            height: 42,
          }}
          editable={isEnabled}
          hasClearButton={false}
          keyboardType="numeric"
          maxLength={1}
          name={`otp-key-${index}`}
          onChangeText={(value) => handleOtpChange(value, index)}
          onKeyPress={(event) => handleKeyPress(event, index)}
          style={inputStyle}
          textAlign="center"
          value={otpValue[index]}
        />
      ))}
    </Box>
  );
}
