// TODO: Remove this once we add Box props

import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '~/theme';

interface IStatusButtonProps {
  isSelected: boolean;
  onStatusSelected: () => void;
  statusLabel: string;
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    borderRadius: 28,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 17,
  },
  buttonSelectedStyle: {
    backgroundColor: colors.palette.neutral900,
  },
  buttonSelectedTextStyle: {
    color: colors.palette.neutral100,
  },
  buttonTextStyle: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

/**
 * -----------------------------------------------------------------------------
 * StatusButton component a reusable button for rendering statuses of requested amenities
 */
export function StatusButton({ isSelected, onStatusSelected, statusLabel }: IStatusButtonProps) {
  return (
    <TouchableOpacity
      onPress={onStatusSelected}
      style={[styles.buttonContainer, isSelected ? styles.buttonSelectedStyle : null]}
    >
      <Text style={[styles.buttonTextStyle, isSelected ? styles.buttonSelectedTextStyle : null]}>
        {statusLabel}
      </Text>
    </TouchableOpacity>
  );
}
