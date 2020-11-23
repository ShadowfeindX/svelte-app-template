<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./routes/home.svelte";
  import Twitter from "./routes/Twitter/index.svelte";

  const routes = {
    "/": Home,
    "/twitter": Twitter,
    "/twitter/*": Twitter,
  };
</script>

<Router {routes} />
