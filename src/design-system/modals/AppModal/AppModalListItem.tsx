import { ReactNode } from 'react';

import { TxKeyPath, TTextLocalized } from '~/i18n';
import { Box, BoxPropsType, Text } from '~/theme';

import { Pressable } from '../../button';
import { CheckBoxIndicator, RadioIndicator } from '../../form';

export interface IBaseAppModalListIteItem {
  id: string | number;
  label?: string | TTextLocalized;
  txLabel?: TxKeyPath;
}

interface IAppModalListItemRadioProps<T extends IBaseAppModalListIteItem = IBaseAppModalListIteItem>
  extends BoxPropsType {
  /**
   * The whole item to be passed back to the modal root.
   */
  item: T;
  /**
   * The leading component/icon or svg to show before the component.
   */
  leadingElement?: ReactNode;
  /**
   * Callback called when the item is pressed.
   */
  onPress: (item: T) => void;
  /**
   * Whether the item is selected or not.
   */
  isSelected: boolean;
  /**
   * The type of indicator to show besides the input label.
   * - If the modal takes just a single item, then the type should be `RADIO`,
   * - If it's a multi-select, then you should use a `CHECK`.
   * @default 'RADIO'
   */
  type?: 'CHECKBOX' | 'RADIO';
}

/**
 * -----------------------------------------------------------------------------
 * This renders a single item in the modal picker which accepts only a single
 * choice at a time. Selection of the item should immediately close the modal.
 */
export function AppModalListItem<T extends IBaseAppModalListIteItem>({
  item,
  leadingElement,
  onPress,
  isSelected,
  type = 'RADIO',
  ...rest
}: IAppModalListItemRadioProps<T>) {
  const handleOnChangeItem = () => {
    onPress(item);
  };

  return (
    <Pressable
      accessibilityRole={type === 'RADIO' ? 'radio' : 'checkbox'}
      onPress={handleOnChangeItem}
    >
      <Box
        bg={isSelected ? 'inputBackgroundFocused' : 'mainBackground'}
        borderBottomColor="modalBorder"
        borderBottomWidth={0.4}
        flexDirection="row"
        gap="m"
        px="m"
        py="s"
        {...rest}
      >
        {leadingElement || null}

        <Box flexGrow={1} justifyContent="center">
          {item.txLabel ? (
            <Text
              color={isSelected ? 'inputTextFocused' : 'textTitle'}
              fontFamily={isSelected ? 'fontPrimaryMedium' : 'fontPrimaryRegular'}
              opacity={isSelected ? 1 : 0.85}
              textAlign="left"
              tx={item.txLabel}
              variant="formLabel"
            />
          ) : (
            <Text
              color={isSelected ? 'inputTextFocused' : 'textTitle'}
              fontFamily={isSelected ? 'fontPrimaryMedium' : 'fontPrimaryRegular'}
              opacity={isSelected ? 1 : 0.85}
              textAlign="left"
              txLocalized={item.label}
              variant="formLabel"
            />
          )}
        </Box>

        {type === 'RADIO' ? (
          <RadioIndicator isActive={isSelected} />
        ) : (
          <CheckBoxIndicator isActive={isSelected} />
        )}
      </Box>
    </Pressable>
  );
}
