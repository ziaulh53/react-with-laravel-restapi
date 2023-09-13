import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/apiConfig";
import { user as userEndpoint } from "../api/endpoints";

export default function UserForm() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const fetchSingleUser = async () => {
    try {
      const result = await api.get(userEndpoint.getUser + `${id}`);
      if (result.success) {
        setUser({
          name: result?.user?.name,
          email: result?.user?.email,
          password: result?.user?.password
        });
      }
    } catch (error) {}
  };
  const updateUser = async () => {
    try {
      const result = await api.put(userEndpoint.getUser, id, user);
      if (result.success) {
        fetchSingleUser();
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchSingleUser();
  }, []);
  return (
    <div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Name</label>
        <input
          value={user.name}
          className="border px-3 py-2 text-base text-gray-500 focus:border-gray-400 rounded-md outline-none"
          onChange={({ target }) => setUser({ ...user, name: target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Email</label>
        <input
          value={user.email}
          type="email"
          className="border px-3 py-2 text-base text-gray-500 focus:border-gray-400 rounded-md outline-none"
          onChange={({ target }) => setUser({ ...user, email: target.value })}
        />
      </div>
      <button onClick={updateUser} className="bg-blue-500 hover:bg-blue-600 text-white p-1 px-5">Update</button>
    </div>
  );
}
