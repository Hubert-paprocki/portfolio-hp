import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <>{props.children}</>
    </>
  );
}

export default Layout;
