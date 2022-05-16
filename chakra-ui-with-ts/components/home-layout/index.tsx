import React from "react";
import Navbar from "../navbar";
import { Box, Text } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const HomeLayout: React.FC<LayoutProps> = (props) => {
  return (
    <Box w="100%">
      <Navbar />
      {props.children}
    </Box>
  );
};

export default HomeLayout;
