<script lang="ts">
  import Metadata from "$lib/components/Metadata/Metadata.svelte"
</script>

<Metadata />

<div class="container">
  <p class="letter-space-pos">UNDER CONSTRUCTION</p>
  <p class="letter-space-neg-1">╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬╫╬</p>
  <p class="letter-space-neg-1">
    <a href="/apply">►!!! CALL FOR RESIDENTS</a>
  </p>
  <p class="letter-space-neg-4">
    ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺
  </p>
  <!-- <p class="form">
    <input type="text" placeholder="mailing list" />
    <button>&lt;submit&gt;</button>
  </p> -->
  <!-- <p class="letter-space-neg-4">
    ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺
  </p> -->
  <p class="letter-space-neg-1 small">
    <a href="mailto:info@sybil.gg">☼ info@sybil.gg</a>
  </p>
  <p class="letter-space-neg-1 small">
    <a href="https://www.instagram.com/sybil.gg" target="_blank">
      ☼ instagram.com/sybil.gg
    </a>
  </p>
  <p class="letter-space-neg-1 small">☼ Leuschnerdamm 13, 10999 Berlin</p>
</div>

<style lang="scss">
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
