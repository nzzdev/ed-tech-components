<script>
  // Component for handling internal & external links in all environments (Desktop, Mobile, Mobile-App)
  export let url;
  export let linkTarget = "";
  export let innerHtml;
  export let elementType = "div";

  function openUrl(url) {
    if (window.NZZ && vamp.navigateToArticle) {
      vamp.navigateToArticle(url.substr(url.lastIndexOf("Id.") + 1));
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
