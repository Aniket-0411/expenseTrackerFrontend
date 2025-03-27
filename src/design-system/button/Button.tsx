import { ActivityIndicator, TouchableNativeFeedback } from 'react-native';

import { isAndroid } from '~/utils';
import { Box, Text } from '~/theme';

import { boxPresets, textPresets } from './button.presets';
import { ButtonProps } from './button.props';
import { ButtonContainer } from './ButtonContainer';
import { Pressable } from './Pressable';

/**
 * -----------------------------------------------------------------------------
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  const {
    actionIconEnd,
    actionIconStart,
    boxStyle: boxStyleOverride,
    preset = 'primary',
    children,
    isDisabled,
    isLoading,
    onPress,
    testID,
    text,
    textStyle: textStyleOverride,
    txLocalized,
    tx,
    txLoading,
    ...rest
  } = props;
  const styleCondition = isDisabled || isLoading ? 'disabled' : preset;
  const isButtonDisabled = isDisabled || isLoading;

  const textStyle = textPresets[styleCondition] || textPresets.primary;
  const textStyles = { ...(textStyle || {}), ...(textStyleOverride ?? {}) };

  const boxStyle = boxPresets[styleCondition] || textPresets.primary;
  const boxStyles = { ...(boxStyle || {}), ...(boxStyleOverride ?? {}) };

  const content = children || (
    <Text letterSpacing={1} text={text} tx={tx} txLocalized={txLocalized} {...textStyles} />
  );

  const child = isLoading ? (
    <Box flexDirection="row" gap="s" py="xs">
      <ActivityIndicator color="white" />

      {txLoading ? <Text tx={txLoading} {...textStyles} /> : null}
    </Box>
  ) : (
    content
  );

  return isAndroid ? (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(preset === 'secondary' ? '#fff3' : '#0003', false)}
      disabled={isButtonDisabled}
      onPress={onPress}
      testID={testID}
    >
      <ButtonContainer isDisabled={isDisabled} {...boxStyles} {...rest}>
        {actionIconStart}
        {child}
        {actionIconEnd}
      </ButtonContainer>
    </TouchableNativeFeedback>
  ) : (
    <Pressable disabled={isButtonDisabled} onPress={onPress} testID={testID}>
      <ButtonContainer isDisabled={isDisabled} {...boxStyles} {...rest}>
        {actionIconStart}
        {child}
        {actionIconEnd}
      </ButtonContainer>
    </Pressable>
  );
}
