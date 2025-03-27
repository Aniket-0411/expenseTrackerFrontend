import { ReactElement, useMemo } from 'react';

import { useAppLanguage } from './hooks';
import { LanguageContext, ILanguageContextOptions } from './LanguageContext';

export interface ILanguageProviderProps {
  children: ReactElement;
}

/**
 * -----------------------------------------------------------------------------
 * Base Language Provider of the App that exposes configurable language for the app
 */
export function LanguageProvider({ children }: ILanguageProviderProps) {
  const { currentLanguage, onUpdateLanguage } = useAppLanguage();

  const handleOnUpdateLanguage = () => {
    onUpdateLanguage();
  };

  const getFlagIcon = (lang: ILanguageContextOptions['currentLanguage']) => {
    switch (lang) {
      case 'ar':
        return 'arabic';
      case 'en':
        return 'english';
      default:
        return 'english';
    }
  };

  const memoizedValue: ILanguageContextOptions = useMemo(
    () => ({
      currentLanguage,
      isRTL: currentLanguage === 'ar',
      flagIconId: getFlagIcon(currentLanguage),
      onUpdateLanguage: handleOnUpdateLanguage,
    }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentLanguage]
  );

  return <LanguageContext.Provider value={memoizedValue}>{children}</LanguageContext.Provider>;
}
