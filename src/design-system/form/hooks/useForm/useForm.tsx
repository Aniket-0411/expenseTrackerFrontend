import { useEffect, useState } from 'react';

import { shallowCompare } from '~/utils';

import { TError } from '../../form.types';

/**
 * The expected value of the input to be passed under validation utils.
 */
export type TValue = string | number | boolean | string[];

export interface IInputChanged<T> {
  name: keyof T;
  value: TValue;
}

export interface IFormFieldError<T> {
  error?: TError;
  name: keyof T;
}

type TTouched<T> = Record<keyof T, boolean>;

export type TErrors<T> = Record<keyof T, TError>;

interface UseFormProps<T> {
  initialValues: T;
  onSubmitCb(values: T, errors?: TErrors<T>): void;
  dependencies?: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface UseFormReturnType<T = any> {
  errors: TErrors<T>;
  checkIfFormHasError(): boolean;
  handleOnBlur(options: IInputChanged<T>): void;
  handleOnInputChange(options: IInputChanged<T>): void;
  handleOnError(errorObj: IFormFieldError<T>): void;
  handleOnSubmitForm(): void;
  handleOnResetAllErrors(): void;
  handleOnResetForm?(overrides?: Partial<T>): void;
  touched: TTouched<T>;
  values: T;
}

/**
 * -----------------------------------------------------------------------------
 * Custom hook that receives a from fields, validates each on change, blur and
 * focus provides the final payload for submission.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const useForm = <T extends {}>({
  initialValues,
  onSubmitCb,
  dependencies,
}: UseFormProps<T>): UseFormReturnType<T> => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState<TTouched<T>>({} as TTouched<T>);
  const [errors, setErrors] = useState<TErrors<T>>({} as TErrors<T>);

  /**
   * This hooks checks if the parent component has a dependency array to shallow
   * compare against and force updates to the values based on the initial values.
   * To prevent it from rerunning every time, we added an empty array to prevent
   * it from being empty deps.
   */
  useEffect(() => {
    if (dependencies) {
      const isValueChanged = !shallowCompare(initialValues, values);

      if (isValueChanged) {
        setValues(() => initialValues);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies || []);

  const updateFieldValues = ({ name, value }: IInputChanged<T>) => {
    setValues(
      (prevValues): T => ({
        ...prevValues,
        [name]: value,
      }),
    );
  };

  const updateTouchedValues = (name: keyof T) => {
    setTouched((prevTouched): TTouched<T> => {
      const tempTouched = prevTouched ? touched : {};

      return {
        ...(tempTouched as TTouched<T>),
        [name]: true,
      };
    });
  };

  const handleOnInputChange = ({ name, value }: IInputChanged<T>): void => {
    updateFieldValues({ name, value });
  };

  const handleOnBlur = ({ name, value }: IInputChanged<T>): void => {
    updateFieldValues({ name, value });
    updateTouchedValues(name);
  };

  const handleOnError = ({ name, error }: IFormFieldError<T>): void => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleCheckIfFormHasErrors = () => {
    const hasError = Object.values(errors).some((field) => field);
    return hasError;
  };

  const handleOnResetAllErrors = () => {
    setErrors((): TErrors<T> => ({}) as TErrors<T>);
  };

  const handleOnSubmitForm = (): void => {
    if (errors) {
      const hasError = Object.values(errors).some((field) => field);
      if (hasError) return;
    }
    onSubmitCb(values);
  };

  const handleOnResetForm = (overrides?: Partial<T>): void => {
    const newValues = {
      ...initialValues,
      ...overrides,
    };

    setTouched((): TTouched<T> => ({}) as TTouched<T>);
    setErrors((): TErrors<T> => ({}) as TErrors<T>);
    setValues((): T => newValues);
  };

  return {
    errors,
    checkIfFormHasError: handleCheckIfFormHasErrors,
    handleOnBlur,
    handleOnError,
    handleOnInputChange,
    handleOnResetAllErrors,
    handleOnResetForm,
    handleOnSubmitForm,
    touched,
    values,
  };
};
