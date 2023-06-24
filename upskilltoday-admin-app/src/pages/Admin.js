import * as React from "react";
import { useState, useContext } from "react";
import { useAuth } from "../components/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "../components/UserContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListSubheader from "@mui/material/ListSubheader";
import { MenuItem, Tooltip, Menu } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import Avatar from "@mui/material/Avatar";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const drawerWidth = 240;

const admin = [
  {
    title: "User List",
    icon: <PersonAdd fontSize="small" />,
    path: "Users",
  },
  {
    title: "Settings",
    icon: <Settings fontSize="small" />,
    path: "settings",
    redirect: "",
  },
  {
    title: "Logout",
    icon: <Logout fontSize="small" />,
    path: "logout",
    redirect: "logout",
  },
];

const userAccount = [
  {
    title: "Settings",
    icon: <Settings fontSize="small" />,
    path: "settings",
    redirect: "",
  },
  {
    title: "Logout",
    icon: <Logout fontSize="small" />,
    path: "logout",
    redirect: "logout",
  },
];

const menuLists = [
  {
    title: "Dashboard",
    icon: <SpaceDashboardIcon />,
    path: "/dashboard",
  },
  {
    title: "Visitors",
    icon: <GroupsIcon />,
    path: "/visitors",
  },
  {
    title: "Settings",
    icon: <Settings />,
    path: "/settings",
  },
];

const reportLists = [
  { title: "New Registers", icon: "", path: "/newregisters" },
  { title: "New Partners", icon: "", path: "/newpartners" },
  { title: "New Enquiries", icon: "", path: "/newenquiries" },
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Admin(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setAuth, user } = useAuth();
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const logout = async () => {
    // const res = await Axios.get("http://localhost:5000/logout", {
    const res = await Axios.get(
      "https://backend-server-theta.vercel.app/logout",
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    setAuth(false);
    setUserInfo("");
    navigate("/home");
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuLists.map((menu, index) => [
          <ListItem
            key={index}
            disablePadding
            ButtonBase
            component={Link}
            to={menu.path}
          >
            <ListItemButton>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          </ListItem>,
        ])}
      </List>
      <Divider />
      <List>
        <ListSubheader component="div" inset>
          Saved reports
        </ListSubheader>
        {reportLists.map((report, index) => [
          <ListItem
            key={index}
            disablePadding
            ButtonBase
            component={Link}
            to={report.path}
          >
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={report.title} />
            </ListItemButton>
          </ListItem>,
        ])}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#ff7b00',
        }}
      >
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ pl: 2 }}>
            Admin Dashboard
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "flex-end",
              mr: 2,
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 1 }}>
                <Avatar
                  alt={userInfo.lastName}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Typography sx={{ alignItems: "center", pt: 2 }}>
              {userInfo.firstName}, {userInfo.roles[0]}
            </Typography>
            {/*console.log("user data: " + JSON.stringify(userInfo)) */}
            <Menu
              sx={{
                mt: "45px",
                display: "flex",
                justifyContent: "flex-end",
                alignContent: "center",
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              slotProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
            >
              {userInfo.roles[0] === "admin" ? (
                <>
                  {admin.map((account) => [
                    <MenuItem key={account} onClick={handleCloseUserMenu}>
                      <ListItemIcon>{account.icon}</ListItemIcon>
                      <Link
                        to={account.path}
                        underline="none"
                        onClick={account.redirect}
                      >
                        <Typography textAlign="center">
                          {account.title}
                        </Typography>
                      </Link>
                    </MenuItem>,
                  ])}
                </>
              ) : (
                <>
                  {userAccount.map((account) => [
                    <MenuItem key={account} onClick={handleCloseUserMenu}>
                      <ListItemIcon>{account.icon}</ListItemIcon>
                      <Link
                        to={account.path}
                        underline="none"
                        onClick={account.redirect}
                      >
                        <Typography textAlign="center">
                          {account.title}
                        </Typography>
                      </Link>
                    </MenuItem>,
                  ])}
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
      </Box>
    </Box>
  );
}
