import type { SxProps, Theme } from '@mui/material';

export const containerSx: SxProps<Theme> = {
  p: 3,
  // bgcolor: '#FFFFFF',
  // borderRadius: '16px',
  // boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
};

export const headerSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  mb: 2,
};

export const titleSx: SxProps<Theme> = {
  fontSize: '14px',
  fontWeight: 600,
};

export const toolbarSx: SxProps<Theme> = {
  display: 'flex',
  justifyContent:"space-between",
  alignItems: 'center',
  gap: 1,
  mb: 2, backgroundColor: (theme) => theme.palette.custom.secondaryBg,
  p:1,
  borderRadius:"8px"
};

export const searchInputSx: SxProps<Theme> = {
  minWidth: 250,
};

export const tableContainerSx: SxProps<Theme> = {
  borderRadius: '12px',
  fontSize:'12px'
};

export const statusSx: Record<string, SxProps<Theme>> = {
  inProgress: { color: '#8A8CD9', fontWeight: 500, textTransform: 'capitalize' },
  complete: { color: '#4AA785', fontWeight: 500, textTransform: 'capitalize' },
  pending: { color: '#FFB836', fontWeight: 500, textTransform: 'capitalize' },
  approved: { color: '#59A8D4', fontWeight: 500, textTransform: 'capitalize' },
  rejected: { color: '#777676', fontWeight: 500, textTransform: 'capitalize' },
};

export const  searchContainer : SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: (theme) => theme.palette.background.default,
    borderRadius: '8px',
    paddingX: { xs: 1, md: 2 },
    paddingY: 1,
    minWidth: { xs: '120px', md: '160px' },
    maxWidth: '200px',
    height:'28px',
    border: '2px solid',
    borderColor: (theme) => theme.palette.custom.grey,
    transition: 'all 0.2s ease-in-out',
  
    '&:focus-within': {
      backgroundColor:  (theme) => theme.palette.background.default,
      border: 'none',
      boxShadow: 'none',
    },
  }

 export const  searchIcon: SxProps<Theme>={
    color: '#9e9e9e',
    fontSize: { xs: '18px', sm: '20px' },
    marginRight: { xs: 0.5, sm: 1 },
  }

 export const searchInput:SxProps<Theme> = {
    flex: 1,
    fontSize: '14px',
    '& input': {
      padding: 0,
      '&::placeholder': {
        color: '#9e9e9e',
        opacity: 1,
      },
    },
  }