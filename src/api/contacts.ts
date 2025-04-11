import { axiosInstance } from "./axiosInstance";

export const getContacts = async (token: string) => {
  const response = await axiosInstance.get("/contacts/16", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
