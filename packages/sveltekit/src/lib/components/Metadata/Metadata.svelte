<script lang="ts">
  import type { Page } from "@sanity-types"
  import { isEmpty, truncate } from "lodash-es"
  import { toPlainText } from "$lib/modules/sanity"

  let { page = undefined }: { page?: Page } = $props()

  const defaultDescription =
    "Sybil is a space for weird gaming and speculative worlding in Berlin."
  const defaultTitle = "SYBIL"
  const defaultImage = "https://sybil.gg/images/sybil-meta.png"

  // Helper function to safely extract content
  function safeContent(content: any, fallback: string): string {
    return !isEmpty(content) ? toPlainText(content) : fallback
  }

  const title = $derived.by(() => {
    const titleField = page?.title
    return titleField ? `${titleField} | ${defaultTitle}` : defaultTitle
  })

  const description = $derived.by(() => {
    const contentField = page?.content?.content ?? []
    return truncate(
      safeContent(contentField, safeContent(contentField, defaultDescription)),
      {
        length: 160,
        separator: " ",
      }
    )
  })

  const image = $derived(defaultImage)
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta property="twitter:title" content={title} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="twitter:description" content={description} />
  <meta name="image" content={image} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={image} />
  <meta property="twitter:image" content={image} />
</svelte:head>
