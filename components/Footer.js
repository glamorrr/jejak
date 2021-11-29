import { Box, Link, Flex, Text, HStack } from '@chakra-ui/react';
import Wrapper from './Wrapper';
import NextLink from 'next/link';
import Logo from './Logo';
import rafatech from './images/rafatech.jpeg';
import uin from './images/uin.jpeg';
import NextImage from 'next/image';

const Footer = () => {
  const FooterLink = ({ text }) => {
    return (
      <Text
        mr={{ base: 6, md: 10 }}
        mb={4}
        color="gray.500"
        _hover={{ color: 'gray.900' }}
      >
        <NextLink href="#" passHref>
          <Link>{text}</Link>
        </NextLink>
      </Text>
    );
  };

  return (
    <Box mt={28} bg="gray.50">
      <Wrapper py={12}>
        <Flex flexWrap="wrap">
          <FooterLink text="Bantuan" />
          <FooterLink text="FAQ" />
          <FooterLink text="Tentang Kami" />
          <FooterLink text="Blog" />
          <FooterLink text="Karir" />
          <FooterLink text="Syarat & Ketentuan" />
        </Flex>
        <Flex
          mt={6}
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          alignItems={{ md: 'flex-end' }}
        >
          <Flex direction="column">
            <Logo w="100px" />
            <Text mt={2} color="gray.500">
              Copyright © 2021 PT Generasi Muda Maju. All rights reserved.
            </Text>
          </Flex>
          <HStack spacing={6} mt={{ base: 8, md: 0 }}>
            <Box>
              <NextImage
                placeholder="blur"
                src={uin}
                alt="uin"
                width={58}
                height={50}
              />
            </Box>
            <Box>
              <NextImage
                placeholder="blur"
                src={rafatech}
                alt="rafatech"
                width={136}
                height={50}
              />
            </Box>
          </HStack>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Footer;
