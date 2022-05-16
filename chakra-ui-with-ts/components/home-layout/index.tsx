import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import { Box, Flex } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const HomeLayout: React.FC<LayoutProps> = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof window === "undefined") return null;

  return (
    <Box w="100%">
      <Navbar />
      <Flex w="100%">{props.children}</Flex>
    </Box>
  );
};

export default HomeLayout;
