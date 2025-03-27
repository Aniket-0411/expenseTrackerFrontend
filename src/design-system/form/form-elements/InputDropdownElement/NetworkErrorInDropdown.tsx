import { StyleSheet, TouchableOpacity } from 'react-native';

import { Box, Text } from '~/theme';

import { IInputDropdownElementProps } from '../../form.types';
import { RefreshCloseIcon } from '~/design-system/icons';

const styles = StyleSheet.create({
  flexOne: { flex: 1 },
});

type TNetworkErrorInDropdownProps<T> = Pick<
  IInputDropdownElementProps<T>,
  'boxProps' | 'handleOnFetchRetry' | 'error' | 'label' | 'labelTxOptions'
>;

/**
 * -----------------------------------------------------------------------------
 * Displays a network error message in the dropdown when the list items to be
 * rendered could not be fetched.
 */
export function NetworkErrorInDropdown<T>({
  boxProps,
  handleOnFetchRetry,
  label,
  labelTxOptions,
  error,
}: TNetworkErrorInDropdownProps<T>) {
  const handleOnRetry = () => {
    if (handleOnFetchRetry) {
      handleOnFetchRetry();
    }
  };

  return (
    <TouchableOpacity onPress={handleOnRetry}>
      <Box pb="l" {...boxProps}>
        <Box
          alignItems="center"
          borderBottomColor="danger"
          borderBottomWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          pt="s"
        >
          <Text
            color="danger"
            pb="m"
            pt="s"
            style={styles.flexOne}
            tx={label}
            txOptions={labelTxOptions}
            variant="formLabel"
          />

          <RefreshCloseIcon
            boxProps={{
              ps: 'xl',
            }}
            onPress={handleOnRetry}
            opacity={0.85}
            size={16}
          />
        </Box>

        <Box py="s">
          <Text
            color="danger"
            fontFamily="fontPrimaryLight"
            fontSize={12}
            tx="forms.errors.dropdownNetworkError"
            txOptions={{ error }}
          />
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
