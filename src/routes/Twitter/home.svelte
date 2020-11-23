<script>
	import { fade } from "svelte/transition";
	import { flip } from "svelte/animate";
	import Nav from "../../components/Nav.svelte";
	import Tweet from "../../components/Twitter/Tweet.svelte";

	let user = {
		username: "anonymous",
		displayName: "Anon",
		profileImage:
			"https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg",
	};

	let comment_count = 0,
		retweet_count = 0,
		likes_count = 0,
		tweets = [0];

	let i = setInterval(() => {
		tweets = [tweets.length, ...tweets];
		if (tweets.length == 1000) clearInterval(i);
	}, 2000);

	let height;
	$: document.body.style.height = document.documentElement.style.height = `${height}px`;

	const routes = [
		{ target: "home", icon: "fas fa-house" },
		{ target: "explore", icon: "fal fa-search" },
		{ target: "notifications", icon: "fal fa-bell" },
		{ target: "messages", icon: "fal fa-envelope" },
	];
</script>

<style type="text/scss">
	main {
		display: grid;
		overflow: hidden;
		grid-template-rows: [header] 50px [body] 1fr [footer] 50px;
		background-color: rgb(21, 32, 43);

		> header {
			display: grid;
			grid-auto-flow: column;
			grid-template-columns: auto 1fr auto;
			justify-items: center;
			align-items: center;
			gap: 1em;
			border-bottom: whitesmoke solid 1px;
			padding-left: 1em;
			padding-right: 1em;
			height: 100%;
			grid-area: header;

			img {
				width: 1.75em;
				border-radius: 50%;
			}
			h1 {
				font-size: 1.25em;
				font-weight: bold;
				color: whitesmoke;
				justify-self: start;
			}
			i {
				color: lightskyblue;
			}
		}

		ol {
			grid-area: body;
			overflow-y: scroll;
		}

		footer {
			grid-area: footer;
			border-top: whitesmoke solid 1px;
		}
	}
</style>

<svelte:window bind:innerHeight={height} />
<main>
	<header>
		<img src={user.profileImage} alt="Profile" />
		<h1>Home</h1>
		<i class="fal fa-stars" />
	</header>
	<footer>
		<Nav {routes} location="/twitter" />
	</footer>

	<ol>
		{#each tweets as tweet, i (tweet)}
			<li transition:fade animate:flip={100}>
				<Tweet {user} {comment_count} {likes_count} {retweet_count} />
			</li>
		{/each}
	</ol>
</main>
