import { Box, Typography, Stack, Divider, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useQuery } from "@tanstack/react-query";
import { getContacts } from "~/api/contacts";
import { useAuth } from "~/context/AuthContext";

export const Contacts = () => {
  console.log("Contacts rendered");
  const { token } = useAuth();
  console.log("TOKEN IN CONTACTS: ", token);
  const { data, isLoading, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => getContacts(token!),
    enabled: !!token,
  });

  if (isLoading) return <div>Loading contacts...</div>;
  if (error) return <div>Error loading contacts data</div>;

  return (
    <Box p={2} border="1px solid #ccc" borderRadius={2} mb={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Contacts</Typography>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Typography>
        Responsible person: {data.lastname} {data.firstname} {data.patronymic}
      </Typography>
      <Typography>Phone number: {data.phone}</Typography>
      <Typography>Email: {data.email}</Typography>
    </Box>
  );
};
