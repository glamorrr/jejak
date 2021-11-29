import { Container } from '@chakra-ui/react';

const Wrapper = ({ children, ...rest }) => {
  return (
    <Container maxW="1024px" px={4} {...rest}>
      {children}
    </Container>
  );
};

export default Wrapper;
