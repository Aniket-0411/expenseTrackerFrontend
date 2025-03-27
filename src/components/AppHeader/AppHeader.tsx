// TODO: Remove this once font sizes are added at font level
/* eslint-disable react-native/no-inline-styles */

import { StyleSheet, Text, TouchableOpacity, View, StyleProp, ViewStyle } from 'react-native';

import { CaretLeftIcon } from '~/design-system';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 62,
  },

  title: {
    flex: 1,
    fontSize: 18,
    letterSpacing: 0.9,
    textAlign: 'center',
  },
});

export interface IAppHeaderProps {
  /**
   * customStyles for overriding the default styles of the component when.
   */
  customStyles?: StyleProp<ViewStyle>;
  /**
   * The title of the amenity header component. this will appear in the center
   *  of the header component
   */
  title: string;
  /**
   * onPress the handler function to be called when the icon is pressed
   */
  onPress: () => void;
}

/*
 * -----------------------------------------------------------------------------
 *  A AmenityHeader component that displays a header with an icon and a optional
 * title.
 * */
export function AppHeader({ title, customStyles, onPress }: IAppHeaderProps) {
  return (
    <View style={[styles.container, customStyles]}>
      <TouchableOpacity onPress={onPress}>
        <CaretLeftIcon />
      </TouchableOpacity>
      <Text style={[styles.title, { fontWeight: '600' }]}>{title}</Text>
    </View>
  );
}
