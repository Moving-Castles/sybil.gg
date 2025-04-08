<script lang="ts">
  // import type { Page } from "@sanity-types"

  // import Metadata from "$lib/components/Metadata/Metadata.svelte"

  // export let data: {
  //   page: Page
  // }

  // console.log(data)

  // $: page = data.page
</script>

<!-- <Metadata {page} /> -->

<div class="container">
  <p class="letter-space-neg-1">⌂SYBIL⌂SYBIL⌂SYBIL⌂SYBIL⌂</p>
  <p class="letter-space-neg-1">╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬</p>
  <!-- <p class="letter-space-pos">▒▒▓UNDER CONSTRUCTION▓▒▒</p> -->
  <p class="letter-space-pos">UNDER CONSTRUCTION</p>
  <p class="letter-space-neg-1">╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬</p>
  <p class="letter-space-neg-1">
    <a href="mailto:info@sybil.gg">►info@sybil.gg</a>
  </p>
  <p class="form">
    <input type="text" placeholder="mailing list" />
    <button>&lt;submit&gt;</button>
  </p>
  <p class="letter-space-neg-4">
    ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺
  </p>
</div>

<style lang="scss">
  .container {
    color: var(--foreground-color);

    font-size: var(--font-size-normal);

    @media (max-width: 768px) {
      font-size: var(--font-size-small);
    }
  }

  .letter-space-neg-1 {
    letter-spacing: -0.1em;
  }

  .letter-space-pos-1 {
    letter-spacing: 0.1em;
  }

  .letter-space-neg-4 {
    letter-spacing: -0.7em;
  }

  p {
    margin-bottom: 0;
    margin-top: 0;
  }

  input {
    font-size: 1em;
    font-family: var(--font-family-normal);
    background-color: var(--foreground-color);
    color: var(--background-color);
    border: none;
    outline: none;
    padding-inline: 5px;
    height: 1.6em;
    border-radius: 0 !important;

    &::placeholder {
      color: var(--background-color);
    }

    @media (max-width: 768px) {
      font-size: 0.8em;
    }
  }

  button {
    font-size: 1em;
    font-family: var(--font-family-normal);
    background-color: var(--foreground-color);
    color: var(--background-color);
    border: none;
    outline: none;
    cursor: pointer;
    height: 1.6em;
    border-radius: 0 !important;

    &:hover,
    &:active {
      background-color: var(--foreground-color-darker);
      color: var(--background-color);
    }

    @media (max-width: 768px) {
      font-size: 0.8em;
    }
  }

  .form {
    margin-top: 0.5em;
  }
</style>
