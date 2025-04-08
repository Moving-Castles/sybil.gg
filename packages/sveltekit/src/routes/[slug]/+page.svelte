<script lang="ts">
  import type { Page } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"

  import Metadata from "$lib/components/Metadata/Metadata.svelte"

  export let data: {
    page: Page
  }

  $: page = data.page
</script>

<Metadata {page} />

<div class="container">
  {@html renderBlockText(page?.content?.content ?? [])}
</div>

<style lang="scss">
  .container {
    color: var(--foreground-color);
    max-width: 55ch;
    padding-bottom: 10em;
    line-height: 1.2em;
  }
</style>
