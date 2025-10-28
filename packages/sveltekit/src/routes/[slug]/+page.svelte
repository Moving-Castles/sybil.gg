<script lang="ts">
  import type { Page } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"

  import Metadata from "$lib/components/Metadata/Metadata.svelte"

  let { data }: { data: { page: Page } } = $props()

  const page = $derived(data.page)
</script>

<Metadata {page} />

<div class="container">
  {@html renderBlockText(page?.content?.content ?? [])}
</div>

<style lang="scss">
  .container {
    max-width: 45ch;
    padding-bottom: 2em;
  }
</style>
