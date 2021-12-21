import { Box, Link, Flex, Text } from '@chakra-ui/react';
import Wrapper from './Wrapper';
import NextLink from 'next/link';
import Logo from './Logo';

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
        <Flex mt={6} direction="column">
          <Logo w="100px" />
          <Text mt={2} color="gray.500">
            Copyright © 2021 PT Generasi Muda Maju. All rights reserved.
          </Text>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Footer;
