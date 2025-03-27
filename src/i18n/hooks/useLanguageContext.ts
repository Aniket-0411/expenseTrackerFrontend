import { useContext } from 'react';

import { LanguageContext } from '../LanguageContext';

/**
 * Returns the language context
 */
export const useLanguageContext = () => useContext(LanguageContext);
