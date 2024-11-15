import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon

const Sidebar = () => {
  const [open, setOpen] = useState(false); // Sidebar open/close state
  const location = useLocation(); // Track active route

  const toggleSidebar = () => {
    setOpen(!open); // Toggle the sidebar visibility
  };

  return (
    <>
      {/* Button to toggle the sidebar */}
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 1300, // Ensure the button is above the sidebar
          color: '#ff5722', // Change the icon color to a custom color (example: orange)
          fontSize: '28px', // Increase the icon size
        }}
      >
        <MenuIcon /> {/* Always visible hamburger icon */}
      </IconButton>

      {/* Drawer for Sidebar */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: open ? 240 : 70, // Adjust width based on sidebar state
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? 240 : 70,
            boxSizing: 'border-box',
            backgroundColor: '#1e1e1e', // Darker Sidebar background
            color: 'white',
            transition: 'width 0.3s ease-in-out', // Smooth transition for opening/closing
          },
        }}
      >
        {/* Sidebar Header */}
        <div
          style={{
            padding: '20px',
            display: 'flex',
            justifyContent: open ? 'center' : 'flex-start',
            alignItems: 'center',
            backgroundColor: '#263238', // Darker header background
          }}
        >
          {open && (
            <Typography variant="h6" component="div" color="white">
              My App
            </Typography>
          )}
        </div>

        {/* Sidebar Links */}
        <List>
          {/* Home Link */}
          <ListItem
            button
            component={Link}
            to="/"
            sx={{
              backgroundColor: location.pathname === '/' ? '#3f51b5' : 'transparent',
              '&:hover': { backgroundColor: '#607d8b' },
            }}
          >
            <ListItemIcon sx={{ color: '#ff5722' }}>
              <HomeIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Home" />}
          </ListItem>

          {/* About Link */}
          <ListItem
            button
            component={Link}
            to="/about"
            sx={{
              backgroundColor: location.pathname === '/about' ? '#3f51b5' : 'transparent',
              '&:hover': { backgroundColor: '#607d8b' },
            }}
          >
            <ListItemIcon sx={{ color: '#ff5722' }}>
              <InfoIcon />
            </ListItemIcon>
            {open && <ListItemText primary="About" />}
          </ListItem>

          {/* Admin Link */}
          <ListItem
            button
            component={Link}
            to="/admin"
            sx={{
              backgroundColor: location.pathname === '/admin' ? '#3f51b5' : 'transparent',
              '&:hover': { backgroundColor: '#607d8b' },
            }}
          >
            <ListItemIcon sx={{ color: '#ff5722' }}>
              <BuildIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Admin" />}
          </ListItem>

          {/* Contact Link */}
          <ListItem
            button
            component={Link}
            to="/contact"
            sx={{
              backgroundColor: location.pathname === '/contact' ? '#3f51b5' : 'transparent',
              '&:hover': { backgroundColor: '#607d8b' },
            }}
          >
            <ListItemIcon sx={{ color: '#ff5722' }}>
              <ContactMailIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Contact" />}
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
