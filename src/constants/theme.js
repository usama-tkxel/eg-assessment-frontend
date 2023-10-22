import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

const DEFAULT_THEME_COLOR = '#4345DB';
const DEFAULT_HOVER_COLOR = '#6267f7';

const DEFAULT_THEME = {
  colors: {
    blue: {
      50: DEFAULT_THEME_COLOR,
      100: '#bbdefb',
      200: '#90caf9',
      300: DEFAULT_THEME_COLOR,
      400: DEFAULT_THEME_COLOR,
      500: DEFAULT_THEME_COLOR,
      600: DEFAULT_HOVER_COLOR,
      700: DEFAULT_HOVER_COLOR,
      800: DEFAULT_HOVER_COLOR,
      900: DEFAULT_HOVER_COLOR,
    },
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles,
                },
              },
              'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
                {
                  ...activeLabelStyles,
                },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: 'absolute',
                backgroundColor: 'white',
                pointerEvents: 'none',
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: 'left top',
              },
            },
          },
        },
      },
    },
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
  },
};

export const CUSTOM_THEME = extendTheme(
  {
    ...DEFAULT_THEME,
  },
  withDefaultColorScheme({ colorScheme: 'blue' })
);

export const DEFAULT_TOAST_SETTINGS = {
  title: 'Something went wrong',
  status: 'error',
  duration: 2000,
  position: 'top-right',
  isClosable: true,
};
