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
  class="nzz-qcc-tabs-container {activeTab ? 'nzz-qcc-tabs-container--expanded' : ''} 
    {isSmallDisplayPort ? '' : 'nzz-qcc-tabs-container--desktop'}"
>
  <div class="nzz-qcc-tabs-inner-container">
    <div class="nzz-qcc-tabs">
      {#each tabs as tab}
        <button
          class="nzz-qcc-tab s-button s-button--small 
          {activeTab === tab.id ? 'nzz-qcc-tab--active' : ''}"
          on:click|preventDefault={() => toggleTab(tab.id)}
        >
          {tab.label}
        </button>
      {/each}
    </div>
    {#if activeTab}
      <div
        class="nzz-qcc-tab-container {activeTab ? 'nzz-qcc-tab-container--active' : ''}"
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
