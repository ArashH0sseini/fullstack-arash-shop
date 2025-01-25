import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
}

export default Layout;
