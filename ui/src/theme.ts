import { defaultTheme, mergeTheme } from 'evergreen-ui';

const WHITE = '#fff';
const BACKGROUND = '#F1E9DA';
const PRIMARY = '#2E294E';
const SECONDARY = '#6B9AC4';

const theme = mergeTheme(defaultTheme, {
  fontFamilies: {
    display: 'Lora, sans-serif',
    ui: 'Manrope, sans-serif',
    mono: 'Manrope, sans-serif'
  },
  components: {
    Button: {
      appearances: {
        primary: {
          backgroundColor: PRIMARY,
          color: WHITE,
          fontWeight: '600',
          paddingX: 24,
          selectors: {
            _disabled: {
              opacity: 0.2
            },
            _hover: {
              opacity: 0.9,
              transition: 'opacity 0.1s ease-in-out'
            },
            _active: {
              boxShadow: `none`
            }
          }
        }
      }
    },
    Input: {
      baseStyle: {
        backgroundColor: BACKGROUND,
        borderRadius: 4,
        borderWidth: 0,
        border: `none`
      },
      appearances: {
        default: {
          color: PRIMARY,
          opacity: 0.8,
          backgroundColor: BACKGROUND,
          borderRadius: 4,
          borderWidth: 0,
          border: `1px solid `,
          boxShadow: 'none',
          selectors: {
            _focus: {
              border: `1px solid ${PRIMARY}`,
              boxShadow: `0 0 2px 2px ${PRIMARY}`
            },
            _placeholder: {
              color: '#888',
              opacity: 0.5
            }
          }
        }
      }
    },
    Select: {
      appearances: {
        default: {
          backgroundColor: BACKGROUND,
          borderRadius: 4,
          borderWidth: 0,
          border: `1px solid ${PRIMARY}`,
          boxShadow: 'none',
          selectors: {
            _focus: {
              border: `1px solid ${PRIMARY}`,
              boxShadow: `0 0 2px 2px ${PRIMARY}`
            }
          }
        }
      }
    },
    Card: {
      baseStyle: {
        borderRadius: 4
      }
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Lora, sans-serif',
        color: PRIMARY
      }
    }
  },
  colors: {
    background: BACKGROUND,
    primary: PRIMARY,
    secondary: SECONDARY
  }
});

export default theme;
