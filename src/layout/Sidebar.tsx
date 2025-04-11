import { useState } from "react";
import { Box, Drawer, List, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import GroupIcon from "@mui/icons-material/Group";
import { SidebarItem } from "./SidebarItem";

const menuItems = [
  { id: 1, text: "Organizations", icon: <BusinessIcon /> },
  { id: 2, text: "Contractors", icon: <GroupIcon /> },
  { id: 3, text: "Clients", icon: <HomeIcon /> },
];

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(1); // Organizations по умолчанию

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
          <SidebarItem
            key={item.id}
            id={item.id}
            text={item.text}
            icon={item.icon}
            active={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </List>
    </Drawer>
  );
};
