import { Box, BoxPropsType } from '~/theme';

interface IRaisedSearchWrapperProps extends BoxPropsType {
  children: React.ReactNode;
}

/**
 * -----------------------------------------------------------------------------
 * This is a variation of the inset wrapper but raises the search bar.
 * Adds drop shadows that gives an elevated appearance to the child search input.
 */
export function SearchWrapper({ children, ...rest }: IRaisedSearchWrapperProps) {
  return (
    <Box
      alignItems="center"
      backgroundColor="loaderBackground"
      // borderColor="searchRaisedBorder"
      borderRadius="l"
      borderWidth={1}
      elevation={1}
      flexDirection="row"
      justifyContent="space-around"
      marginHorizontal="m"
      marginVertical="s"
      padding="m"
      paddingVertical="s"
      // shadowColor="searchRaisedBorder"
      shadowOffset={{ width: 1, height: 1 }}
      shadowOpacity={0.6}
      shadowRadius={6}
      {...rest}
    >
      {children}
    </Box>
  );
}
