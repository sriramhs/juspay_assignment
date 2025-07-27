import type { SxProps, Theme } from "@mui/material";

export const drawerStyleLeft: SxProps<Theme> = {
  width: 212,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 212,
    boxSizing: "border-box",
    border: "none",
    boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
  },
};

export const avatarContainerStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  px: 2,
  py: 2,
};

export const avatarStyle: SxProps<Theme> = {
  width: 32,
  height: 32,
  mr: 1.5,
};

export const userNameStyle: SxProps<Theme> = {
  fontSize: 16,
  fontWeight: 400,
};

export const sectionContainerStyle: SxProps<Theme> = {
  mt: 2,
};

export const sectionHeaderStyle: SxProps<Theme> = {
  fontSize: 12,
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: 0.5,
};

export const listItemStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  m: 1,
};

export const nestedListStyle: SxProps<Theme> = {
  pl: 4,
};

export const activeItemStyle: SxProps<Theme> = {
  bgcolor: (theme) => theme.palette.custom.grey,
  borderRadius: "8px",
};

export const itemTextStyle: SxProps<Theme> = {
  fontSize: 14,
  fontWeight: 400,
};

export const itemIconStyle: SxProps<Theme> = {
  fontSize: 18,
  color: "text.secondary",
  mr: 1.5,
};

export const accordianStyle: SxProps<Theme> = {
  "& .MuiAccordionSummary-root": {
    ...listItemStyle,
    pl: 2,
    pr: 2,
    py: 1,
  },
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
    m: 0,
  },
};
