<script lang="ts">
  import type { Page } from "@sanity-types"
  import { renderBlockText } from "$lib/modules/sanity"

  import Metadata from "$lib/components/Metadata/Metadata.svelte"

  export let data: {
    page: Page
  }

  $: page = data.page

  $: console.log(page)
</script>

<Metadata {page} />

<h1>{page?.title ?? ""}</h1>

<div class="content">
  {@html renderBlockText(page?.content?.content ?? [])}
</div>
