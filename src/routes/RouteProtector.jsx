import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ element }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) {
    return <Navigate to={`/`} replace />;
  }
  return element;
};

export const PrivateRoute = ({element, role=[]}) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to={`/signin`} replace />;
  }
  // else if(role.includes(user?.role)){

  // }

  return element;
};
