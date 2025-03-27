import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import CountryPicker, {
  CountryModalProvider,
  DARK_THEME,
  CountryCode,
  Country as TCountry,
  FlagButton,
} from 'react-native-country-picker-modal';

import { TLocalizedText, TTxOptions, TxKeyPath } from '~/i18n';
import { Box, Text, TThemeColor } from '~/theme';

import { ChevronDownIcon, XMarkIcon } from '../../../icons';

interface ICountryInputTriggerProps {
  error: string | TLocalizedText | null;
  isRequired: boolean;
  label: TxKeyPath;
  labelTxOptions?: TTxOptions;
  onClearSelection: () => void;
  onPress: () => void;
  placeholder: TxKeyPath;
  selectedCountry: TCountry | null;
}

/**
 * -----------------------------------------------------------------------------
 * Renders a custom country picker trigger that is used to open the country and
 * shows the selected country later.
 */
function CountryInputTrigger({
  error,
  isRequired,
  label,
  labelTxOptions,
  onPress,
  onClearSelection,
  placeholder,
  selectedCountry,
}: ICountryInputTriggerProps) {
  const formLabelColor: TThemeColor = error ? 'danger' : 'inputLabel';

  let RenderActionIcon = null;

  if (selectedCountry && !isRequired) {
    RenderActionIcon = <XMarkIcon color="actionLabel" onPress={onClearSelection} opacity={0.75} />;
  } else {
    RenderActionIcon = <ChevronDownIcon size={16} />;
  }

  return (
    <Box mt="s">
      {label && selectedCountry ? (
        <Text
          color={formLabelColor}
          fontFamily="fontPrimaryLight"
          fontSize={14}
          mb="xxs"
          tx={label}
          txOptions={labelTxOptions}
          variant="formLabel"
        />
      ) : null}

      <TouchableOpacity onPress={onPress}>
        <Box
          alignItems="center"
          bg="inputBackground"
          borderColor="inputBorder"
          borderEndColor="inputBorder"
          borderRadius="xl"
          borderWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          px="m"
          py="xxs"
        >
          {!selectedCountry ? (
            <Text color="inputPlaceholder" py="s" tx={placeholder} />
          ) : (
            <Box alignItems="center" flexDirection="row" justifyContent="space-between">
              <FlagButton countryCode={selectedCountry.cca2} placeholder="AE" />

              <Text color="inputText" py="s" text={selectedCountry.name as string} />
            </Box>
          )}

          {RenderActionIcon}
        </Box>
      </TouchableOpacity>
    </Box>
  );
}

interface ICountryPickerInputFieldV2Props {
  isRequired?: boolean;
  selectedCountry: TCountry | null;
  onChangeCountry: (country: TCountry | null) => void;
}

/**
 * -----------------------------------------------------------------------------
 * This is a wrapper around the country picker that is used to select a country
 * from a list of countries without calling the API.
 *
 * Please note this is a drop-in replacement for the CountryPickerInputField
 * component.
 *
 * TODO: 1. Customize this later to fix the styling of the modal input items.
 * TODO: 2. Add support for just the country-code or currency selection.
 */
export function CountryPickerInputFieldV2({
  isRequired = true,
  selectedCountry,
  onChangeCountry,
}: ICountryPickerInputFieldV2Props) {
  // TODO: Get this from the theme later.
  const isThemeDark = false;

  const [countryCode, setCountryCode] = useState<CountryCode>(selectedCountry?.cca2 ?? 'AE');
  const [country, setCountry] = useState<TCountry | null>(selectedCountry);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleOnCountryChange = (newCountry: TCountry) => {
    setCountryCode(newCountry.cca2);
    setCountry(newCountry);
    onChangeCountry(newCountry);
  };

  const handleOnCountryClear = () => {
    setCountryCode('AE');
    setCountry(null);
    onChangeCountry(null);
  };

  const handleOnCloseModal = () => setIsModalVisible(false);
  const handleOnOpenModal = () => setIsModalVisible(true);
  const handleOnToggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <CountryModalProvider>
      <CountryPicker
        countryCode={countryCode}
        modalProps={{ visible: isModalVisible }}
        onClose={handleOnCloseModal}
        onOpen={handleOnOpenModal}
        onSelect={handleOnCountryChange}
        preferredCountries={['AE', 'US']}
        theme={isThemeDark ? DARK_THEME : {}}
        withAlphaFilter
        withCallingCode={false}
        withCallingCodeButton={false}
        withCountryNameButton={false}
        withCurrency={false}
        withCurrencyButton={false}
        withEmoji
        withFilter
        withFlag
        withFlagButton={false}
        withModal
      />

      <CountryInputTrigger
        error={null}
        isRequired={isRequired}
        label="forms.labels.nationality"
        onClearSelection={handleOnCountryClear}
        onPress={handleOnToggleModal}
        placeholder="forms.placeholders.nationality"
        selectedCountry={country ?? null}
      />

      {/* {country !== null && (
        <Box borderWidth={2}>
          <Text style={styles.data}>{JSON.stringify(country, null, 0)}</Text>
        </Box>
      )} */}
    </CountryModalProvider>
  );
}
