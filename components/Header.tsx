import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import Router from "next/router";

const Header = () => {
  const [user] = useAuthState(auth);
  const { toggleColorMode } = useColorMode();
  const menuBg = useColorModeValue("whiteAlpha.100", "#121212d1");

  return (
    <HStack
      as={"header"}
      w={"full"}
      h={"60px"}
      backdropFilter="blur(8px)"
      bg={useColorModeValue("whiteAlpha.100", "#121212d1")}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      p={"3"}
      color={useColorModeValue("blackAlpha.900", "white")}
      zIndex={1}
    >
      <Box h={"100%"}>Turbonote</Box>
      <Spacer />
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        bg={""}
        h={"100%"}
      >
        <IconButton
          aria-label="Theme Toggle Button"
          mx={"2"}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          colorScheme={useColorModeValue("purple", "orange")}
          onClick={toggleColorMode}
        />
      </Box>
    </HStack>
  );
};
export default Header;
