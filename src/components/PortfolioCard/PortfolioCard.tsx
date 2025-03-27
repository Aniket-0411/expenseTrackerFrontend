import { Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { Box, Text } from '~/theme';
import { ArrowRightIcon, LocationIcon } from '~/design-system';
import { IPortfolioUnit, useAuthStore } from '~/services';

/**
 * This interface defines the props for the portfolio card.
 */
export interface IPortfolioCardProps {
  portfolio: IPortfolioUnit;
}

/**----------------------------------------------------------------------------
 * PortfolioCard component that renders a card with the following properties:
 */
export function PortfolioCard({ portfolio }: IPortfolioCardProps) {
  const { activePortfolioUnit, updateActivePortfolioUnit } = useAuthStore();
  const router = useRouter();

  const { buildingName = '', floorNumber = '', location = '', unitNumber = '' } = portfolio;
  const propertyAddress = `${unitNumber}, ${floorNumber ?? ''}, ${buildingName}`;

  // TODO: use the below source when binding the API.
  // eslint-disable-next-line import/extensions
  const portfolioImageUrl = portfolio.thumbnailUrl || require('assets/images/dummy-portfolio.png');

  /**
   * This updates the active unit in state to allow the user to switch the active
   * portfolio unit.
   */
  const handleSwitchActivePortfolio = () => {
    if (activePortfolioUnit?.unitNumber !== unitNumber) {
      updateActivePortfolioUnit(portfolio);
    }

    // TODO: Redirect back to the previous screen
    router.push('/home');
  };

  return (
    <TouchableOpacity onPress={handleSwitchActivePortfolio}>
      <Box
        backgroundColor="mainBackground"
        borderRadius="s"
        gap="m"
        justifyContent="center"
        mb="s"
        mx="l"
        p="s"
      >
        <Box flexDirection="row" gap="s">
          <Image borderRadius={8} height={60} source={portfolioImageUrl} width={100} />

          <Box flex={1} flexDirection="column" gap="xxs">
            <Text color="textTitle" fontFamily="primary" fontSize={14} lineHeight={20}>
              {propertyAddress ?? ''}
            </Text>

            <Box alignItems="flex-end" flexDirection="row" justifyContent="flex-start" width={100}>
              <LocationIcon height={18} width={18} />

              <Text color="bodyText" fontFamily="primary" fontSize={12} lineHeight={20}>
                {location || 'Location'}
              </Text>
            </Box>

            <Box
              alignItems="center"
              flexDirection="row"
              gap="xs"
              justifyContent="flex-end"
              width="100%"
            >
              <Text
                color="failure"
                fontFamily="primary"
                fontSize={12}
                lineHeight={12}
                tx="myPortfolioScreen.viewItem"
              />
              <ArrowRightIcon height={10} />
            </Box>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
