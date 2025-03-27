import { ErrorInfo } from 'react';
import { ScrollView, TextStyle, View, ViewStyle } from 'react-native';

import { Button, Icon, Screen, Text } from '~/components';
import { colors, spacing } from '~/theme';

const $contentContainer: ViewStyle = {
  alignItems: 'center',
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.xl,
  flex: 1,
};

const $topSection: ViewStyle = {
  flex: 1,
  alignItems: 'center',
};

const $heading: TextStyle = {
  color: colors.error,
  marginBottom: spacing.md,
};

const $errorSection: ViewStyle = {
  flex: 2,
  backgroundColor: colors.separator,
  marginVertical: spacing.md,
  borderRadius: 6,
};

const $errorSectionContentContainer: ViewStyle = {
  padding: spacing.md,
};

const $errorContent: TextStyle = {
  color: colors.error,
};

const $errorBacktrace: TextStyle = {
  marginTop: spacing.md,
  color: colors.textDim,
};

const $resetButton: ViewStyle = {
  backgroundColor: colors.error,
  paddingHorizontal: spacing.xxl,
};

export interface IErrorDetailsProps {
  readonly error: Error;
  readonly errorInfo: ErrorInfo | null;
  onReset(): void;
}

/**
 * -----------------------------------------------------------------------------
 * This renders the error details component for an error boundary.
 */
export function ErrorDetails({ error, errorInfo, onReset }: IErrorDetailsProps) {
  return (
    <Screen
      contentContainerStyle={$contentContainer}
      preset="fixed"
      safeAreaEdges={['top', 'bottom']}
    >
      <View style={$topSection}>
        <Icon icon="ladybug" size={64} />

        <Text preset="subheading" style={$heading} tx="errorScreen.title" />

        <Text tx="errorScreen.friendlySubtitle" />
      </View>

      <ScrollView contentContainerStyle={$errorSectionContentContainer} style={$errorSection}>
        <Text
          style={$errorContent}
          text={`${error}`.trim()}
          // weight="bold"
        />

        <Text
          selectable
          style={$errorBacktrace}
          text={`${errorInfo?.componentStack ?? ''}`.trim()}
        />
      </ScrollView>

      <Button onPress={onReset} style={$resetButton} tx="errorScreen.reset" variant="primary" />
    </Screen>
  );
}
