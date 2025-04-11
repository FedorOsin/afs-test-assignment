import { Box } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { useAuth } from "~/context/AuthContext";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { token } = useAuth();
  console.log("LAYOUT RENDER", { token });
  if (!token) {
    return null;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};
