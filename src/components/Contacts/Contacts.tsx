import {
  Box,
  Typography,
  Stack,
  Divider,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useQuery } from "@tanstack/react-query";
import { getContacts } from "~/api/contacts";
import { useAuth } from "~/context/AuthContext";
import { useState } from "react";

export const Contacts = () => {
  console.log("Contacts rendered");

  const { token } = useAuth();
  console.log("TOKEN IN CONTACTS: ", token);

  const { data, isLoading, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => getContacts(token!),
    enabled: !!token,
  });

  const [editMode, setEditMode] = useState(false);

  const [form, setForm] = useState({
    responsible: "",
    phone: "",
    email: "",
  });

  if (isLoading) return <div>Loading contacts...</div>;
  if (error) return <div>Error loading contacts data</div>;

  const handleEdit = () => {
    setEditMode(true);
    setForm({
      responsible: `${data.lastname} ${data.firstname} ${data.patronymic}`,
      phone: data.phone,
      email: data.email,
    });
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleSave = () => {
    console.log("save >", form);
    setEditMode(false);
  };

  return (
    <Box p={2} border="1px solid #ccc" borderRadius={2} mb={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Contacts</Typography>
        {!editMode && (
          <IconButton onClick={handleEdit}>
            <EditIcon />
          </IconButton>
        )}
      </Stack>

      <Divider sx={{ mb: 2 }} />

      {editMode ? (
        <Stack spacing={2}>
          <TextField
            label="Responsible person"
            value={form.responsible}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, responsible: e.target.value }))
            }
          />
          <TextField
            label="Phone number"
            value={form.phone}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
          <TextField
            label="Email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleSave}>
              Save Changes
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      ) : (
        <>
          <Typography>
            Responsible person: {data.lastname} {data.firstname}{" "}
            {data.patronymic}
          </Typography>
          <Typography>Phone number: {data.phone}</Typography>
          <Typography>Email: {data.email}</Typography>
        </>
      )}
    </Box>
  );
};
