<script>
  export let url;
  export let linkTarget = "";
  export let innerHtml;
  export let elementType = "div";

  // Handles internal & external links in all environments (Desktop, Mobile, Mobile-App)
  function openUrl(url) {
    if (window.NZZ && vamp.navigateToArticle) {
      vamp.navigateToArticle(url.substr(url.lastIndexOf("ld.") + 3));
    } else {
      window.open(url, linkTarget).focus();
    }
  }
</script>

{#if elementType === "div"}
  <div on:click={() => openUrl(url)} class="nzz-qcc-link">
    {@html innerHtml}
  </div>
{:else if elementType === "span"}
  <span on:click={() => openUrl(url)} class="nzz-qcc-link">
    {@html innerHtml}
  </span>
{/if}
