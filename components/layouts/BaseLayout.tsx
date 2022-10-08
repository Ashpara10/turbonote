import { VStack } from "@chakra-ui/react";
import React from "react";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <VStack as="main" px={"4"} mt={"20"}>
        {children}
      </VStack>
    </React.Fragment>
  );
};

export default BaseLayout;
