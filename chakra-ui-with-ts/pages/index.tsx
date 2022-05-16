import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const index: React.FC<LayoutProps> = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <Box w="100%">
      <Navbar />
      <Flex>{props.children}</Flex>
    </Box>
  );
};

export default index;
