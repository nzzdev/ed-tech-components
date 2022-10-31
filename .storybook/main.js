const preprocess = require("svelte-preprocess");

module.exports = {
  stories: ["../stories/**/*.stories.svelte"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf",
  ],
  svelteOptions: {
    preprocess: preprocess(),
  },
  framework: "@storybook/svelte",
  //logLevel: "debug",
  // TODO: Checkout https://github.com/storybookjs/addon-svelte-csf/issues/4#issuecomment-1239224882
};
