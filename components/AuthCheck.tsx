import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import SignIn from "./SignIn";

const AuthCheck = ({ children }: any) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user && !loading && router.pathname === "/") {
      router.replace("/home");
    }
  }, [loading]);

  if (user && !loading && router.pathname !== "/") {
    return children;
  } else if (!user && !loading) {
    return <SignIn />;
  } else {
    return <Spinner />;
  }
};

export default AuthCheck;
