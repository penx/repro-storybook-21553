const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: { builder: "@storybook/builder-vite" },
  docs: {
    autodocs: "tag",
  },
};
module.exports = config;
