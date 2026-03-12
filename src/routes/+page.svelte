<script lang="ts">
	import { resolve } from '$app/paths';
	import { upcomingEvents } from '$lib/events';
</script>

<svelte:head>
	<title>Cambridge Alumni Society of Nevada | cantabnv.org</title>
	<meta
		name="description"
		content="Alumni community for University of Cambridge graduates living in Nevada. Events, membership, and the Cantab network in the region."
	/>
</svelte:head>

<section class="hero">
	<div class="hero-inner">
		<h1>Cambridge Alumni Society of Nevada</h1>
		<p class="hero-tagline">
			We connect <strong>University of Cambridge</strong> graduates and other affiliated individuals in
			Nevada—Las Vegas, Reno, and across the state—for events, networking, and the community in the region.
		</p>
	</div>
</section>

<p>Stay in the loop with upcoming events and society news—no membership fee required.</p>

{#if upcomingEvents().length > 0}
	<section class="teaser">
		<h2>Next up</h2>
		<p>
			<a href={resolve('/events')}>{upcomingEvents()[0].title}</a>
			— {new Date(upcomingEvents()[0].date).toLocaleDateString('en-US', { dateStyle: 'long' })} in {upcomingEvents()[0]
				.location}.
		</p>
		<p>
			<a href={resolve('/events')} class="cta">See all events →</a>
		</p>
	</section>
{:else}
	<p>
		<a href={resolve('/events')}>View our events</a> for past and upcoming gatherings.
	</p>
{/if}

<p>
	<a href={resolve('/join')} class="cta">Join the mailing list</a> to hear about future events and how
	to get involved.
</p>

<style>
	.hero {
		width: 100vw;
		margin-left: calc(-50vw + 50%);
		margin-right: calc(-50vw + 50%);
		margin-top: calc(-1 * var(--space-2xl));
		margin-bottom: var(--space-2xl);
		padding: var(--space-2xl) var(--space-md);
		background: var(--amLight);
	}

	.hero-inner {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.hero h1 {
		margin-bottom: var(--space-md);
	}

	.hero-tagline {
		font-size: 1.05rem;
		margin: 0;
		line-height: 1.6;
	}

	.teaser {
		margin: var(--space-2xl) 0;
		padding: var(--space-xl);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		box-shadow: 0 1px 3px rgba(31, 42, 68, 0.04);
	}

	.teaser h2 {
		margin-top: 0;
	}

	.cta {
		font-weight: 600;
	}
</style>
