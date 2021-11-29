import {
  Heading,
  Text,
  Stack,
  Center,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { HiCheckCircle } from 'react-icons/hi';

const PriceSection = () => {
  return (
    <Center mt={12} flexDirection="column" id="harga">
      <Heading mt={6} fontSize="3xl" textAlign="center">
        Harga
      </Heading>
      <Stack
        mt={{ base: 8, md: 12 }}
        spacing="48px"
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack
          direction="column"
          spacing="36px"
          w="300px"
          border="1px solid"
          borderColor="gray.300"
          p="36px"
        >
          <Stack direction="column" spacing="10px">
            <Text fontSize="xl">Premium</Text>
            <Stack direction="row" spacing={2} alignItems="center">
              <Text fontSize="2xl" fontWeight="bold">
                Rp20.000
              </Text>
              <Text fontSize="sm" color="gray.500">
                / bulan
              </Text>
            </Stack>
            <Text color="gray.500">
              Pilihan terbaik untuk mengatur kegiatan Anda setiap harinya
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={HiCheckCircle} color="green.500" />
                Unlimited Kegiatan
              </ListItem>
              <ListItem>
                <ListIcon as={HiCheckCircle} color="green.500" />
                Custom Pomodoro
              </ListItem>
              <ListItem>
                <ListIcon as={HiCheckCircle} color="green.500" />
                Unlimited To Do
              </ListItem>
            </List>
          </Stack>
          <Button>Mulai</Button>
        </Stack>
        <Stack
          direction="column"
          spacing="36px"
          w="300px"
          border="1px solid"
          borderColor="transparent"
          p="36px"
        >
          <Stack direction="column" spacing="10px">
            <Text fontSize="xl">Basic</Text>
            <Stack direction="row" spacing={2} alignItems="center">
              <Text fontSize="2xl" fontWeight="bold">
                Gratis
              </Text>
              <Text fontSize="sm" color="gray.500">
                selamanya
              </Text>
            </Stack>
            <Text color="gray.500">
              Cocok untuk belajar meningkatkan produktivitas
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={HiCheckCircle} color="green.500" />6 Kegiatan per
                Hari
              </ListItem>
              <ListItem>
                <ListIcon as={HiCheckCircle} color="green.500" />
                Pomodoro 25/5 Menit
              </ListItem>
              <ListItem>
                <ListIcon as={HiCheckCircle} color="green.500" />
                10 To Do
              </ListItem>
            </List>
          </Stack>
          <Button variant="solid">Mulai</Button>
        </Stack>
      </Stack>
    </Center>
  );
};

export default PriceSection;
