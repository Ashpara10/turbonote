import { Box, Button } from "@chakra-ui/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Router from "next/router";
import { auth } from "../lib/firebase";

const SignIn = () => {
  return (
    <Box
      mt={"4"}
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Button
        onClick={async () => {
          const provider = new GoogleAuthProvider();
          const { user } = await signInWithPopup(auth, provider);
          user && Router.push("/home");
        }}
      >
        SignIn with Google
      </Button>
    </Box>
  );
};

export default SignIn;
