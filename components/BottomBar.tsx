import React from "react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";

const BottomBar = () => {
  return (
    <Flex
      display={{ sm: "flex", md: "none" }}
      gap={"10px"}
      py={"1.5"}
      px={"3"}
      borderTop="1px"
      borderColor={"whiteAlpha.200"}
      alignItems={"center"}
      justifyContent={"center"}
      bg=""
      w={"full"}
      pos={"fixed"}
      bottom={"0"}
      left={"0"}
      right={"0"}
      h="50px"
    >
      <IconButton
        bg={"transparent"}
        aria-label="add-note-btn"
        icon={<AddIcon />}
      />
      <IconButton
        bg={"transparent"}
        aria-label="add-note-btn"
        icon={<SearchIcon />}
      />
    </Flex>
  );
};

export default BottomBar;
