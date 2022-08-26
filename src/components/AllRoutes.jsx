import React from "react";
import { Route, Router, Routes } from "react-router";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Container } from "@chakra-ui/react";
import { Help } from "./Help";

export const AllRoutes = () => {
  return (
    <Container maxWidth="100%">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Container>
  );
};
