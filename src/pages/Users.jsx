import React, { useEffect } from "react";
import { api } from "../api/apiConfig";
import { user } from "../api/endpoints";

export default function Users() {
  const fetchUsers = async () => {
    try {
      const result = await api.get(user.getUser);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
    console.log('dfdf')
  }, []);
  return <div>Users</div>;
}
