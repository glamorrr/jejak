import { Heading, Text, Box, HStack, Link, Flex } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import googleplay from '../components/images/googleplay.png';
import appstore from '../components/images/appstore.png';
import hero from '../components/images/hero.png';

const HeroSection = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justifyContent={{ md: 'space-between' }}
      mt={{ base: 0, md: 10 }}
    >
      <Box>
        <Heading
          mt={{ base: 4, md: 10 }}
          as="h1"
          textAlign={{ base: 'center', md: 'left' }}
        >
          Kurangi Rebahan
          <br />
          Tingkatkan{' '}
          <Text
            as="span"
            bgGradient="linear(white 0%, white 70%, yellow.300 70%, yellow.300 100%)"
          >
            Produktivitas
          </Text>
        </Heading>
        <HStack
          mt={{ base: 6, md: 12 }}
          spacing={4}
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <NextLink href={'#'} passHref>
            <Link>
              <NextImage
                placeholder="blur"
                src={googleplay}
                alt="availible in google play"
                width={200 / 1.4}
                height={60 / 1.4}
              />
            </Link>
          </NextLink>
          <NextLink href={'#'} passHref>
            <Link>
              <NextImage
                placeholder="blur"
                src={appstore}
                alt="availible in app store"
                width={200 / 1.4}
                height={60 / 1.4}
              />
            </Link>
          </NextLink>
        </HStack>
      </Box>
      <Box ml={12} display={{ base: 'none', md: 'block' }}>
        <NextImage
          placeholder="blur"
          src={hero}
          alt="hero"
          width={450}
          height={422}
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;
