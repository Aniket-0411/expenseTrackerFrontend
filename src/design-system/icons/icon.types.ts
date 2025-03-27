import { StyleProp, ViewStyle } from 'react-native';

import { BoxPropsType } from '~/theme';

export type TIconBaseProps = {
  /**
   * The color of the icon. You can get this from `useThemeColors` for `theme`
   * compatibility between the `light` and `dark` mode.
   *
   * @default `'#111111'` // `actionIcon === grayVanta`
   *
   * ```tsx
   * import { useThemeColors } from '@theme';
   * const { actionIcon } = useThemeColors();
   * <Icon color={actionIcon} />
   * ```
   */
  color?: string;
  isFocused?: boolean;
  /**
   * Whether the icon should be a thin line style/ stroke outline
   */
  light?: boolean;
  /**
   * The name of the icon to use from the FontAwesome5Pro library.
   * For Android specific icons, use `nameAndroid`.
   *
   * - Default icon lib - `react-native-vector-icons/FontAwesome5Pro`.
   * - Github - https://github.com/oblador/react-native-vector-icons
   * - Icon Explorer app - https://github.com/oblador/react-native-vector-icons/tree/master/Examples/IconExplorer
   *
   * @relates `type` prop
   */
  name: string;
  /**
   * The name of the icon to be used for Android specific look.
   */
  nameAndroid?: string;
  /**
   * To be used for loading specific icon lib from the library.
   * - See bundled set https://github.com/oblador/react-native-vector-icons#bundled-icon-sets
   * - Browse categories https://oblador.github.io/react-native-vector-icons/
   *
   * Other possible options to look into if an icon is not found:
   * | 'Entypo'
   * | 'Foundation'
   * | 'MaterialIcons'
   * | 'MaterialCommunityIcons'
   * | 'Zocial'
   * | 'Octicons'
   * | 'SimpleLineIcons'
   * | 'FontAwesome5Pro'
   * | 'Fontisto'
   * | 'FoundationIcons'
   * | 'Ionicons'
   * | 'MaterialCommunityIcons'
   * | 'MaterialIcons'
   * | 'Octicons'
   * | 'SimpleLineIcons'
   * | 'Zocial'
   * | 'MaterialIcons';
   *
   * TODO: Add support for custom icons libs based on passed type.
   */
  type?: 'AntDesignIcon' | 'EvilIcon' | 'FAIcon' | 'IonIcon' | 'FeatherIcon';
  opacity?: number;
  size?: number;
  /**
   * Whether the icon should be a filled with color instead of outline.
   */
  solid?: boolean;
  /**
   * Passed to the box container of the icon, to bypass the theme `Box` props.
   * Please use this sparingly and prefer the `Box` props as it breaks the UI
   * responsively styled UI.
   *
   * At the moment, styling the underlying icon directly is not supported and
   * discourage. For that, use the exposed props instead.
   */
  style?: StyleProp<ViewStyle>;
} & BoxPropsType;

export type TIconProps = {
  onPress?: () => void;
} & TIconBaseProps;
