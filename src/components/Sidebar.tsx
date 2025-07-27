import { type FC, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  drawerStyleLeft,
  avatarContainerStyle,
  avatarStyle,
  userNameStyle,
  sectionContainerStyle,
  sectionHeaderStyle,
  listItemStyle,
  nestedListStyle,
  activeItemStyle,
  itemTextStyle,
  itemIconStyle,
  accordianStyle,
} from "../styles/Sidebar";
import { useNavigate } from "react-router-dom";
import ByeWind from "../assets/ByeWind.png";
import defaultIcon from "../assets/leftbaricons/default.svg";
import ecommerce from "../assets/leftbaricons/ecoomerce.svg";
import projects from "../assets/leftbaricons/projects.svg";
import courses from "../assets/leftbaricons/courses.svg";
import userprofile from "../assets/leftbaricons/userprofile.svg";
import account from "../assets/leftbaricons/account.svg";
import corporate from "../assets/leftbaricons/corporate.svg";
import blog from "../assets/leftbaricons/blog.svg";
import social from "../assets/leftbaricons/social.svg";
import defaultDarkIcon from "../assets/leftbaricons/defaultDark.svg";
import ecommerceDark from "../assets/leftbaricons/ecoomerceDark.svg";
import projectsDark from "../assets/leftbaricons/projectsDark.svg";
import coursesDark from "../assets/leftbaricons/coursesDark.svg";
import userprofileDark from "../assets/leftbaricons/userprofileDark.svg";
import accountDark from "../assets/leftbaricons/accountDark.svg";
import corporateDark from "../assets/leftbaricons/corporateDark.svg";
import blogDark from "../assets/leftbaricons/blogDark.svg";
import socialDark from "../assets/leftbaricons/socialDark.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import Divider from "@mui/material/Divider";

interface Props {
  open: boolean;
}

const LeftSidebar: FC<Props> = ({ open }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeDashboard, setActiveDashboard] = useState<
    "Default" | "eCommerce" | "Projects" | "Online Courses"
  >("Default");
  const [userProfileOpen, setUserProfileOpen] = useState(true);
  const mode = useSelector((state: RootState) => state.ui.mode);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        ...drawerStyleLeft,
        width: open ? 212 : 0,

        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
      ModalProps={{ keepMounted: true, hideBackdrop: true }}
    >
      {/* User Info */}
      <Box sx={avatarContainerStyle}>
        <Avatar sx={avatarStyle} src={ByeWind} />
        <Typography sx={userNameStyle}>ByeWind</Typography>
      </Box>

      {/* Favorites & Recently */}
      <Box sx={sectionContainerStyle}>
        <Typography sx={sectionHeaderStyle}>
          Favorites&nbsp;&nbsp;Recently
        </Typography>
        <List disablePadding sx={{ mt: 1 }}>
          {["Overview", "Projects"].map((text) => (
            <ListItem key={text} sx={listItemStyle}>
              <FiberManualRecordIcon
                sx={{ fontSize: 8, color: "text.secondary", mr: 1 }}
              />
              <Typography sx={itemTextStyle}>{text}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Dashboards */}
      <Box sx={sectionContainerStyle}>
        <Typography sx={sectionHeaderStyle}>Dashboards</Typography>
        <List disablePadding>
          {[
            { icon: defaultIcon,iconDark: defaultDarkIcon, label: "Default", path: "default" },
            { icon: ecommerce,iconDark: ecommerceDark, label: "eCommerce", path: "orders" },
            { icon: projects,iconDark: projectsDark, label: "Projects", path: "projects" },
            { icon: courses,iconDark: coursesDark, label: "Online Courses", path: "courses" },
          ].map(({ icon, label, path ,iconDark}) => {
            let styles = {
              ...listItemStyle,
              ...(activeDashboard === label ? activeItemStyle : {}),
            };
            return (
              <ListItem
                key={label}
                sx={styles}
                onClick={() => {
                  setActiveDashboard(label as any);
                  navigate(
                    `/dashboard/${path?.toLowerCase()?.replace(/\s+/g, "")}`
                  );
                }}
              >
                {activeDashboard === label && (
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{
                      width: "4px",
                      borderRadius: "2px",
                      backgroundColor: (theme) =>
                        theme.palette.custom.secondary,
                      my: "1px",
                    }}
                  />
                )}
                <ListItemIcon sx={itemIconStyle}>
                  {" "}
                  <Box
                    component="img"
                    src={mode !== "dark" ? icon : iconDark}
                    alt="Collapse"
                  />
                </ListItemIcon>
                <Typography sx={itemTextStyle}>{label}</Typography>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Pages */}
      <Box sx={sectionContainerStyle}>
        <Typography sx={sectionHeaderStyle}>Pages</Typography>

        {/* User Profile as Accordion */}
        <Accordion
          disableGutters
          elevation={0}
          square
          expanded={userProfileOpen}
          onChange={() => setUserProfileOpen((o) => !o)}
          sx={accordianStyle}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="small" />}>
            <ListItemIcon sx={itemIconStyle}>
              {" "}
              <Box
                component="img"
                src={mode !== "dark" ? userprofile : userprofileDark}
                alt="Collapse"
              />
            </ListItemIcon>
            <Typography sx={itemTextStyle}>User Profile</Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 0 }}>
            <List disablePadding sx={nestedListStyle}>
              {[
                "Overview",
                "Projects",
                "Campaigns",
                "Documents",
                "Followers",
              ].map((text) => (
                <ListItem key={text} sx={listItemStyle}>
                  <Typography sx={itemTextStyle}>{text}</Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Other standalone pages */}
        {[
          { icon: account,iconDark: accountDark, label: "Account" },
          { icon: corporate,iconDark: corporateDark, label: "Corporate" },
          { icon: blog,iconDark: blogDark, label: "Blog" },
          { icon: social,iconDark: socialDark, label: "Social" },
        ].map(({ icon, label ,iconDark}) => (
          <ListItem key={label} sx={listItemStyle}>
            <ListItemIcon sx={itemIconStyle}>
              {" "}
              <Box
                component="img"
                src={mode !== "dark" ? icon : iconDark}
                alt="Collapse"
              />
            </ListItemIcon>
            <Typography sx={itemTextStyle}>{label}</Typography>
          </ListItem>
        ))}
      </Box>
    </Drawer>
  );
};

export default LeftSidebar;
