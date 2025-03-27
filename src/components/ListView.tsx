import { forwardRef, ForwardedRef, PropsWithoutRef, RefObject, ReactElement } from 'react';
import { FlatList } from 'react-native';
import { FlashList, FlashListProps } from '@shopify/flash-list';

import { isRTL } from '~/i18n';

export type TListViewRef<T> = FlashList<T> | FlatList<T>;

export type TListViewProps<T> = PropsWithoutRef<FlashListProps<T>>;

/**
 * -----------------------------------------------------------------------------
 * This is a Higher Order Component meant to ease the pain of using @shopify/flash-list
 * when there is a chance that a user would have their device language set to an
 * RTL language like Arabic or Punjabi. This component will use react-native's
 * FlatList if the user's language is RTL or FlashList if the user's language is LTR.
 *
 * Because FlashList's props are a superset of FlatList's, you must pass estimatedItemSize
 * to this component if you want to use it.
 *
 * This is a temporary workaround until the FlashList component supports RTL at
 * which point this component can be removed and we will default to using FlashList everywhere.
 * @see {@link https://github.com/Shopify/flash-list/issues/544|RTL Bug Android}
 * @see {@link https://github.com/Shopify/flash-list/issues/840|Flashlist Not Support RTL}
 * @param {FlashListProps | FlatListProps} props - The props for the `ListView` component.
 * @param {React.RefObject<TListViewRef>} forwardRef - An optional forwarded ref.
 */
const ListViewComponent = forwardRef(
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  <T,>(props: TListViewProps<T>, ref: ForwardedRef<TListViewRef<T>>) => {
    const ListComponentWrapper = isRTL ? FlatList : FlashList;

    return <ListComponentWrapper {...props} ref={ref} />;
  }
);

/**
 * Adds the name to be displayed in React Dev Tools since this is an anonymous
 * arrow component.
 */
ListViewComponent.displayName = 'ListView';

/**
 * -----------------------------------------------------------------------------
 * A wrapper around the FlashList or FlatList component that will automatically
 * use the correct orientation based on the user's language RTL layout.
 */
export const ListView = ListViewComponent as <T>(
  props: TListViewProps<T> & {
    ref?: RefObject<TListViewRef<T>>;
  }
) => ReactElement;
