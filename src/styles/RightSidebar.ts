import type { SxProps, Theme } from '@mui/material';

export const drawerStyle: SxProps<Theme> = {
  width: {md:200,lg:240,xl:280},
  flexShrink: 0,
};

export const sectionHeaderStyle: SxProps<Theme> = {
  px: 2,
  py: 1,
  lineHeight:'20px',
  fontSize: 14,
  fontWeight: 600,
  // color: 'text.secondary',
  // textTransform: 'uppercase',
};

export const listItemStyle: SxProps<Theme> = {
  px: 2,
  py: 1,
  display: 'flex',
  gap:"8px"

};

export const iconContainerStyle: SxProps<Theme> = {
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 2,
  bgcolor: '#e2f4ff',
  mr: 1.5,
};

export const primaryTextStyle: SxProps<Theme> = {
  fontSize: 14,
  fontWeight: 400,
  // color: 'text.primary',
};

export const secondaryTextStyle: SxProps<Theme> = {
  fontSize: 12,
  color: '#a4a5a5',
};

export const sectionBoxStyle: SxProps<Theme> = {
  mb: 1,
  ml:"10px"

};

export const timelineDotStyle: SxProps<Theme> = {
  p: 0,
  m: 0,
  mt:"2px",
  ml:1,
  width: 24,
  height: 24,
};


export const timelinesectionBoxStyle: SxProps<Theme> = {
  // p: 2,
  // bgcolor: "#FFFFFF",
  // borderRadius: 2,
  // boxShadow: 1,
  ml:"10px"
};

export const timelinesectionHeaderStyle: SxProps<Theme> = {
  fontSize: "18px",
  fontWeight: 600,
  mb: 2,
};
