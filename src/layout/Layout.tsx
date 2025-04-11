import { Box } from "@mui/material";
import { Sidebar } from "~/layout/Sidebar";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box component="main" flexGrow={1} p={3}>
        {children}
      </Box>
    </Box>
  );
};
