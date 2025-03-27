import { Ionicons, AntDesign } from '@expo/vector-icons';
import { FinancialRequestIcon, RaiseComplaintIcon, SPARelatedIcon } from '~/design-system';
import { Box, Text } from '~/theme';

export function CustomerServiceHandover() {
  return (
    <Box mx="m" my="s">
      <Box
        bg="cardSecondaryBackground"
        borderRadius="xs"
        flexDirection="row"
        justifyContent="space-between"
        p="m"
      >
        <Text color="bodyText" fontFamily="fontSecondaryBold" fontSize={20} lineHeight={30}>
          Customer Service & Handover
        </Text>
        <AntDesign color="black" name="right" size={24} />
      </Box>
      <Box flexDirection="row" gap="s" my="s">
        <Box alignItems="center" gap="s" justifyContent="center" width={70}>
          <Box
            alignItems="center"
            borderColor="actionIconDisabled"
            borderRadius="xxl"
            borderWidth={1}
            height={70}
            justifyContent="center"
            width={70}
          >
            <Ionicons color="#B61F24" name="home-outline" size={32} />
          </Box>
          <Text
            color="bodyText"
            fontFamily="fontPrimarySemiBold"
            fontSize={13}
            lineHeight={15}
            textAlign="center"
          >
            Transfer/Resale
          </Text>
        </Box>

        <Box alignItems="center" gap="s" justifyContent="center" width={70}>
          <Box
            alignItems="center"
            borderColor="actionIconDisabled"
            borderRadius="xxl"
            borderWidth={1}
            height={70}
            justifyContent="center"
            width={70}
          >
            <RaiseComplaintIcon />
          </Box>
          <Text
            color="bodyText"
            fontFamily="fontPrimarySemiBold"
            fontSize={13}
            lineHeight={15}
            textAlign="center"
          >
            Raise Complaint
          </Text>
        </Box>

        <Box alignItems="center" gap="s" justifyContent="center" width={70}>
          <Box
            alignItems="center"
            borderColor="actionIconDisabled"
            borderRadius="xxl"
            borderWidth={1}
            height={70}
            justifyContent="center"
            width={70}
          >
            <FinancialRequestIcon />
          </Box>
          <Text
            color="bodyText"
            fontFamily="fontPrimarySemiBold"
            fontSize={13}
            lineHeight={15}
            textAlign="center"
          >
            Transfer/Resale
          </Text>
        </Box>

        <Box alignItems="center" gap="s" justifyContent="center" width={70}>
          <Box
            alignItems="center"
            borderColor="actionIconDisabled"
            borderRadius="xxl"
            borderWidth={1}
            height={70}
            justifyContent="center"
            width={70}
          >
            <SPARelatedIcon />
          </Box>
          <Text
            color="bodyText"
            fontFamily="fontPrimarySemiBold"
            fontSize={13}
            lineHeight={15}
            textAlign="center"
          >
            SPA Related
          </Text>
        </Box>

        <Box alignItems="center" gap="s" justifyContent="center" width={70}>
          <Box
            alignItems="center"
            borderColor="actionIconDisabled"
            borderRadius="xxl"
            borderWidth={1}
            height={70}
            justifyContent="center"
            width={70}
          >
            <AntDesign color="black" name="right" size={24} />
          </Box>
          <Text
            color="bodyText"
            fontFamily="fontPrimarySemiBold"
            fontSize={13}
            lineHeight={15}
            marginHorizontal="m"
            textAlign="center"
          >
            View All
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
