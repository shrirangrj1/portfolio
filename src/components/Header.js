import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "About", path: "/portfolio" },
    { text: "Experience", path: "/experienceSlider" },
    { text: "Projects", path: "/projects" },
    { text: "Resume", path: "/resume" },
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: "#1e1e2f" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Shrirang Joshi's Portfolio
        </Typography>

        {/* Desktop Menu */}
        {!isMobile ? (
          menuItems.map((item) => (
            <Button key={item.text} color="inherit" component={Link} to={item.path}>
              {item.text}
            </Button>
          ))
        ) : (
          // Mobile Menu Icon
          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List style={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
