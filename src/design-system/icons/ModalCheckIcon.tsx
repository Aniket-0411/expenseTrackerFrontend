import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { colors } from '~/theme';

const styles = StyleSheet.create({
  checkMarkContainer: {
    backgroundColor: colors.palette.secondary,
    borderRadius: 100,
    justifyContent: 'center',
    marginTop: 40,
    padding: 10,
  },
});
interface IModalCheckIcon {
  fill?: string;
  height?: number;
  width?: number;
  stroke?: string;
}

/**
 * -----------------------------------------------------------------------------
 * A checkmark icon used in modals.
 */
export function ModalCheckIcon({
  // fill,
  // height = 21,
  // stroke,
  // width = 19,
  ...props
}: IModalCheckIcon) {
  return (
    <View style={styles.checkMarkContainer}>
      <Svg fill="none" height={21} width={19} {...props}>
        <Path
          d="M4.361 20.1c0-.225-.025-.325-.125-.325l-.575.275c0-.125-.075-.2-.2-.25l-.2-.025c-.175 0-.25.025-.5.175-.075-.15-.175-.325-.25-.475-.65-1.25-1.325-3.125-1.625-3.95-.15-.425-.3-1.3-.475-2.625.2.125.35.175.425.175.1 0 .225-.175.325-.525.05.075.15.1.275.1.075 0 .175-.025.225-.1l.4-.6.45.15h.025c.05 0 .125-.075.25-.15s.225-.125.3-.125l.075.025c.4.2.675.55.8 1.1.3 1.275.575 1.9.9 1.9.275 0 .65-.325 1.05-.95s.8-1.475 1.25-2.5c.025.2.05.3.1.3.15 0 .525-.875 1.45-2.35 1.375-2.225 4.775-6.5 5.65-7.1.65-.45 1.15-.875 1.5-1.25-.05.25-.1.425-.1.5 0 .075.05.1.1.1l.7-.35v.1c0 .125.025.2.1.2.1 0 .5-.4.55-.55l-.05.35.85-.5-.2.45c.25-.175.45-.275.575-.275.125 0 .2.2.2.325 0 .2-.175.475-.45.825-.3.4-1.05 1.175-3.3 3.75-.975 1.1-5.3 6.975-6.125 8.375l-1.55 2.625c-.675 1.125-1.1 1.85-1.325 2.125-.225.275-.5.55-.825.8l-.225-.125-.2.125-.225.25Z"
          fill="#fff"
        />
      </Svg>
    </View>
  );
}
