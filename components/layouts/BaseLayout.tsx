import { VStack } from "@chakra-ui/react";
import React from "react";
import BottomBar from "../BottomBar";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <VStack as="main" px={"4"} mt={"20"}>
        {children}
        <BottomBar />
      </VStack>
    </React.Fragment>
  );
};

export default BaseLayout;
