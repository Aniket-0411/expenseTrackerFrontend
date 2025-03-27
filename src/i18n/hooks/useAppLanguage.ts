import { useEffect, useState } from 'react';
import { I18nManager } from 'react-native';

import { loadLocalString, saveLocalPrimitive } from '~/utils';

import { SETTING_CURRENT_LANGUAGE } from '../constants';
import { LocaleOptionsType, i18n } from '../i18n';

/**
 * This hooks retrieves the persisted language saved in mmkv storage and updates
 * the active/current language.
 */
export const useAppLanguage = () => {
  const getPersistedLanguage = () =>
    (loadLocalString(SETTING_CURRENT_LANGUAGE) as unknown as LocaleOptionsType) || i18n.locale;

  const [currentLanguage, setCurrentLanguage] = useState(getPersistedLanguage());

  const updateI18nManager = (newLocale: LocaleOptionsType) => {
    const isRTL = newLocale === 'ar';

    i18n.locale = newLocale;
    i18n.defaultLocale = newLocale;
    I18nManager.allowRTL(isRTL);
    I18nManager.forceRTL(isRTL);
  };

  const handleOnUpdateLanguage = () => {
    const newLocale = currentLanguage === 'ar' ? 'en' : 'ar';

    saveLocalPrimitive(SETTING_CURRENT_LANGUAGE, newLocale);
    setCurrentLanguage(() => newLocale);
    updateI18nManager(newLocale);
  };

  useEffect(() => {
    updateI18nManager(getPersistedLanguage());
  }, []);

  return {
    currentLanguage,
    getPersistedLanguage,
    isRTL: currentLanguage === 'ar',
    onUpdateLanguage: handleOnUpdateLanguage,
  };
};
