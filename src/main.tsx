import React from "react";
import * as ReactDOM from "react-dom/client";
import type { ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider, useAuth } from "~/context/AuthContext";
import Home from "~/pages/Home";
import Login from "~/pages/Login";

const queryClient = new QueryClient();

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
