import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "~/context/AuthContext";
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
  const { token, login } = useAuth();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleSubmit = async () => {
    if (!username) return;
    await login(username);
    console.log("TOKEN AFTER LOGIN", token);
  };

  return (
    <Box>
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={handleSubmit}>Login</Button>
    </Box>
  );
};

export default Login;
