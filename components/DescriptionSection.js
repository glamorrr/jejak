import { Heading, Text, Flex, Box } from '@chakra-ui/react';
import NextImage from 'next/image';
import feature from './images/feature.png';

const DescriptionSection = () => {
  return (
    <Flex
      id="fitur"
      mt={{ base: 16, md: 24 }}
      direction={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      justifyContent={{ md: 'space-between' }}
    >
      <Box w={{ base: '272px', md: '435px' }} flexShrink={0}>
        <NextImage
          placeholder="blur"
          src={feature}
          alt="feature"
          width={435}
          height={335}
        />
      </Box>
      <Box ml={{ base: 0, md: 12 }} maxW="450px">
        <Heading
          mt={6}
          fontSize="2xl"
          textAlign={{ base: 'center', md: 'left' }}
        >
          Tingkatkan Produktivitas dengan Mengatur Kegiatan Anda
        </Heading>
        <Text
          mt={4}
          color="gray.500"
          textAlign={{ base: 'center', md: 'left' }}
        >
          Berbagai tantangan menghalangi produktivitas kita. Untuk meningkatkan
          produktivitas Anda, kami menyediakan layanan pencatatan tugas,
          Pomodoro, dan penjadwal kegiatan yang dapat diakses dari mana saja.
        </Text>
      </Box>
    </Flex>
  );
};

export default DescriptionSection;
