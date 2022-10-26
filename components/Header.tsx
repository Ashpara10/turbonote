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

        <Avatar
          p="1"
          size={"md"}
          name={`${auth?.currentUser?.displayName}`}
          src={`${auth?.currentUser?.photoURL}`}
        />
      </Box>
    </HStack>
  );
};
export default Header;

{
  /* <Box bg="red" display={"flex"} flexDirection={"row"}> */
}
{
  /* <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton _focusVisible={{ outline: "0px" }} as={"button"}>
            <IconButton
              aria-label="modal"
              variant={"outline"}
              icon={<HamburgerIcon />}
            />
          </MenuButton>
          <MenuList bg={menuBg} backdropFilter="blur(5px)">
            <MenuItem>New NoteBook</MenuItem>
            <MenuItem>New Note</MenuItem>
            <MenuItem>New Todo</MenuItem>
            <MenuItem>
              <Button
                onClick={() => {
                  signOut(auth);
                  Router.push("/");
                }}
                bg="red"
                color="white"
              >
                SignOut
              </Button>
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu> */
}
