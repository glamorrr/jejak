import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import pulpfiction from './images/pulpfiction.gif';
import NextImage from 'next/image';

const NotFoundSection = () => {
  return (
    <Flex
      mt={12}
      direction={{ md: 'row' }}
      alignItems={{ md: 'center' }}
      justifyContent={{ md: 'space-between' }}
    >
      <Box mx={{ base: 'auto', md: 0 }} flexShrink={0}>
        <Heading
          as="h1"
          fontSize="8xl"
          textAlign={{ base: 'center', md: 'left' }}
        >
          404
        </Heading>
        <Text color="gray.500" fontSize="xl">
          Halaman tidak ditemukan
        </Text>
      </Box>
      <Flex
        overflow="hidden"
        rounded="2xl"
        ml={24}
        display={{ base: 'none', md: 'flex' }}
      >
        <NextImage
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAMAAAAGcixRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA1VBMVEWcjYGono67taSYiHp5W1GHbmCHcWJ4YlYyJSYvICCBcmyZjIC9tqSSgXSDW1KQd2iYhnWNe25FOkFCMjdPQ0Z7b2alm45fVVOGeHhOQ0OFeGyfkoNWTFRIPktJOjiBcGWAdWwzKi5pY2kxKi9UTEiyqpmnn5ShmY51ZmCYhnmHdWxeRkVhSEZHNDNtZF2+uabRzby/uqd9bWWJdmt0XVhaQkBSOjcvIyKMfnGwo5DMx7TKxrM0JiRkUkxeSEZSPTw0JiYwJieGdWifjn23rJm9tKH///9N8m4iAAAAAWJLR0RGF7r57QAAAAd0SU1FB+ULHQUOOZiz+a8AAABVSURBVAjXY2BgZGJmYWVj5+Bk4OLm4eXjFxAUEmYQERUTl5CUkpaRZZCTV1BUUlZRVVNn0NDU0tbR1dM3MGQwMjYxNTO3sLSyZrCxtbN3cHRydnEFAPDtCXChR4MaAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTExLTI5VDA1OjE0OjU3KzAwOjAw+HvbdgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMS0yOVQwNToxNDo1NyswMDowMIkmY8oAAAAASUVORK5CYII="
          placeholder="blur"
          src={pulpfiction}
          alt=""
          width={498}
          height={351}
        />
      </Flex>
    </Flex>
  );
};

export default NotFoundSection;
