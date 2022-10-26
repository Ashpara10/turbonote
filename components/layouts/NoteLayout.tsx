import { ArrowBackIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import Router from "next/router";
import React from "react";

const NoteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HStack
        w={"full"}
        h={"60px"}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        backdropFilter="blur(8px)"
        bg={useColorModeValue("whiteAlpha.100", "#121212")}
        pos="fixed"
        top={0}
        left={0}
        right={0}
        p={"3"}
        color={useColorModeValue("blackAlpha.900", "white")}
        zIndex={1}
        as="header"
      >
        <Box
          maxW={"3xl"}
          w="full"
          display="flex"
          alignItems={"center"}
          justifyContent={"start"}
        >
          <Button
            w={"40px"}
            h={"40px"}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"full"}
            onClick={() => Router.push("/home")}
          >
            <Icon as={ArrowBackIcon} fontSize={"xl"} />
          </Button>
        </Box>
      </HStack>
      {children}
    </>
  );
};

export default NoteLayout;
