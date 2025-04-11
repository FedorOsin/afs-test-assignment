import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";

const menuItems = ["Organizations", "Contractors", "Clients"];

export const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Box width="240px" role="presentation">
        <List>
          {menuItems.map((text) => (
            <ListItemButton key={text}>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
