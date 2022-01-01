import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface Props {
  showProfileData?: boolean;
}

export const Profile: React.FC<Props> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Moselli</Text>
          <Text color="gray.300" fontSize="small">
            mat.moselli@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Matheus Moselli" />
    </Flex>
  );
};
