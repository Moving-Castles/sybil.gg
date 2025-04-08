<script lang="ts">
  // ...
</script>

<main>
  <div class="column center">
    <slot></slot>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    height: 100vh;
    width: 100vw;

    .column {
      padding: 5px;
    }
  }
</style>
