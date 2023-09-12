import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

 if(isAuthenticated) return <Navigate to="/app"/>

  return (
    <div className="min-h-screen bg-slate-200">
      <Outlet />
    </div>
  );
}
