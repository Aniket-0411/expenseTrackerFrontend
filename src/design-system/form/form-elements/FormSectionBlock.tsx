import { ReactNode, useState } from 'react';

import { TxKeyPath } from '~/i18n';
import { Box } from '~/theme';

import { FormSectionHeader } from './FormSectionHeader';

interface IFormSectionBlockProps {
  children: ReactNode;
  isCollapsed: boolean;
  title: TxKeyPath;
}

/**
 * -----------------------------------------------------------------------------
 * Section block provides a visual grouping for related items in the form
 */
export function FormSectionBlock({
  children,
  isCollapsed: isCollapsedInit,
  title,
  ...rest
}: IFormSectionBlockProps) {
  const [isCollapsed, setIsCollapsed] = useState(isCollapsedInit);

  const handleToggleSection = () => {
    setIsCollapsed(() => !isCollapsed);
  };

  return (
    <Box
      backgroundColor="mainBackground"
      borderBottomColor="loaderBackground"
      borderBottomWidth={isCollapsed ? 1 : 0}
      borderRadius="xs"
      marginHorizontal="s"
      marginTop="s"
      paddingHorizontal="l"
      paddingTop="m"
      {...rest}
    >
      <FormSectionHeader
        isCollapsed={isCollapsed}
        onToggleSection={handleToggleSection}
        title={title}
      />

      {isCollapsed ? null : <Box paddingBottom="m">{children}</Box>}
    </Box>
  );
}
