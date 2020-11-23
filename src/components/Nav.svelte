<script lang="ts">
  export let routes: {
      target: string;
      icon: string;
    }[] = [],
    location = "";
</script>

<style lang="scss">
  nav {
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    align-items: center;
    color: rgb(136, 153, 166);
    height: 100%;
    font-size: 1.5em;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<nav>
  {#each routes as { target, icon }}
    <a href="#{location}/{target}"><i class={icon} /></a>
  {/each}
</nav>
