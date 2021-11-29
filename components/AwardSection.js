import { Text, Flex } from '@chakra-ui/react';
import MedalIcon from '../components/MedalIcon';

const AwardSection = () => {
  return (
    <Flex
      mt={12}
      direction={{ base: 'column', md: 'row-reverse' }}
      justifyContent={{ md: 'space-between' }}
      bg={{ md: 'gray.50' }}
      px={{ md: '32px' }}
      py={{ md: '24px' }}
      shadow={{ md: 'sm' }}
      alignItems="center"
    >
      <MedalIcon />
      <Text
        mt={{ base: 3, lg: 0 }}
        fontWeight="bold"
        textAlign="center"
        fontSize="xl"
      >
        Kemendikbud: Aplikasi Produktivitas Terbaik 2021
      </Text>
    </Flex>
  );
};

export default AwardSection;
