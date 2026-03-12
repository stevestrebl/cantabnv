<script lang="ts">
	import { resolve } from '$app/paths';
	import { upcomingEvents, pastEvents } from '$lib/events';

	const upcoming = $derived(upcomingEvents());
	const past = $derived(pastEvents());

	function formatDate(iso: string) {
		return new Date(iso).toLocaleDateString('en-US', { dateStyle: 'long' });
	}
</script>

<svelte:head>
	<title>Events | Cambridge Alumni Society of Nevada</title>
	<meta
		name="description"
		content="Upcoming and past events for the Cambridge Alumni Society of Nevada."
	/>
</svelte:head>

<h1>Events</h1>

<p>
	We run informal meetups for Cambridge alumni and other affiliated individuals in Nevada. <a
		href={resolve('/join')}>Sign up for our mailing list</a
	>
	to stay in the loop and to join our WhatsApp group. Events are also posted on the
	<a href="https://www.alumni.cam.ac.uk/alumni-events" target="_blank" rel="noopener noreferrer"
		>University’s alumni events page</a
	>.
</p>

{#if upcoming.length > 0}
	<section>
		<h2>Upcoming</h2>
		<ul class="event-list">
			{#each upcoming as event (event.slug ?? event.title)}
				<li class="event-card">
					<h3>{event.title}</h3>
					<p class="meta">{formatDate(event.date)} · {event.location}</p>
					<p>{event.description}</p>
				</li>
			{/each}
		</ul>
	</section>
{/if}

<section>
	<h2>Past events</h2>
	{#if past.length > 0}
		<ul class="event-list">
			{#each past as event (event.slug ?? event.title)}
				<li class="event-card past">
					<h3>{event.title}</h3>
					<p class="meta">{formatDate(event.date)} · {event.location}</p>
					<p>{event.description}</p>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="muted">No past events listed yet.</p>
	{/if}
</section>

<style>
	.event-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.event-card {
		padding: var(--space-xl);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-left: 3px solid var(--color-gold);
		border-radius: var(--radius-lg);
		box-shadow: 0 1px 3px rgba(31, 42, 68, 0.04);
	}

	.event-card.past {
		opacity: 0.88;
		border-left-color: var(--color-cambridge-blue);
	}

	.event-card h3 {
		margin-top: 0;
	}

	.meta {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		margin-bottom: var(--space-sm);
	}

	.muted {
		color: var(--color-text-muted);
	}
</style>
