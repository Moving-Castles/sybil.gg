<script lang="ts">
  import Logo from "$lib/components/graphics/logo.svelte"
  import Face from "$lib/components/graphics/face.svelte"
</script>

<!-- <div class="test">
  <img src="/images/1.png" alt="logo" />
</div> -->

<main>
  <div class="column left">
    <Logo />
    <!-- <Face /> -->
  </div>
  <div class="column right">
    <div class="menu">
      <div class="menu-inner">
        <div class="menu-item">Events</div>
        <div class="menu-item">Location</div>
        <div class="menu-item active">About</div>
        <div class="menu-item">Contact</div>
      </div>
    </div>
    <slot></slot>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    height: 100vh;
    width: 100vw;

    .column {
      width: 50%;
      padding: 5px;
      height: 100vh;
      overflow-y: auto;

      &.left {
        // display: flex;
        // align-items: center;
        // justify-content: center;
      }

      &.right {
        // background-color: blue;
        // padding-top: 6em;
      }
    }
  }

  .test {
    position: fixed;
    bottom: -20px;
    left: 80px;
    width: 1000px;
    height: auto;
    z-index: 1;
    pointer-events: none;
  }

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;

    .menu-inner {
      display: inline-flex;
      flex-direction: row;

      .menu-item {
        padding-right: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--foreground-color);

        &.active {
          font-weight: bold;
          // border-bottom: 1px dashed var(--foreground-color);
        }
      }
    }
  }
</style>
