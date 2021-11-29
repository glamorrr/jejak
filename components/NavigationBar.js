import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  Button,
  HStack,
  VStack,
  Flex,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  useDisclosure,
  Icon,
  Link,
  IconButton,
} from '@chakra-ui/react';
import Logo from './Logo';
import Wrapper from './Wrapper';
import { HiOutlineMenu } from 'react-icons/hi';
import NextLink from 'next/link';

const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const DesktopNavigationLink = ({ text, href }) => {
    return (
      <Text color="gray.500" _hover={{ color: 'gray.900' }}>
        <NextLink href={href} passHref>
          <Link>{text}</Link>
        </NextLink>
      </Text>
    );
  };

  return (
    <Wrapper>
      <Flex py={6} justifyContent="space-between" alignItems="center">
        <NextLink href="/" passHref>
          <Link>
            <Logo w="100px" />
          </Link>
        </NextLink>
        <HStack spacing={10} display={{ base: 'none', md: 'flex' }}>
          <DesktopNavigationLink text="Fitur" href="/#fitur" />
          <DesktopNavigationLink text="Blog" href="#" />
          <DesktopNavigationLink text="Tentang Kami" href="#" />
          <DesktopNavigationLink text="Harga" href="/#harga" />
        </HStack>
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          <NextLink href="/login" passHref>
            <Button variant="ghost" as="a">
              Login
            </Button>
          </NextLink>
          <NextLink href="/daftar" passHref>
            <Button as="a">Daftar</Button>
          </NextLink>
        </HStack>
        {/* mobile navigation bar */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          colorScheme="gray"
          onClick={onOpen}
          boxSize="52px"
          icon={<Icon display="block" as={HiOutlineMenu} boxSize="32px" />}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody mt={12}>
              <VStack spacing={6} alignItems="flex-start">
                <Text
                  color="gray.700"
                  fontSize="xl"
                  onClick={() => {
                    onClose();
                  }}
                >
                  <NextLink href="/#fitur" passHref>
                    <Link>Fitur</Link>
                  </NextLink>
                </Text>
                <Text color="gray.700" fontSize="xl">
                  <NextLink href={'#'} passHref>
                    <Link>Blog</Link>
                  </NextLink>
                </Text>
                <Text color="gray.700" fontSize="xl">
                  <NextLink href={'#'} passHref>
                    <Link>Tentang Kami</Link>
                  </NextLink>
                </Text>
                <Text color="gray.700" fontSize="xl" onClick={onClose}>
                  <NextLink href="/#harga" passHref>
                    <Link>Harga</Link>
                  </NextLink>
                </Text>
              </VStack>
              <NextLink href="/daftar" passHref>
                <Button mt={12} size="lg" w="full" as="a">
                  Daftar
                </Button>
              </NextLink>
              <NextLink href="/login" passHref>
                <Button mt={6} variant="solid" size="lg" w="full" as="a">
                  Login
                </Button>
              </NextLink>
            </DrawerBody>
            <DrawerFooter justifyContent="flex-start">
              <Text color="gray.500">
                Copyright © 2021 PT Generasi Muda Maju. All rights reserved.
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Wrapper>
  );
};

export default NavigationBar;
