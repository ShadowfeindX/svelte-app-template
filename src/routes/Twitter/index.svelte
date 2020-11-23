<script>
  import Router, { replace } from "svelte-spa-router";
  import Home from "./home.svelte";
  const prefix = "/twitter";
  const routes = {
    "/home": Home,
  };
  replace('/twitter/home');
</script>

<Router {prefix} {routes} />
