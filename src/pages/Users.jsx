import React, { useEffect, useState } from "react";
import { api } from "../api/apiConfig";
import { user } from "../api/endpoints";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const result = await api.get(user.getUser);
      setUsers(result?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      const result = await api.delete(user.getUser, id);
      if (result.success) {
        fetchUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold">Users</h1>
        <Link
          className="text-white bg-green-700 px-3 py-1 rounded-lg"
          to="/app/users/new"
        >
          Add new
        </Link>
      </div>
      <div className="bg-white rounded-md shadow-md animated fadeInDown overflow-x-scroll">
        <table className="w-full ">
          <thead className="ps-3">
            <tr>
              <th className="bg-slate-300 py-3 border-r">ID</th>
              <th className="bg-slate-300 border-r">Name</th>
              <th className="bg-slate-300 border-r">Email</th>
              <th className="bg-slate-300 border-r">Created At</th>
              <th className="bg-slate-300 border-r">Updated At</th>
              <th className="bg-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((u) => (
              <tr key={u.id}>
                <td className="p-3 text-center border-b">{u?.id}</td>
                <td className="p-3 text-center border-b">{u?.name}</td>
                <td className="p-3 text-center border-b">{u?.email}</td>
                <td className="p-3 text-center border-b">{u?.created_at}</td>
                <td className="p-3 text-center border-b">{u?.updated_at}</td>
                <td className="p-3 text-center border-b">
                  <Link
                    className="mr-2 text-sm text-blue-400 underline"
                    to={`/app/users/${u?.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="text-red-700 font-bold px-2 text-sm py-1 rounded-lg"
                    onClick={() => deleteUser(u?.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
