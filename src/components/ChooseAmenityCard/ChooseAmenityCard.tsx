/* eslint-disable react-native/no-inline-styles */

import { StyleSheet, Text, View } from 'react-native';

import { colors } from '~/theme';
import { StorageIcon, GymIcon, AuditoriumIcon, SwimmingPoolIcon } from '~/design-system';
import { RadioButton } from '../RadioButton';

const styles = StyleSheet.create({
  amenityContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },

  container: {
    alignItems: 'center',
    backgroundColor: colors.palette.neutral100,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  title: {
    fontSize: 14,
    letterSpacing: 0.42,
  },
});
export interface ChooseAmenityCardProps {
  /** *
   * amenityType the type of the amenity to be chosen
   */
  amenityType: string;
  /**
   * icon the icon of the amenity
   */
  icon: string;

  /**
   * setAmenity the function to set the chosen amenity
   */

  /**
   * isSelect the boolean to check if the amenity is selected
   */
  isSelected: boolean;
  onSelect: () => void;
}

export interface IChooseAmenityIconsProps {
  [key: string]: JSX.Element;
  auditorium: JSX.Element;
  gym: JSX.Element;
  pool: JSX.Element;
  storage: JSX.Element;
}

/**
 * ------------------------------------------------------------------------------
 * ChooseAmenityCard component that renders a card
 */
export function ChooseAmenityCard({
  amenityType,
  icon,
  isSelected,
  onSelect,
}: ChooseAmenityCardProps) {
  const chooseAmenityIcons: IChooseAmenityIconsProps = {
    auditorium: <AuditoriumIcon />,
    pool: <SwimmingPoolIcon />,
    storage: <StorageIcon />,
    gym: <GymIcon />,
  };

  return (
    <View style={styles.container}>
      <View style={styles.amenityContainer}>
        {chooseAmenityIcons[icon as keyof IChooseAmenityIconsProps]}
        <Text style={[styles.title, { fontWeight: '600' }]}>{amenityType}</Text>
      </View>
      <View>
        <RadioButton
          customStyles={{ marginBottom: 0, width: 0 }}
          onValueChange={onSelect}
          selectedValue={isSelected ? amenityType : ''}
          value={amenityType}
        />
      </View>
    </View>
  );
}
