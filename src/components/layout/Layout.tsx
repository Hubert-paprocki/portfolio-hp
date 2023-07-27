import React from "react";
import MainHeader from "./MainHeader";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <MainHeader />
      <>{props.children}</>
    </>
  );
}

export default Layout;
