import { ActivityIndicator, StyleSheet } from 'react-native';

import { Box, Text } from '~/theme';

import { IInputDropdownElementProps } from '../../form.types';

const styles = StyleSheet.create({
  flexOne: { flex: 1 },
  loader: { marginTop: 5 },
});

type TLoadingDropDownItemsProps<T> = Pick<
  IInputDropdownElementProps<T>,
  'boxProps' | 'label' | 'labelTxOptions'
>;

/**
 * -----------------------------------------------------------------------------
 * Display a loading indicator while the dropdown list items are being fetched.
 */
export function LoadingDropDownItems<T>({
  boxProps,
  label,
  labelTxOptions,
}: TLoadingDropDownItemsProps<T>) {
  return (
    <Box paddingBottom="l" {...boxProps}>
      <Text fontSize={14} tx={label} txOptions={labelTxOptions} variant="formLabel" />

      <Box
        alignItems="center"
        borderBottomColor="loaderBorder"
        borderBottomWidth={1}
        flexDirection="row"
        justifyContent="space-between"
        paddingTop="s"
      >
        <Text
          color="loaderBorder"
          paddingBottom="m"
          style={styles.flexOne}
          tx="forms.loading.loadingOptions"
          variant="formLabel"
        />

        <Box paddingBottom="m">
          <ActivityIndicator size="small" style={styles.loader} />
        </Box>
      </Box>
    </Box>
  );
}
