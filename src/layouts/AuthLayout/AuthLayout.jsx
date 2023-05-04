import React, { Suspense } from "react";

const AuthLayout = ({ children }) => {
  return <Suspense fallback={""}>{children}</Suspense>;
};

export default AuthLayout;
