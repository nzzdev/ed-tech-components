const preprocess = require("svelte-preprocess");

module.exports = {
  stories: [
    //"../stories/**/*.stories.svelte",
    "../components/!(node_modules)**/*.stories.svelte",
    // Uncomment to support 'Data Driven' stories
    //"../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
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
