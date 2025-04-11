import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "~/context/AuthContext";
import { login } from "~/api/auth";

const Login = () => {
  const { setToken } = useAuth();
  const [username, setUsername] = useState("");

  const handleLogin = async () => {
    try {
      const data = await login(username);
      setToken(data.token);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      maxWidth={300}
      mx="auto"
      mt={10}
    >
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
