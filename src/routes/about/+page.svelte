<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>About | Cambridge Alumni Society of Nevada</title>
	<meta
		name="description"
		content="About the Cambridge Alumni Society of Nevada and the Cantab network in the region."
	/>
</svelte:head>

<h1>About</h1>

<p>
	The <strong>Cambridge Alumni Society of Nevada</strong> is a volunteer-run group for Cambridge
	alumni and other Cambridge-affiliated individuals in Nevada. We are officially recognized by the
	University of Cambridge as the
	<a href="https://www.alumni.cam.ac.uk/group/nevada" target="_blank" rel="noopener noreferrer"
		>Nevada alumni group</a
	>.
</p>

<h2>Founding Committee</h2>
<ul class="committee">
	<li>Steve Strebl (Wolfson College 2014)</li>
	<li>Darren Heyman (Hughes Hall 2008)</li>
	<li>Adam Layton (Wolfson College 2011)</li>
	<li>Sean Shu (St Catharine's College 2023)</li>
</ul>

<h2>Get in touch</h2>
<p>
	We are just getting started! <a href={resolve('/join')}>Join us</a> in our endeavor to build the Cambridge
	alumni community in Nevada.
</p>

<style>
	.committee {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--space-lg);
	}

	.committee li {
		padding: var(--space-xs) 0;
	}
</style>
