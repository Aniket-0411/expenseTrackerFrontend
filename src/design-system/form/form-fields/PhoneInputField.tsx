import { Platform } from 'react-native';
import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';
import { PhoneNumberInput, TCountryCode } from '~/components';

// TODO: Shorten this path
import { TCallingCodeValue } from '~/components/CountryPickerInput/types';

interface ICountryCodePickerOptions {
  defaultCode: TCountryCode;
  hasError?: boolean;
  onChangeCountry: (country: TCallingCodeValue) => void;
  value: TCallingCodeValue | null;
}

/**
 * -----------------------------------------------------------------------------
 * Curried render function for the country code picker to avoid declaring the
 * component inline.
 */
function RenderPhoneCountryCodePicker(countryCodeOptions: ICountryCodePickerOptions) {
  return function PhoneCountryCodePicker() {
    return <PhoneNumberInput {...countryCodeOptions} />;
  };
}

type IPhoneInputFieldProps<T> = Pick<
  IInputTextElement<T>,
  | 'boxPropsInputContainer'
  | 'constraints'
  | 'editable'
  | 'error'
  | 'IconLeft'
  | 'label'
  | 'labelPostFix'
  | 'name'
  | 'onBlurCallback'
  | 'onChangeCallback'
  | 'onError'
  | 'onSubmitEditing'
  | 'placeholder'
  | 'required'
  | 'value'
> & {
  prefix?: string;
  regionCode?: string;
  countryCodeOptions?: ICountryCodePickerOptions;
};

/**
 * -----------------------------------------------------------------------------
 * This is used to capture the phone number of an individual or organization
 * within the form.
 */
export function PhoneInputField<T>({
  regionCode,
  constraints,
  countryCodeOptions,
  error,
  label,
  labelPostFix,
  name,
  placeholder,
  prefix,
  value,
  ...rest
}: IPhoneInputFieldProps<T>) {
  return (
    <InputTextElement
      boxProps={{ paddingBottom: 'none' }}
      constraints={{
        feedbackLabel: 'forms.labels.thePhoneNumber',
        format: 'phone-number',
        minLength: 3,
        maxLength: 16,
        required: true,
        type: 'tel',
        valuePrefix: prefix,
        regionCode,
        ...(constraints || {}),
      }}
      error={error}
      IconLeft={countryCodeOptions ? RenderPhoneCountryCodePicker(countryCodeOptions) : undefined}
      keyboardType="numeric"
      label={label ?? 'forms.labels.phone'}
      labelPostFix={labelPostFix}
      name={name}
      numberOfLines={1}
      placeholder={placeholder ?? 'forms.placeholders.phone'}
      returnKeyLabel="next"
      returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
      value={value}
      {...rest}
    />
  );
}
