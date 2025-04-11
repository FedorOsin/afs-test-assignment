import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import GroupIcon from "@mui/icons-material/Group";

const menuItems = [
  { text: "Organizations", icon: <BusinessIcon /> },
  { text: "Contractors", icon: <GroupIcon /> },
  { text: "Clients", icon: <HomeIcon /> },
];

export const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Oak Tree Cemetery
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Process Manager
        </Typography>
      </Box>

      <List>
        {menuItems.map((item) => (
          <ListItemButton key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};
