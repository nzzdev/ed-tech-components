<script lang="ts">
  // Component for handling internal & external links in all environments (Desktop, Mobile, Mobile-App)
  export let url: string;
  export let linkTarget = "";
  export let innerHtml: string;
  export let elementType: "div" | "span" = "div";

  function openUrl(url: string) {
    if ((window as any).NZZ && vamp.navigateToArticle) {
      vamp.navigateToArticle(url.substring(url.lastIndexOf("ld.") + 3));
    } else {
      window.open(url, linkTarget).focus();
    }
  }
</script>

{#if elementType === "div"}
  <div on:click={() => openUrl(url)} on:keydown class="nzz-qcc-link">
    {@html innerHtml}
  </div>
{:else if elementType === "span"}
  <span on:click={() => openUrl(url)} on:keydown class="nzz-qcc-link">
    {@html innerHtml}
  </span>
{/if}
