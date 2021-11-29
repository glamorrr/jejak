import {
  Flex,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Text,
  Box,
  Button,
  Input,
  Link,
} from '@chakra-ui/react';
import peepglass from './images/peepglass.png';
import NextImage from 'next/image';
import NextLink from 'next/link';

const DaftarSection = () => {
  return (
    <Flex
      mt={8}
      direction={{ lg: 'row' }}
      alignItems={{ lg: 'center' }}
      justifyContent={{ lg: 'space-between' }}
    >
      <Box mx={{ base: 'auto', lg: 0 }}>
        <Heading
          as="h1"
          fontSize="4xl"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          Daftar
        </Heading>
        <Box as="form" mt={6} onSubmit={(e) => e.preventDefault()}>
          <VStack spacing={4}>
            <FormControl isRequired w="300px">
              <FormLabel>Nama</FormLabel>
              <Input placeholder="Nama" />
            </FormControl>
            <FormControl isRequired w="300px">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="email@example.com" />
            </FormControl>
            <FormControl isRequired w="300px">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
            <FormControl isRequired w="300px">
              <FormLabel>Konfirmasi password</FormLabel>
              <Input type="password" placeholder="Konfirmasi password" />
            </FormControl>
          </VStack>
          <Button mt={10} w="full" type="submit">
            Daftar
          </Button>
        </Box>
        <Text mt={6} textAlign="center">
          Sudah punya akun?{' '}
          <NextLink href="/login" passHref>
            <Link fontWeight="bold">Login</Link>
          </NextLink>
        </Text>
      </Box>
      <Flex
        w="490px"
        h="435px"
        alignItems="flex-end"
        justifyContent="center"
        bg="yellow.300"
        rounded="xl"
        ml={24}
        display={{ base: 'none', lg: 'flex' }}
      >
        <NextImage
          placeholder="blur"
          src={peepglass}
          alt=""
          width={222}
          height={369}
        />
      </Flex>
    </Flex>
  );
};

export default DaftarSection;
