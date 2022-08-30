import { extendTheme, theme } from "@chakra-ui/react";

const extend = extendTheme({
  fonts: {
    body: "verdana,system-ui, sans-serif",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: "black",
        color: "white",
      },
    }),
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.twitter,
    secondary: theme.colors.whiteAlpha,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "sm",
        fontFamily: "arial",
      },
    },
  },
});

export default extend;
