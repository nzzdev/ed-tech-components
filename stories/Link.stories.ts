import { default as Link } from "./../components/link/Link.svelte";
import { LinkArgs } from "../components/link/Link.interfaces";

export default {
  title: "Link",
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
  innerHtml: "Zum Artikel",
};

// TODO: Replace type with 'Story<component-name>' after type exists in svelte specific .d.ts file
const Template = (args: LinkArgs) => ({
  props: args,
});

export const DefaultStory: { args: LinkArgs } = Template.bind({});
DefaultStory.args = { ...defaultArgs };

export const ElementTypeSpanStory: { args: LinkArgs } = Template.bind({});
ElementTypeSpanStory.args = {
  ...defaultArgs,
  elementType: "span",
};
