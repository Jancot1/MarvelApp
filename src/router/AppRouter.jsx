import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth";
import { MarvelRoutes } from "../marvel";

export const AppRouter = () => {
  const authStatus = "authenticated";

  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="/auth/*" element={<AuthRoutes />} />
      ) : (
        <Route path="/*" element={<MarvelRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
      <Route />
    </Routes>
  );
};
