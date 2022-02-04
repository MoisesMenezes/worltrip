import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "300": "#F5F8FA",
      "400": "#DADADA",
      "500": "#999999",
      "800": "#47585B"
    },
    yellow: {
      "500": "#FFBA08"
    }
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },

  styles: {
    global: {
      body: {
        bg: "gray.300"
      }
    }
  }
});
