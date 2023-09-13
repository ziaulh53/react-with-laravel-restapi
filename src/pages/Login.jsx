import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginStore } from "../store/auth";
import { Link } from "react-router-dom";
import { api } from "../api/apiConfig";
import { auth } from "../api/endpoints";

const Login = () => {
  const dispatch = useDispatch();
  const [crededtial, setCredential] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredential({ ...crededtial, [name]: value });
  };

  const onSubmit = async()=>{
    try {
      const result = await api.post(auth.login, crededtial);
      if(result.success){
        dispatch(loginStore({user:result?.user, token: result?.token}))
      }
    } catch (error) {
      
    }
  }


  return (
    <div className="flex items-center min-h-screen justify-center">
      <div className="w-full max-w-md">
        <div className="bg-black opacity-80">
          <h6 className="text-center text-white py-3 text-xl">Login</h6>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={crededtial.email}
              onChange={onChange}
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={crededtial.password}
              onChange={onChange}
              name="password"
              type="password"
              placeholder="* * * * * * * " 
            />
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
          <div className="flex items-center justify-between mb-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmit}
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Link
            className="mt-4 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/signup"
          >
            New User?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
