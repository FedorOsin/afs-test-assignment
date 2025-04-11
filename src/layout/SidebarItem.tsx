import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

type Props = {
  icon: React.ReactNode;
  text: string;
  selected: boolean;
  onClick: () => void;
};

export const SidebarItem = ({ icon, text, selected, onClick }: Props) => {
  return (
    <ListItemButton selected={selected} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
