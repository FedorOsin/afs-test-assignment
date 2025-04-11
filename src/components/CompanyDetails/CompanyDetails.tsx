import {
  Box,
  Typography,
  Stack,
  Divider,
  IconButton,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCompany } from "~/api/company";
import { useAuth } from "~/context/AuthContext";

const COMPANY_TYPES = [
  "funeral_home",
  "logistics_services",
  "burial_care_contractor",
];

export const CompanyDetails = () => {
  const { token } = useAuth();
  const { data, isLoading, error } = useQuery({
    queryKey: ["company"],
    queryFn: () => getCompany(token!),
    enabled: !!token,
  });

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    agreementNumber: "",
    agreementDate: "",
    businessEntity: "",
    type: [] as string[],
  });

  if (isLoading) return <div>Loading company...</div>;
  if (error) return <div>Error loading company data</div>;

  const handleChange = (field: string, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("save", form);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
    setForm({
      agreementNumber: data.agreementNumber || "",
      agreementDate: data.agreementDate || "",
      businessEntity: data.businessEntity || "",
      type: data.type || [],
    });
  };

  return (
    <Box p={2} border="1px solid #ccc" borderRadius={2} mb={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Company Details</Typography>
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
            label="Agreement number"
            value={form.agreementNumber}
            onChange={(e) => handleChange("agreementNumber", e.target.value)}
          />
          <TextField
            label="Agreement date"
            value={form.agreementDate}
            onChange={(e) => handleChange("agreementDate", e.target.value)}
          />
          <FormControl>
            <InputLabel>Business entity</InputLabel>
            <Select
              value={form.businessEntity}
              onChange={(e) => handleChange("businessEntity", e.target.value)}
              label="Business entity"
            >
              <MenuItem value="Sole Proprietorship">
                Sole Proprietorship
              </MenuItem>
              <MenuItem value="Partnership">Partnership</MenuItem>
              <MenuItem value="Limited Liability Company">
                Limited Liability Company
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Company type</InputLabel>
            <Select
              multiple
              value={form.type}
              onChange={(e) => handleChange("type", e.target.value as string[])}
              renderValue={(selected) => selected.join(", ")}
            >
              {COMPANY_TYPES.map((item) => (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={form.type.includes(item)} />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleSave}>
              Save changes
            </Button>
            <Button variant="outlined" onClick={() => setEditMode(false)}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      ) : (
        <>
          <Typography>
            Agreement: {data.agreementNumber} / {data.agreementDate}
          </Typography>
          <Typography>Business entity: {data.businessEntity}</Typography>
          <Typography>Company type: {data.type.join(", ")}</Typography>
        </>
      )}
    </Box>
  );
};
