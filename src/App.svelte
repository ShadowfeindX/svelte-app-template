<script>
	import { fade } from "svelte/transition";
	import { flip } from "svelte/animate";

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
			li {
				section {
					display: grid;
					grid-auto-flow: column;
					grid-template-columns: 50px auto;
					gap: 20px;
					margin-top: 1em;
					margin-bottom: 1em;

					img {
						width: 100%;
						margin: 10px;
					}

					article {
						display: grid;
						grid-auto-flow: row;

						header {
							display: grid;
							grid-auto-flow: column;
							margin-bottom: 5px;
							color: rgb(136, 153, 166);

							h3 {
								font-weight: bold;
								color: white;
							}
							h6 {
								margin-left: -1em;
							}
						}

						p {
							color: whitesmoke;
							padding-right: 2em;
						}

						menu {
							display: grid;
							justify-items: start;
							align-items: center;
							grid-auto-flow: column;
							color: rgb(136, 153, 166);

							i {
								padding-right: 10px;
								padding-top: 10px;
							}
						}
					}
				}
			}
		}

		footer {
			grid-area: footer;
			border-top: whitesmoke solid 1px;
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
		<nav>
			<a href="/home"><i class="fas fa-house" /></a>
			<a href="/explore"><i class="fal fa-search" /></a>
			<a href="/notifications"><i class="fal fa-bell" /></a>
			<a href="/messages"><i class="fal fa-envelope" /></a>
		</nav>
	</footer>

	<ol>
		{#each tweets as tweet, i (tweet)}
			<li transition:fade animate:flip={100}>
				<section>
					<img src={user.profileImage} alt="Profile" />
					<article>
						<header>
							<h3>Display Name</h3>
							<h6>@username - 19h</h6>
							<i class="fal fa-ellipsis-h-alt" />
						</header>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
							vitae architecto deleniti, delectus nam consequatur exercitationem
							illum sed nobis quidem sint magnam quibusdam similique,
							repellendus consectetur placeat sunt! Esse, voluptate?
						</p>
						<menu>
							<span><i class="fal fa-comment" />{comment_count}</span>
							<span><i class="fal fa-retweet" />{retweet_count}</span>
							<span><i class="fal fa-heart" />{likes_count}</span>
							<i class="fal fa-upload" />
						</menu>
					</article>
				</section>
			</li>
		{/each}
	</ol>
</main>
