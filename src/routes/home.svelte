<script lang="ts">
  import { push } from "svelte-spa-router";

  class App {
    constructor(name: string);
    constructor(name: string, iconAndRoute: string);
    constructor(name: string, icon: string, route: string);
    constructor(
      public name?: string,
      public icon: string = `${name.toLocaleLowerCase()}`,
      public route: string = `/${icon}`
    ) {}
  }

  export let apps: App[] = [new App("Twitter")];
</script>

<style type="text/scss">
  ol {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, auto));
    grid-auto-rows: min-content;
    justify-items: center;
    align-items: center;
    overflow-y: scroll;
    gap: 1em;
    padding: 10px;

    li {
      width: 100%;
      figure {
        text-align: center;
        figcaption {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
</style>

<ol>
  {#each apps as { name, icon, route }}
    <li>
      <figure on:click={() => push(route)}>
        <img
          src="assets/images/icons/{icon}.png"
          on:error|once={() => (icon = 'default')}
          alt={name}
          width="64"
          height="64" />
        <figcaption>{name}</figcaption>
      </figure>
    </li>
  {/each}
</ol>
