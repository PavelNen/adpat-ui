import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { CSSReset, ThemeProvider } from "../src";
import 'storybook-chromatic';

const req = require.context("../src", true, /examples\.(js|mdx)$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      {children}
      {/* <Box pos="fixed" bottom="24px" right="24px" zIndex={2}>
        <Button
          variant="outline"
          onClick={toggleColorMode}
          leftIcon={colorMode === "dark" ? "sun" : "moon"}
        >
          {colorMode === "dark" ? "Light" : "Dark"}
        </Button>
      </Box> */}
    </ThemeProvider>
  );
};

addDecorator((story) => <AppProvider>{story()}</AppProvider>);
addDecorator(withKnobs);
addDecorator(withA11y);

configure(loadStories, module);
