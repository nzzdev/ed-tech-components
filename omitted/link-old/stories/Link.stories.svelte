<!-- 
  NOTE: Native svelte sfc stories currently missing typescript support:
        https://github.com/storybookjs/addon-svelte-csf/issues/4
-->
<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Link from "../Link.svelte";

  const defaultArgs = {
    url:
      "https://www.nzz.ch/technologie/abschied-vom-passwort-wie-man-sich-in-zukunft-einloggen-wird-ld.1701475",
  };

  const args = {
    default: { ...defaultArgs },
    elementTypeSpan: { ...defaultArgs, elementType: "span" },
  };
</script>

<Meta
  title="Link"
  component={Link}
  argTypes={{
    url: { control: "text" },
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
  }}
/>

<Template let:args>
  <Link {...args}>Zum Artikel</Link>
</Template>

<Story name="defaults" args={args.default} />

<Story name="elementType: 'span'" args={args.elementTypeSpan} />
