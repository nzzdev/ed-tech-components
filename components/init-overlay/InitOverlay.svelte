<script lang="ts">
  let initialized = false;

  export let initCallback: () => void = () => {};

  function initialize() {
    initialized = true;

    initCallback();
  }
</script>

<div on:click|once={initialize} class="etsr__init-overlay">
  {#if $$slots.overlay && $$slots.content}
    {#if !initialized}
      <slot name="overlay" />
    {/if}

    {#if initialized}
      <slot name="content" />
    {/if}
  {:else}
    Missing named slots 'overlay' & 'content'
  {/if}
</div>
