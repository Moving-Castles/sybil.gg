<script lang="ts">
  import type {Snippet} from 'svelte'

  let {children}: {children: Snippet} = $props()
</script>

<main>
  <p class="letter-space-neg-1"><a href="/">⌂SYBIL⌂SYBIL⌂SYBIL⌂SYBIL⌂</a></p>
  <p class="letter-space-neg-1">╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬</p>
  {@render children()}
</main>

<style lang="scss">
  main {
    padding: 5px;
  }
</style>
