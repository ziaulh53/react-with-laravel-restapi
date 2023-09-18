import {
  Home,
  Signup,
  Login,
  Users,
  UserForm,
} from "../pages";

import React from "react";

export const PublicRoutes = [
  {
    path: "/",
    element: <Home/>,
  },
]

export const AuthRoutes = [
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

export const PrivateRoutes = [
  {
    path: "/users",
    element: <Users/>,
    // role: ['seller']
  },
  {
    path: "/users/:id",
    element: <UserForm/>,
  },
  {
    path: "/account",
    element: <UserForm/>,
    // role: ['seller', 'buyer']
  },
];
