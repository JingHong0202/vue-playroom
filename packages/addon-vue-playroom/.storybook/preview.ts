import type { Preview } from "@storybook/react";
// import { withGlobals } from './withGlobals'
const preview: Preview = {
  parameters: {
    // backgrounds: {
    //   default: "light",
    // },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: { story: { inline: true } }
  },
};

export default preview;
