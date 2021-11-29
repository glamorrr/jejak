import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading:
      '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
    body: '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
  },
  components: {
    Input: {
      sizes: {
        md: {
          field: {
            borderRadius: 'none',
          },
        },
      },
      defaultProps: {
        variant: 'filled',
        focusBorderColor: 'gray.700',
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 'none',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',
      },
      variants: {
        primary: {
          bg: 'gray.900',
          borderColor: 'gray.900',
          color: 'white',
          _hover: {
            bg: 'gray.100',
            color: 'gray.900',
            _disabled: {
              bg: 'gray.900',
              color: 'white',
            },
          },
          _active: {
            bg: 'gray.300',
          },
        },
      },
      defaultProps: {
        size: 'lg',
        variant: 'primary',
      },
    },
  },
});

export default theme;
