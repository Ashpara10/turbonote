import { ChakraProps, extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
const theme = extendTheme({
  font: {
    heading: `'Inter',sans-serif `,
    body: `'Inter',sans-serif `,
  },
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "#121212" : "whiteAlpha.100",
      },
    }),
  },
});
export default theme;
