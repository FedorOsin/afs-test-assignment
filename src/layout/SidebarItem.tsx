import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

type Props = {
  id: number;
  text: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

export const SidebarItem = ({ text, icon, active, onClick }: Props) => {
  return (
    <ListItemButton selected={active} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
