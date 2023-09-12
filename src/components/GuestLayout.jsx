import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logoutStore } from "../store/auth";
import { api } from "../api/apiConfig";
import { auth } from "../api/endpoints";

export default function GuestLayout() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
     window.history.pushState(null, "", "/login");
     window.location.reload();
  }

  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const result = await api.post(auth.logout);
      if (result.success) {
        dispatch(logoutStore());
      }
    } catch (error) {}
  };

 

  return (
    <div className="">
      <header className="h-[60px] bg-gray-200 opacity-90 flex justify-between items-center px-24">
        <div>Logo</div>
        <div>
          {user?.name}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <div className="flex">
        <aside className="w-[200px] min-h-screen bg-blue-950">
          <Link
            className="text-white block font-semibold w-[50%] m-auto mt-5 px-2 hover:underline hover:text-gray-200"
            to="/app"
          >
            Dashboard
          </Link>
          <Link
            className="text-white block font-semibold w-[50%] m-auto mt-5 px-2 hover:underline hover:text-gray-200"
            to="/app/users"
          >
            Users
          </Link>
        </aside>
        <div className="mx-5 my-3 py-2 px-5 w-[calc(100%-200px)] bg-slate-100 rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
