import { css } from "../../styled-system/css";

export const homeStyles = {
  container: css({
    display: "grid",
    placeItems: "center",
    minHeight: "100vh",
    color: "foreground",
  }),

  content: css({
    maxWidth: "breakpoint-xl",
    px: 4,
    py: 16,
    mx: "auto",
    textAlign: "center",
  }),

  title: css({
    mx: "auto",
    mb: 2,
    fontSize: "4xl",
    fontWeight: "bold",
    color: "transparent",
    bgGradient: "to-r",
    gradientFrom: "yellow.300",
    gradientTo: "sky.400",
    backgroundClip: "text",
    width: "fit-content",
  }),

  description: css({
    fontSize: "lg",
    color: "gray.400",
    mb: 1,
    _dark: {
      color: "gray.300",
    },
  }),

  bold: css({
    fontWeight: "bold",
  }),

  italic: css({
    fontStyle: "italic",
  }),
};
