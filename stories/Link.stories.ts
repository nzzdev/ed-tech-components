// 'data driven' template generation example
// NOTE: Same as Link.stories.svelte
import { default as Link } from "./../components/link/Link.svelte";
import type { LinkArgs } from "../components/link/Link.interfaces";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    url: { control: "text" },
    innerHtml: { control: "text" },
    elementType: {
      control: { type: "select" },
      options: ["div", "span"],
      defaultValue: "div",
    },
    linkTarget: {
      control: { type: "select" },
      options: ["", "_self", "_blank", "_parent", "_top"],
      defaultValue: "",
    },
  },
};

const defaultArgs: LinkArgs = {
  url: "https://www.nzz.ch/technologie/abschied-vom-passwort-wie-man-sich-in-zukunft-einloggen-wird-ld.1701475",
};

// TODO: Replace type with 'Story<component-name>' after type exists in svelte specific .d.ts file
const Template = (args: LinkArgs) => ({
  props: args,
});

export const Defaults: { args: LinkArgs } = Template.bind({});
Defaults.args = { ...defaultArgs };

export const ElementTypeSpan: { args: LinkArgs } = Template.bind({});
ElementTypeSpan.args = {
  ...defaultArgs,
  elementType: "span",
};
