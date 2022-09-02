import Sidebar from "@/components/Sidebar";
import { Container, Stack } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxW="container.xl" w="full">
      <Stack w="100%" direction="row">
        <Stack w="20%">
          <Sidebar />
        </Stack>
        {children}
      </Stack>
    </Container>
  );
};

export default Layout;
