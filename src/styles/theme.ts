import { createTheme, type ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      grey: string;
      lineGrey:string;
      secondary:string;
      secondaryBg:string;
    };
  }
  interface PaletteOptions {
    custom?: {
      grey: string;
      lineGrey:string;
      secondary:string;
      secondaryBg:string;
    };
  }
}

const scrollbarStyle = {
  '*::-webkit-scrollbar': {
    width: '1px',
    height: '1px',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
    borderRadius: '1px',
  },
  '*::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#555',
  },
  '*::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '*': {
    scrollbarWidth: 'thin', // For Firefox
    scrollbarColor: '#888 transparent',
  },
};

const commonSettings: ThemeOptions = {
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
      MuiCssBaseline: {
      styleOverrides: scrollbarStyle,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    background: {
      default: '#ffffff',
      
    },
    custom: {
      grey: '#1C1C1C0D',
      lineGrey:"rgba(28, 28, 28, 0.1)",
      secondary:'#000000',
      secondaryBg:"#f7f9fb"
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1260,
      xl: 1540,
    },
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    background: {
      default: '#1d1d1c',
      
    },
    custom: {
      grey: '#FFFFFF1A',
      lineGrey:"rgba(255, 255, 255, 0.1)",
      secondary:'#c6c7f8',
      secondaryBg:"#262627"
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1260,
      xl: 1540,
    },
  },
  ...commonSettings,
});
