<script>

  export let isSmallDisplayPort = false;
  // Metadata can contain data needed by tab-content (e.g. input data for component)
  export let metadata = {}; 
  export let activeTab = "";

  $: tabs = [
    { id: "LegendComponent", label: "Component tab" },
    { id: "InlineContent", label: "Inline tab", },
  ];

  function toggleTab(component) {
    if (component === activeTab) {
      activeTab = "";
    } else {
      activeTab = component;
    }
  }
</script>

<div
  class="etc-tabs-container {activeTab ? 'etc-tabs-container--expanded' : ''} 
    {isSmallDisplayPort ? '' : 'etc-tabs-container--desktop'}"
>
  <div class="etc-tabs-inner-container">
    <div class="etc-tabs">
      {#each tabs as tab}
        <button
          class="etc-tab s-button s-button--small 
          {activeTab === tab.id ? 'etc-tab--active' : ''}"
          on:click|preventDefault={() => toggleTab(tab.id)}
        >
          {tab.label}
        </button>
      {/each}
    </div>
    {#if activeTab}
      <div
        class="etc-tab-container {activeTab ? 'etc-tab-container--active' : ''}"
      >
        {#if activeTab === "LegendComponent"}
        Legend component comes in here
          <!-- <Legend inputData={metadata} /> -->
        {:else if activeTab === "InlineContent"}
          <div>Lorem Ipsum and so on</div>
        {/if}
      </div>
    {/if}
  </div>
</div>
