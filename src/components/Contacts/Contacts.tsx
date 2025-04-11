import { useQuery } from "@tanstack/react-query";
import { useAuth } from "~/context/AuthContext";
import { getContacts } from "~/api/contacts";

export const Contacts = () => {
  const { token } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => getContacts(token!),
    enabled: !!token,
  });

  if (isLoading) return <div>Loading contacts...</div>;
  if (error) return <div>Error loading contacts data</div>;

  return (
    <div>
      <h2>Contacts</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
