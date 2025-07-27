import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  IconButton,
  Breadcrumbs,
  Link,
  InputBase,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Search as SearchIcon,

} from '@mui/icons-material';
import { headerStyles } from '../styles/Header';
import { toggleTheme } from '../redux/reducers/uiSlice';
import { useAppDispatch } from '../redux/hooks';
import LeftCollapseIcon from "../assets/Sidebar.svg";
import BellIcon from "../assets/BellIcon.svg";
import LightModeIcon from "../assets/LightModeIcon.svg";
import RightCollapseIcon from "../assets/RightSideBar.svg";
import FavoriteIcon from "../assets/Star.svg";
import HistoryIcon from "../assets/HistoryIcon.svg";
import LeftCollapseIconDark from "../assets/sidebarDark.svg";
import BellIconDark from "../assets/BellIconDark.svg";
import LightModeIconDark from "../assets/LightModeIconDark.svg";
import RightCollapseIconDark from "../assets/RightSideBarDark.svg";
import FavoriteIconDark from "../assets/StarDark.svg";
import HistoryIconDark from "../assets/HistoryIconDark.svg";
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useAppDispatch();
  const mode = useSelector((state: RootState) => state.ui.mode);

  // Generate breadcrumbs from current route
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);


    const breadcrumbs: { label: string; path: string; }[] = [];

    pathnames.forEach((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = name.charAt(0).toUpperCase() + name.slice(1);
      breadcrumbs.push({ label, path });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  const handleBreadcrumbClick = (path: string) => {
    navigate(path);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Search:', searchValue);
  };
  const handleTheme = () => {
    dispatch(toggleTheme())
  }
  return (
    <Box sx={headerStyles.headerContainer}>
      <Box sx={headerStyles.leftSection}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuToggle}
          sx={headerStyles.menuButton}

        >
          <Box
            component="img"
            src={mode === 'dark' ? LeftCollapseIconDark : LeftCollapseIcon}
            alt="Collapse"
          />
        </IconButton>

        <IconButton color="inherit" sx={headerStyles.iconButton}>
          <Box
            component="img"
            src={mode === 'dark' ? FavoriteIconDark : FavoriteIcon}
            alt="Collapse"
          />
        </IconButton>

        <Breadcrumbs
          separator="/"
          sx={headerStyles.breadcrumbs}
          maxItems={isMobile ? 2 : undefined}
        >
          {breadcrumbs.map((crumb, index) => (
            <Link
              key={crumb.path}
              underline="hover"
              color={index === breadcrumbs.length - 1 ? 'text.primary' : 'inherit'}
              // onClick={() => handleBreadcrumbClick(crumb.path)}
              sx={headerStyles.breadcrumbLink}
            >
              {crumb.label}
            </Link>
          ))}
        </Breadcrumbs>
      </Box>

      <Box sx={headerStyles.centerSection}>
        <Box
          component="form"
          onSubmit={handleSearchSubmit}
          sx={headerStyles.searchContainer}
        >
          <SearchIcon sx={headerStyles.searchIcon} />
          <InputBase
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
            sx={headerStyles.searchInput}
            inputProps={{ 'aria-label': 'search' }}

          />
          {!isSmall && (
            <Box sx={headerStyles.keyboardShortcut}>
              ⌘/
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={headerStyles.rightSection}>
        <IconButton color="inherit" sx={headerStyles.iconButton} onClick={handleTheme}>
          <Box
            component="img"
            src={mode === 'dark' ? LightModeIconDark : LightModeIcon}
            alt="Collapse"
          />
        </IconButton>

        <IconButton color="inherit" sx={headerStyles.iconButton}>
          <Box
            component="img"
            src={mode === 'dark' ? HistoryIconDark : HistoryIcon}
            alt="Collapse"
          />
        </IconButton>

        <IconButton color="inherit" sx={headerStyles.iconButton}>
          <Box
            component="img"
            src={mode === 'dark' ? BellIconDark : BellIcon}
            alt="Collapse"
          />
        </IconButton>

        <IconButton color="inherit" sx={headerStyles.iconButton}>
          <Box
            component="img"
            src={mode === 'dark' ? RightCollapseIconDark : RightCollapseIcon}
            alt="Collapse"
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;