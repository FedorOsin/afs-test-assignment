import { axiosInstance } from "./axiosInstance";

export const getCompany = async (token: string) => {
  const response = await axiosInstance.get("/companies/12", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
