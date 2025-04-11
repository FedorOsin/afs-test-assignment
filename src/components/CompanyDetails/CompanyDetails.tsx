import { Box, Typography, Stack, Divider, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useQuery } from "@tanstack/react-query";
import { getCompany } from "~/api/company";
import { useAuth } from "~/context/AuthContext";

export const CompanyDetails = () => {
  const { token } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["company"],
    queryFn: () => getCompany(token!),
    enabled: !!token,
  });

  if (isLoading) return <div>Loading company...</div>;
  if (error) return <div>Error loading company data</div>;

  return (
    <Box p={2} border="1px solid #ccc" borderRadius={2} mb={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Company Details</Typography>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Typography>
        Agreement: {data.agreementNumber} / {data.agreementDate}
      </Typography>
      <Typography>Business entity: {data.businessEntity}</Typography>
      <Typography>Company type: {data.type.join(", ")}</Typography>
    </Box>
  );
};
