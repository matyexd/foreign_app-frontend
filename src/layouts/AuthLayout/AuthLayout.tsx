import React, { FC, ReactNode, Suspense } from "react";

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  return <Suspense fallback={""}>{children}</Suspense>;
};

export default AuthLayout;
