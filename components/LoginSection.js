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
import peeplaptop from './images/peeplaptop.png';
import NextImage from 'next/image';
import NextLink from 'next/link';

const LoginSection = () => {
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
          Login
        </Heading>
        <Box as="form" mt={6} onSubmit={(e) => e.preventDefault()}>
          <VStack spacing={4}>
            <FormControl isRequired w="300px">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="email@example.com" />
            </FormControl>
            <FormControl isRequired w="300px">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
          </VStack>
          <Button mt={10} w="full" type="submit">
            Login
          </Button>
        </Box>
        <Text mt={6} textAlign="center">
          Belum punya akun?{' '}
          <NextLink href="/daftar" passHref>
            <Link fontWeight="bold">Daftar</Link>
          </NextLink>
        </Text>
      </Box>
      <Flex
        w="490px"
        h="435px"
        alignItems="flex-end"
        justifyContent="center"
        bg="blue.200"
        rounded="xl"
        ml={24}
        display={{ base: 'none', lg: 'flex' }}
      >
        <NextImage
          placeholder="blur"
          src={peeplaptop}
          alt=""
          width={286}
          height={369}
        />
      </Flex>
    </Flex>
  );
};

export default LoginSection;
