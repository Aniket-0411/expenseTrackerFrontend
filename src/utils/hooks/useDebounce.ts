import { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';

// Debounce type implementation
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DebouncedFn<T extends (...args: any[]) => any> = (T | (() => undefined)) & {
  cancel(): void;
  flush(): ReturnType<T> | undefined;
};

interface IUseDebouncedInputOptions<T> {
  /**
   * The initial Value
   */
  initialValue: T;
  /**
   * Duration in `ms` to wait for the debounce. Default is `500 ms`
   */
  delay?: number;
  /**
   * Callback to execute after the delay with updated value.
   */
  onChangeCb: (value: T) => void;
}

interface IUseDebouncedInputReturn<T> {
  /**
   * The final debounced value
   */
  debouncedValue: T;
  /**
   * Dispatched to updated the debounced value local state.
   */
  setDebouncedValue: Dispatch<SetStateAction<T>>;
  /**
   * Callback to execute after the delay with updated value.
   */
  onChangeDebounced: DebouncedFn<(value: T) => void>;
}

/**
 * -----------------------------------------------------------------------------
 * Adds a delay to the callback function. It can be used on search API call and
 * for other delayed output.
 *
 * @param TUseDebouncedInputOptions
 *
 * @returns {{debouncedValue, setDebouncedValue, onChangeDebounced}}
 * - debounced value of the element
 * - set hook to set the debounced value.
 * - callback function to be called after the delay.
 */
export const useDebounce = <T>({
  initialValue,
  delay = 500,
  onChangeCb,
}: IUseDebouncedInputOptions<T>): IUseDebouncedInputReturn<T> => {
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  const onChangeDebounced = useRef(debounce(onChangeCb, delay)).current;

  useEffect(() => {
    onChangeDebounced.cancel();
  }, [onChangeDebounced]);

  useEffect(() => {
    setDebouncedValue(() => initialValue);
  }, [initialValue]);

  return {
    debouncedValue,
    onChangeDebounced,
    setDebouncedValue,
  };
};
