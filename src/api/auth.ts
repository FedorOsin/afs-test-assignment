import { axiosInstance } from "./axiosInstance";

export const login = async (username: string) => {
  const response = await axiosInstance.get(`/auth?user=${username}`);
  return response.data;
};
