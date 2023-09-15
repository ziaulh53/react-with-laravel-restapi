import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/apiConfig";
import { user as userEndpoint } from "../api/endpoints";

export default function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role:""
  });

  // single user
  const fetchSingleUser = async () => {
    try {
      const result = await api.get(userEndpoint.getUser + `${id}`);
      if (result.success) {
        setUser({
          name: result?.user?.name,
          email: result?.user?.email,
          password: result?.user?.password,
          role: result?.user?.role || 'user'
        });
      }
    } catch (error) {}
  };

  // update user
  const updateUser = async () => {
    try {
      const result = await api.put(userEndpoint.getUser, id, user);
      if (result.success) {
        fetchSingleUser();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //add user
  const addUser = async()=>{
    try {
      const result = await api.post(userEndpoint.getUser, user);
      if(result.success){
        navigate('/app/users')
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSingleUser();
  }, []);

  return (
    <div className="animated fadeIn">
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
          className="border px-3 py-2 text-base text-gray-500 focus:border-gray-400 rounded-md outline-none"
          onChange={({ target }) => setUser({ ...user, email: target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Role</label>
        <input
          value={user.role}
          className="border px-3 py-2 text-base text-gray-500 focus:border-gray-400 rounded-md outline-none"
          onChange={({ target }) => setUser({ ...user, role: target.value })}
        />
      </div>
     {!id && <div className="mb-4">
        <label className="block font-semibold mb-2">Password</label>
        <input
          value={user.password}
          type="password"
          className="border px-3 py-2 text-base text-gray-500 focus:border-gray-400 rounded-md outline-none"
          onChange={({ target }) => setUser({ ...user, password: target.value })}
        />
      </div>}
      <button
        onClick={id?updateUser:addUser}
        className="bg-blue-500 hover:bg-blue-600 text-white p-1 px-5"
      >
        {id ? "Update" : "Add"}
      </button>
    </div>
  );
}
