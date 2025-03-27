import { useContext } from 'react';

import { AppModalContext, IAppModalContextOptions } from './AppModalProvider';

/**
 * This provides a reusable hook to access the App Modal context.
 */
export const useAppModal = () => useContext<IAppModalContextOptions>(AppModalContext);
