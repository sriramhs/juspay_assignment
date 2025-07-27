import type { SxProps, Theme } from '@mui/material/styles';

// Layout styles for the app grid system
export const layoutStyles: Record<string, SxProps<Theme>> = {
  layoutGrid: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: {
      xs: '0 1fr 0', // Mobile: hide both sidebars
      sm: '0 1fr 0', // Mobile: hide both sidebars  
      md: '150px minmax(0px, 1fr) 0', // Tablet: force-hide right, shrink left
      lg: '180px minmax(0px, 1fr) 240px', // Under 1440px: shrink panels, fluid middle
      xl: '212px minmax(948px, 1fr) 280px', // Desktop: default sizes
    },
    height: '100vh',
    overflow: 'hidden',
    // CSS custom properties for dynamic column widths
    '--left-width': {
      xs: '0',
      md: '150px',
      lg: '180px', 
      xl: '212px',
    },
    '--right-width': {
      xs: '0',
      md: '0',
      lg: '240px',
      xl: '280px',
    },
    '--main-min-width': {
      xs: '0px',
      md: '0px',
      lg: '0px',
      xl: '948px',
    },
  },

  // Collapsed state modifiers
  layoutGridLeftCollapsed: {
    '--left-width': '0',
    gridTemplateColumns: {
      xs: '0 1fr 0',
      md: '0 1fr 0', 
      lg: '0 1fr 240px',
      xl: '0 minmax(948px, 1fr) 280px',
    },
  },

  layoutGridRightCollapsed: {
    '--right-width': '0',
    '--main-min-width': {
      xs: '0px',
      md: '0px', 
      lg: '0px',
      xl: 'calc(948px + 280px)',
    },
    gridTemplateColumns: {
      xs: '0 1fr 0',
      md: '150px 1fr 0',
      lg: '180px 1fr 0', 
      xl: '212px minmax(calc(948px + 280px), 1fr) 0',
    },
  },

  sidebar: {
    gridRow: 2,
    overflowY: 'auto',
    padding: '1rem',
  },

  sidebarLeft: {
    gridColumn: 1,
    borderRight: '1px solid #eee',
  },

  sidebarRight: {
    gridColumn: 3,
    borderLeft: '1px solid #eee',
  },

  mainContent: {
    gridRow: 2,
    gridColumn: 2,
    overflowY: 'auto',
    padding: '1rem',
  },
};

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