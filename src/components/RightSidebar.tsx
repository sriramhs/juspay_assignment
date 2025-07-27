import { type FC } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  useTheme,
} from "@mui/material";
import {
  drawerStyle,
  iconContainerStyle,
  listItemStyle,
  primaryTextStyle,
  secondaryTextStyle,
  sectionBoxStyle,
  sectionHeaderStyle,
  timelineDotStyle,
  timelinesectionBoxStyle,
} from "../styles/RightSidebar";

import Bug from "../assets/rightbaricons/BugBeetle.svg";
import person from "../assets/rightbaricons/User.svg";
import broadcast from "../assets/rightbaricons/Broadcast.svg";

import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import ByeWind from "../assets/ByeWind.png";
import avatar from "../assets/avatar.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/Female05.png";
import avatar3 from "../assets/Male08.png";
import avatar4 from "../assets/natalie.png";
import avatar5 from "../assets/orlando.png";
interface Props {
  open: boolean;
}

const RightSidebar: FC<Props> = ({ open }) => {
  const theme = useTheme();
  const mode = useSelector((state: RootState) => state.ui.mode);
  const activities: any[] = [
    {
      id: "1",
      avatar: avatar,
      primary: "You have a bug that needs…",
      secondary: "Just now",
    },
    {
      id: "2",
      avatar: avatar2,
      primary: "Released a new version",
      secondary: "59 minutes ago",
    },
    {
      id: "3",
      avatar: avatar3,
      primary: "Submitted a bug",
      secondary: "12 hours ago",
    },
    {
      id: "4",
      avatar: avatar1,
      primary: "Modified A data in Page X",
      secondary: "Today, 11:59 AM",
    },
    {
      id: "5",
      avatar: ByeWind,
      primary: "Deleted a page in Project X",
      secondary: "Feb 2, 2023",
    },
  ];

  const avatarArray = [avatar1,avatar2,avatar,avatar3,avatar4,avatar5]

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      sx={{
        ...drawerStyle,
        width: open ? {md:200,lg:240,xl:280} : 0,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
      ModalProps={{ keepMounted: true, hideBackdrop: false }}
    >
      <Box sx={{ mt: 2 }}>
        <Box sx={sectionBoxStyle}>
          <Typography sx={sectionHeaderStyle}>Notifications</Typography>
          <List disablePadding>
            <ListItem sx={listItemStyle}>
              <Box sx={iconContainerStyle}>
                <Box
                  component="img"
                  src={mode === "dark" ? Bug : Bug}
                  alt="Collapse"
                />
              </Box>
              <Box>
                <Typography sx={primaryTextStyle}>
                  You have a bug that needs...
                </Typography>
                <Typography sx={secondaryTextStyle}>Just now</Typography>
              </Box>
            </ListItem>
            <ListItem sx={listItemStyle}>
              <Box sx={iconContainerStyle}>
                <Box
                  component="img"
                  src={mode === "dark" ? person : person}
                  alt="Collapse"
                />
              </Box>
              <Box>
                <Typography sx={primaryTextStyle}>
                  New user registered
                </Typography>
                <Typography sx={secondaryTextStyle}>59 minutes ago</Typography>
              </Box>
            </ListItem>
            <ListItem sx={listItemStyle}>
              <Box sx={iconContainerStyle}>
                <Box
                  component="img"
                  src={mode === "dark" ? Bug : Bug}
                  alt="Collapse"
                />
              </Box>
              <Box>
                <Typography sx={primaryTextStyle}>
                  You have a bug that needs...
                </Typography>
                <Typography sx={secondaryTextStyle}>12 hours ago</Typography>
              </Box>
            </ListItem>
            <ListItem sx={listItemStyle}>
              <Box sx={iconContainerStyle}>
                <Box
                  component="img"
                  src={mode === "dark" ? broadcast : broadcast}
                  alt="Collapse"
                />
              </Box>
              <Box>
                <Typography sx={primaryTextStyle}>
                  Andi Lane subscribed to you
                </Typography>
                <Typography sx={secondaryTextStyle}>Today, 11:59 AM</Typography>
              </Box>
            </ListItem>
          </List>
        </Box>

        {/* Activities */}
        <Box sx={timelinesectionBoxStyle}>
          <Typography sx={sectionHeaderStyle}>Activities</Typography>
          <Timeline
            position="right"
            sx={{
              p: 0,
              m: 0,
              "& .MuiTimelineItem-root:before": {
                // remove the opposite‐side gutter
                flex: 0,
                padding: 0,
              },
            }}
          >
            {activities.map((act, idx) => (
              <TimelineItem key={act.id} sx={{ minHeight: "auto", py: 1 }}>
                <TimelineSeparator sx={{ px: 1 }}>
                  <Avatar
                    src={act.avatar}
                    sx={timelineDotStyle}
                    sizes="small"
                  />
                  {idx < activities.length - 1 && (
                    <TimelineConnector
                      sx={{ mt: "8px" }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ pt: 0, px: 1 }}>
                  <Typography sx={primaryTextStyle}>{act.primary}</Typography>
                  <Typography sx={secondaryTextStyle}>
                    {act.secondary}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Contacts */}
        <Box sx={sectionBoxStyle}>
          <Typography sx={sectionHeaderStyle}>Contacts</Typography>
          <List disablePadding>
            {[
              "Natali Craig",
              "Drew Cano",
              "Orlando Diggs",
              "Andi Lane",
              "Kate Morrison",
              "Koray Okumus",
            ].map((name,i) => (
              <ListItem key={name} sx={listItemStyle}>
                <Avatar sx={timelineDotStyle} src={avatarArray[i]} />
                <Typography sx={primaryTextStyle}>{name}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default RightSidebar;
