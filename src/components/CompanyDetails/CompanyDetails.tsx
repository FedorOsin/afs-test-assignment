import { useQuery } from "@tanstack/react-query";
import { useAuth } from "~/context/AuthContext";
import { getCompany } from "~/api/company";

export const CompanyDetails = () => {
  const { token } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["company"],
    queryFn: () => getCompany(token!),
    enabled: !!token, // запрос только если есть токен
  });

  if (isLoading) return <div>Loading company...</div>;
  if (error) return <div>Error loading company data</div>;

  return (
    <div>
      <h2>Company Details</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
