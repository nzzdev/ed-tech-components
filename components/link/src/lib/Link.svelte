<script lang="ts">
  export let url: string;
  export let linkTarget = "";
  export let elementType: "div" | "span" = "div";

  // Handles internal & external links for Mobile-App, Desktop- & Mobile-Browser
  function openUrl(url: string) {
    if ((window as any).NZZ && vamp.navigateToArticle) {
      vamp.navigateToArticle(url.substring(url.lastIndexOf("ld.") + 3));
    } else {
      (window as any).open(url, linkTarget).focus();
    }
  }
</script>

{#if elementType === "div"}
  <div on:click={() => openUrl(url)} on:keydown class="nzz-qcc-link">
    <slot />
  </div>
{:else if elementType === "span"}
  <span on:click={() => openUrl(url)} on:keydown class="nzz-qcc-link">
    <slot />
  </span>
{/if}

<style lang="scss">
  // Style overwrite example: <Link --color:"salmon" ... />
  // See: https://svelte.dev/docs#template-syntax-component-directives---style-props
  $defaultColor: var(--color, #05032d);
  $underlineColor: var(--underline-color, $defaultColor);
  $underlineWidth: var(--underline-width, 1px);
  $hoverOpacity: var(--hover-opacity, 0.6);

  @mixin textUnderline(
    $color: $underlineColor,
    $width: $underlineWidth
  ) {
    background-image: linear-gradient(90deg, $color, $color);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% $width;
  }

  .nzz-qcc-link {
    @include textUnderline();

    color: $defaultColor;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      opacity: $hoverOpacity;
    }
  }
</style>
