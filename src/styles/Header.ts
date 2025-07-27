import type { SxProps, Theme } from '@mui/material/styles';


export const headerStyles: Record<string, SxProps<Theme>> = {
  headerContainer: {
    gridRow: 1,
    gridColumn: 2,
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
    // background: '#fff',
    zIndex: 10,
   borderBottom: '1px solid',
   borderColor: (theme) => theme.palette.custom.lineGrey,
    gap: { xs: 1, md: 2 },
  },

  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: 0.5, sm: 1 },
    flex: '1 1 auto',
    minWidth: 0,
  },

  centerSection: {
    display: 'flex',
    justifyContent: 'center',
    flex: { xs: '1 1 auto', md: '0 1 auto' },
    maxWidth: { xs: '200px', md: '300px' },
  },

  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    flex: '0 0 auto',
    '& > *:nth-of-type(n+3)': {
      display: { xs: 'none', sm: 'inline-flex' },
    },
  },

  menuButton: {
    marginRight: { xs: 0.5, sm: 1 },
    padding: { xs: '8px', sm: '8px' },
  },

  iconButton: {
    color: '#666',
    padding: { xs: '6px', sm: '8px' },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },

  breadcrumbs: {
    '& .MuiBreadcrumbs-separator': {
      color: '#9e9e9e',
      marginX: { xs: 0.5, sm: 1 },
    },
  },

  breadcrumbLink: {
    cursor: 'pointer',
    // color: '#9e9e9e',
    fontSize: { xs: '13px', sm: '14px' },
    fontWeight: 500,
    textDecoration: 'none',
    borderRadius:"8px",
    padding:"8px",
    '&:hover': {
      backgroundColor: (theme) => theme.palette.custom.grey,
      
    },
    '&:first-child': {
      // color: '#9e9e9e',
    },
  },

  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: (theme) => theme.palette.custom.grey,
    borderRadius: '8px',
    paddingX: { xs: 1, md: 2 },
    paddingY: 1,
    minWidth: { xs: '120px', md: '160px' },
    maxWidth: '200px',
    height:'28px',
    border: '1px solid transparent',
    transition: 'all 0.2s ease-in-out',
   
  },

  searchIcon: {
    color: '#9e9e9e',
    fontSize: { xs: '18px', sm: '20px' },
    marginRight: { xs: 0.5, sm: 1 },
  },

  searchInput: {
    flex: 1,
    fontSize: '14px',
    '& input': {
      padding: 0,
      '&::placeholder': {
        color: '#9e9e9e',
        opacity: 1,
      },
    },
  },

  keyboardShortcut: {
    fontSize: '24px',
    color: '#9e9e9e',
    fontFamily: 'monospace',
    marginLeft: 1,
    minWidth: '24px',
    textAlign: 'center',
    display: { xs: 'none', md: 'block' },
  },
};