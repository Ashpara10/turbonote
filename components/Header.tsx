import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";

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
      <Box display="flex" bg={""} h={"100%"}>
        <IconButton
          aria-label="Theme Toggle Button"
          mx={"2"}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          colorScheme={useColorModeValue("purple", "orange")}
          onClick={toggleColorMode}
        />

        {user ? (
          <Box display={"flex"} flexDirection={"row"}>
            <Menu>
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
                        onClick={() => signOut(auth)}
                        bg="red"
                        color="white"
                      >
                        SignOut
                      </Button>
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        ) : (
          <Button
            mx={"2"}
            w={"fit-content"}
            onClick={async () => {
              const provider = new GoogleAuthProvider();
              const u = await signInWithPopup(auth, provider);
            }}
          >
            Signup
          </Button>
        )}
      </Box>
    </HStack>
  );
};
export default Header;
