<script lang="ts">
  import type { Page } from "@sanity-types"
  import { isEmpty, truncate } from "lodash-es"
  import { toPlainText, urlFor } from "$lib/modules/sanity"

  export let page: Page | undefined = undefined

  const defaultDescription =
    "Sybil is a space for creative game design opening in early March 2025 in Berlin."
  const defaultTitle = "SYBIL"
  const defaultImage = ""

  // Helper function to safely extract content
  function safeContent(content: any, fallback: string): string {
    return !isEmpty(content) ? toPlainText(content) : fallback
  }

  $: title = (() => {
    const titleField = page?.title
    return titleField ? `${titleField} | ${defaultTitle}` : defaultTitle
  })()

  $: description = (() => {
    const contentField = page?.content?.content ?? []
    return truncate(
      safeContent(contentField, safeContent(contentField, defaultDescription)),
      {
        length: 160,
        separator: " ",
      }
    )
  })()

  //   $: image = page?.mainImage
  //     ? urlFor(page.mainImage).quality(80).height(1200).width(1200).url()
  //     : defaultImage

  $: image = defaultImage
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
