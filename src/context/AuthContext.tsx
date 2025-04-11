import { createContext, useContext, useState, ReactNode } from "react";
import { axiosInstance } from "~/api/axiosInstance";

type AuthContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
  login: (username: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = async (username: string) => {
    const response = await axiosInstance.get(`/auth?user=${username}`);
    const authHeader = response.headers.authorization;

    console.log("LOGIN RESPONSE HEADER:", authHeader);

    if (authHeader) {
      const tokenFromHeader = authHeader.replace("Bearer ", "");
      setToken(tokenFromHeader);
    } else {
      console.log("No Authorization header found");
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
