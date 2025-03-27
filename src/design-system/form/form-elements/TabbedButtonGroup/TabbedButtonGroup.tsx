import { useState } from 'react';

import { TxKeyPath } from '~/i18n';
import { Box, BoxPropsType } from '~/theme';

import { TabbedButtonItem } from './TabbedButtonItem';

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
 */
export function TabbedButtonGroup<T extends IBaseTabButtonItem>({
  containerBoxProps,
  itemBoxProps,
  onTabChange,
  selectedTab,
  tab1,
  tab2,
}: ITabbedButtonGroupProps<T>) {
  /**
   * To track whether this is the first
   */
  const [activeTab, setActiveTab] = useState(selectedTab);

  /**
   * Called when the user taps on a tab button to switch between the tabs.
   */
  const handleSwitchToTab = (tabId: number) => {
    const newActiveTab = tabId === 0 ? tab1 : tab2;

    setActiveTab(newActiveTab);
    onTabChange(newActiveTab);
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
        <Box flexDirection="row" gap="xs" px="xxs">
          <TabbedButtonItem
            index={0}
            isActive={activeTab.id === tab1.id}
            itemBoxProps={itemBoxProps}
            label={tab1.label}
            onSwitchToTab={handleSwitchToTab}
          />

          <TabbedButtonItem
            index={1}
            isActive={activeTab.id === tab2.id}
            itemBoxProps={itemBoxProps}
            label={tab2.label}
            onSwitchToTab={handleSwitchToTab}
          />
        </Box>
      </Box>
    </Box>
  );
}
