import { MutableRefObject, useCallback, useLayoutEffect, useRef, useState } from 'react';
import { ViewStyle, View, I18nManager } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

import { TxKeyPath } from '~/i18n';
import { Box, BoxPropsType } from '~/theme';

import { TabbedButtonItem } from './TabbedButtonItemWithRef';

/**
 * Passed to the animated style to force it behind the tab buttons and act as
 * as background indicator.
 */
const tabIndicatorStyles: ViewStyle = {
  height: '100%',
  position: 'absolute',
};

interface IBaseTabButtonItem {
  /**
   * Note, the `id=any` is usually an Enum only known by the caller.
   */
  id: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  /**
   * The label to show on the tab button.
   */
  label: TxKeyPath;
}

interface ITabbedButtonGroupProps<T extends IBaseTabButtonItem> {
  /**
   * The theme box props to pass to the outer container box element.
   */
  containerBoxProps?: BoxPropsType;
  /**
   * The theme box props to pass to the indicator to style it sizing & color.
   */
  indicatorBoxProps?: BoxPropsType;
  /**
   * The theme box props to pass to each individual tab button item.
   */
  itemBoxProps?: BoxPropsType;
  /**
   * Callback triggered when the caller switches tabs.
   */
  onTabChange: (tab: T) => void;
  /**
   * The currently selected tab item
   */
  selectedTab: T;
  /**
   * The first tab element
   */
  tab1: T;
  /**
   * The second tab element
   */
  tab2: T;
}

/**
 * -----------------------------------------------------------------------------
 * This renders a tabbed button group that switches between two tabs.
 * TODO: Recalculate the layout when the nav screen orientation changes.
 * @deprecated - This is deprecated until reanimated v3 is stable with new arch.
 */
export function TabbedButtonGroup<T extends IBaseTabButtonItem>({
  containerBoxProps,
  indicatorBoxProps,
  itemBoxProps,
  onTabChange,
  selectedTab,
  tab1,
  tab2,
}: ITabbedButtonGroupProps<T>) {
  const tabB1Ref = useRef<View | null>(null);
  const tabB2Ref = useRef<View | null>(null);
  const activeTabWidth = useRef<number>(0);
  const { isRTL } = I18nManager;

  /**
   * To track whether this is the first
   */
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  /**
   * Animated value to determine the `offset` of the active indicator.
   */
  const positionXSharedValue = useSharedValue(selectedTab.id === tab1.id ? 1020 : 200);

  /**
   * The style to be animated when the value of `positionXSharedValue` changes.
   */
  const animatedStyles = useAnimatedStyle(
    () => ({
      useNativeDriver: true,
      transform: [{ translateX: positionXSharedValue.value }],
    }),
    [isInitialLoad, selectedTab.id, positionXSharedValue.value]
  );

  /**
   * This is used to calculate the width of the target element based on it's
   * attached ref. Since `measure()` is async, we need to return a promise.
   */
  const getTabWidth = (tabRef: MutableRefObject<View | null>) =>
    new Promise<number>((resolve) => {
      if (tabRef?.current) {
        tabRef.current.measure((_x, _y, width) => {
          resolve(width);
        });
      }
    });

  useLayoutEffect(() => {
    const updateTabWidth = async () => {
      if (tabB1Ref.current) {
        const tabB1Width = await getTabWidth(tabB1Ref);
        activeTabWidth.current = tabB1Width;

        /**
         * If this is the initial load, we need to set the offset to the active
         * tab and update the app not to run this again.
         */
        if (isInitialLoad) {
          setIsInitialLoad(false);

          const toWidth = isRTL ? -tabB1Width : tabB1Width;

          /**
           * If the selected tab is the first tab, just keep the position to the
           * beginning of the container (0), or at the end of tab1 (its width).
           */
          positionXSharedValue.value = withSpring(selectedTab.id === tab1.id ? 0 : toWidth, {
            damping: 16,
          });
        }
      }
    };

    /**
     * We need to wait for the about 300 milliconds after the layout has updated
     * before we animate the button. Fixes bug where the button would not animate
     * on the initial load.
     */
    const timer = setTimeout(() => {
      updateTabWidth();
    }, 300);

    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, isInitialLoad]);

  useFocusEffect(
    useCallback(() => {
      const updateTabWidth = async () => {
        if (tabB1Ref.current && tabB2Ref.current) {
          const tabB1Width = await getTabWidth(tabB1Ref);
          const tabB2Width = await getTabWidth(tabB2Ref);

          const isFirstTabActive = selectedTab.id === tab1.id;

          activeTabWidth.current = isFirstTabActive ? tabB1Width : tabB2Width;

          const toWidth = isRTL ? -tabB1Width : tabB1Width;

          positionXSharedValue.value = withSpring(isFirstTabActive ? 0 : toWidth, {
            damping: 16,
          });
        }
      };

      updateTabWidth();

      return () => {
        if (selectedTab.id === tab2.id) positionXSharedValue.value = 0;
        else positionXSharedValue.value = activeTabWidth.current;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTab])
  );

  /**
   * Called when the user taps on a tab button to switch between the tabs.
   */
  const handleSwitchToTab = (tabId: number) => {
    positionXSharedValue.value = withSpring(positionXSharedValue.value, {
      damping: 16,
    });

    onTabChange(tabId === 0 ? tab1 : tab2);
  };

  return (
    <Box
      bg="inputBackground"
      borderColor="inputBorder"
      borderRadius="xs"
      borderWidth={1}
      mb="s"
      mt="l"
      p="xs"
      {...containerBoxProps}
    >
      <Box>
        <Animated.View
          style={[tabIndicatorStyles, animatedStyles, { width: activeTabWidth.current }]}
        >
          <Box
            bg="buttonPrimaryBackground"
            borderRadius="xxs"
            elevation={1}
            flex={1}
            shadowColor="shadowColor"
            shadowOffset={{ width: 2, height: 2 }}
            shadowOpacity={0.75}
            shadowRadius={5}
            {...indicatorBoxProps}
          />
        </Animated.View>

        <Box flexDirection="row">
          <TabbedButtonItem
            ref={tabB1Ref}
            index={0}
            isActive={selectedTab.id === tab1.id}
            itemBoxProps={itemBoxProps}
            label={tab1.label}
            onSwitchToTab={handleSwitchToTab}
          />

          <TabbedButtonItem
            ref={tabB2Ref}
            index={1}
            isActive={selectedTab.id === tab2.id}
            itemBoxProps={itemBoxProps}
            label={tab2.label}
            onSwitchToTab={handleSwitchToTab}
          />
        </Box>
      </Box>
    </Box>
  );
}
