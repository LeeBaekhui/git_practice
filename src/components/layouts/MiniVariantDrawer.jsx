import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
// import LogoutIcon from "@mui/icons-material/Logout"; // 로그아웃 아이콘 추가
// import { useNavigate } from "react-router-dom"; // useNavigate import

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const menuItems = {
  Inbox: ["Item 1", "Item 2", "Item 3"],
  Starred: ["아이템 이름", "Item B", "Item C"],
  "Send email": ["Item X", "Item Y", "Item Z"],
  Drafts: ["Item Alpha", "Item Beta", "Item Gamma"],
  "All mail": ["Item 1", "Item 2", "Item 3"],
  Trash: ["Item A", "Item B", "Item C"],
  Spam: ["Item X", "Item Y", "Item Z"],
};

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [nestedOpen, setNestedOpen] = React.useState({});

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNestedClick = (menu) => {
    setNestedOpen((prevOpen) => ({
      ...prevOpen,
      [menu]: !prevOpen[menu],
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              Mini variant drawer GymFit
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "5px 0 0 5px", // 좌측 모서리만 곡률 적용
                  padding: "5px 10px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  marginLeft: 2, // 간격 추가
                  width: 300, // 인풋박스의 길이를 조절
                  height: 40, // 인풋박스의 높이 설정
                  flexGrow: 1,
                }}
              >
                <SearchIcon sx={{ color: "gray", marginRight: 1 }} />
                <Input
                  disableUnderline
                  placeholder="Search"
                  sx={{ fontSize: 14, width: "100%" }} // 인풋박스의 길이를 조절
                />
              </Box>
              <Button
                variant="contained"
                // color="success"
                sx={{
                  backgroundColor: "#f0f0f0",
                  marginLeft: 0,
                  borderRadius: "0 5px 5px 0",
                  padding: "5px 10px",
                  height: 40,
                  color: "gray", // 버튼 텍스트 색상
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // 버튼의 그림자 추가
                  "&:hover": {
                    backgroundColor: "#f0f0f0", // 호버 시 배경색 유지
                  },
                }}
              >
                검색
              </Button>
            </Box>
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              marginLeft: "auto",
              borderRadius: "5px",
              padding: "5px 15px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
          >
            로그인
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" noWrap component="div">
            GymFit
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {Object.keys(menuItems)
            .slice(0, 4)
            .map((text, index) => (
              <React.Fragment key={text}>
                {text === "Inbox" ? (
                  <ListItem disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                ) : (
                  <React.Fragment>
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                        onClick={() => handleNestedClick(text)}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                        {open &&
                          (nestedOpen[text] ? <ExpandLess /> : <ExpandMore />)}
                      </ListItemButton>
                    </ListItem>
                    {open && (
                      <Collapse
                        in={nestedOpen[text]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {menuItems[text].map((item) => (
                            <ListItemButton key={item} sx={{ pl: 4 }}>
                              <ListItemText primary={item} />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
        </List>
        <Divider />
        <List>
          {Object.keys(menuItems)
            .slice(4)
            .map((text, index) => (
              <React.Fragment key={text}>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    onClick={open ? () => handleNestedClick(text) : null}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                    {open &&
                      (nestedOpen[text] ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </ListItem>
                {open && (
                  <Collapse in={nestedOpen[text]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {menuItems[text].map((item) => (
                        <ListItemButton key={item} sx={{ pl: 4 }}>
                          <ListItemText primary={item} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>내용이 들어가는 곳</Typography>
        <Typography paragraph>이 부분을 컴포넌트로 만들기 </Typography>
      </Box>
    </Box>
  );
}
